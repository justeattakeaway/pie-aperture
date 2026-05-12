import { classify } from './classify-branch.mjs';
import { teardown } from './teardown.mjs';

const APPS = [
  { appId: 'd1xxjuy6vbm7pk', envPrefix: 'nextjs-app-v14-pr-', name: 'nextjs-app-v14' },
  { appId: 'dg9syjb0jj07x',  envPrefix: 'nextjs-app-v15-pr-', name: 'nextjs-app-v15' },
  { appId: 'd36dan3bxjue8c', envPrefix: 'nuxt-app-pr-',       name: 'nuxt-app'       },
  { appId: 'd2vb6sjgivffb3', envPrefix: 'vanilla-app-pr-',    name: 'vanilla-app'    },
];
const AWS_REGION = 'eu-west-1';
const CUTOFF_DAYS = parseInt(process.env.AMPLIFY_CUTOFF_DAYS);
const MAX_SUMMARY_ROWS = 200;
const AWS_EXEC_OPTS = { ignoreReturnCode: true, silent: true };

export async function run({ github, context, core, exec }) {
  const owner = context.repo.owner;
  const repo = context.repo.repo;
  const runStartedAt = new Date().toISOString();

  const candidates = await gatherCandidates({ github, owner, repo, exec, core, runStartedAt });
  const results = await teardownAll({ candidates, github, owner, repo, exec, core });
  await writeSummary(core, results, candidates.length);

  return { failed: results.filter(r => !r.success).length };
}

async function gatherCandidates({ github, owner, repo, exec, core, runStartedAt }) {
  const candidates = [];
  for (const app of APPS) {
    let branches;
    try {
      branches = await listAmplifyBranches(exec, app.appId);
    } catch (err) {
      core.warning(`Failed to list branches for ${app.name}: ${err.message}`);
      continue;
    }
    for (const branch of branches) {
      const candidate = await evaluateBranch({ branch, app, github, owner, repo, exec, core, runStartedAt });
      if (candidate) candidates.push(candidate);
    }
  }
  return candidates;
}

async function evaluateBranch({ branch, app, github, owner, repo, exec, core, runStartedAt }) {
  const prMatch = branch.branchName.match(/^pr(\d+)$/);
  if (!prMatch) return null;
  const prNumber = parseInt(prMatch[1]);

  const lastBuildTime = await getLastBuildTime(exec, app.appId, branch.branchName, branch.createTime);
  const pr = await fetchPullRequest(github, owner, repo, prNumber, core);
  const classification = classify({
    branchName: branch.branchName,
    stage: branch.stage,
    lastBuildTime,
    pr,
    now: runStartedAt,
    cutoffDays: CUTOFF_DAYS,
  });

  if (classification !== 'orphaned' && classification !== 'stale-open') return null;
  return {
    app,
    branchName: branch.branchName,
    prNumber,
    classification,
    envName: `${app.envPrefix}${prNumber}`,
  };
}

async function fetchPullRequest(github, owner, repo, prNumber, core) {
  try {
    const { data } = await github.rest.pulls.get({ owner, repo, pull_number: prNumber });
    return { state: data.state };
  } catch (err) {
    if (err.status === 404) return null;
    core.warning(`Failed to fetch PR #${prNumber}: ${err.message}`);
    return null;
  }
}

async function teardownAll({ candidates, github, owner, repo, exec, core }) {
  const results = [];
  for (const candidate of candidates) {
    const teardownResult = await teardown({
      octokit: github,
      exec,
      owner,
      repo,
      appId: candidate.app.appId,
      envName: candidate.envName,
      branchName: candidate.branchName,
      awsRegion: AWS_REGION,
    });
    const success = teardownResult.errors.length === 0;
    if (candidate.classification === 'stale-open' && success) {
      await postInactivityComment(github, owner, repo, candidate.prNumber, core);
    }
    results.push({ candidate, teardownResult, success });
  }
  return results;
}

async function postInactivityComment(github, owner, repo, prNumber, core) {
  try {
    await github.rest.issues.createComment({
      owner,
      repo,
      issue_number: prNumber,
      body: `Preview branch deleted due to inactivity (no Amplify build in the last ${CUTOFF_DAYS} days). Push a commit or re-run CI to redeploy.`,
    });
  } catch (err) {
    core.warning(`Failed to comment on PR #${prNumber}: ${err.message}`);
  }
}

async function writeSummary(core, results, totalCandidates) {
  const rows = results.slice(0, MAX_SUMMARY_ROWS).map(({ candidate, teardownResult, success }) => ({
    app: candidate.app.name,
    branch: candidate.branchName,
    pr: `#${candidate.prNumber}`,
    reason: candidate.classification,
    envDelete: teardownResult.envDeleted ? '✓' : '✗',
    branchDelete: teardownResult.branchDeleted ? '✓' : '✗',
    status: success ? 'success' : `failed: ${teardownResult.errors.join('; ')}`,
  }));
  await core.summary.addRaw(renderSummary(rows, totalCandidates)).write();
}

function renderSummary(rows, totalCandidates) {
  if (rows.length === 0) return '## Amplify Preview Cleanup\n\nNo stale branches found.\n';
  const header = '| App | Branch | PR | Reason | Env delete | Branch delete | Status |';
  const sep = '|-----|--------|----|--------|-----------|---------------|--------|';
  const body = rows
    .map(r => `| ${r.app} | ${r.branch} | ${r.pr} | ${r.reason} | ${r.envDelete} | ${r.branchDelete} | ${r.status} |`)
    .join('\n');
  const truncation = totalCandidates > rows.length
    ? `\n\n_...and ${totalCandidates - rows.length} more (truncated)_`
    : '';
  return `## Amplify Preview Cleanup\n\n${header}\n${sep}\n${body}${truncation}\n`;
}

async function listAmplifyBranches(exec, appId) {
  const args = ['amplify', 'list-branches', '--app-id', appId, '--region', AWS_REGION];
  const { exitCode, stdout, stderr } = await exec.getExecOutput('aws', args, AWS_EXEC_OPTS);
  if (exitCode !== 0) throw new Error(`list-branches failed for ${appId}: ${stderr.trim()}`);
  return JSON.parse(stdout).branches;
}

async function getLastBuildTime(exec, appId, branchName, branchCreateTime) {
  const { exitCode, stdout } = await exec.getExecOutput(
    'aws',
    ['amplify', 'list-jobs', '--app-id', appId, '--branch-name', branchName, '--max-items', '1', '--region', AWS_REGION],
    AWS_EXEC_OPTS,
  );
  if (exitCode !== 0) return branchCreateTime;
  try {
    const result = JSON.parse(stdout);
    return result.jobSummaries?.[0]?.endTime ?? branchCreateTime;
  } catch {
    return branchCreateTime;
  }
}
