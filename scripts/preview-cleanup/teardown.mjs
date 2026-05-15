const AWS_EXEC_OPTS = { ignoreReturnCode: true, silent: true };

async function deleteGithubEnvironment(octokit, owner, repo, envName) {
  try {
    await octokit.rest.repos.deleteAnEnvironment({ owner, repo, environment_name: envName });
    return { ok: true };
  } catch (err) {
    if (err.status === 404) return { ok: true };
    return { ok: false, error: `env delete failed: ${err.message}` };
  }
}

async function deleteAmplifyBranch(exec, appId, branchName, awsRegion) {
  const { exitCode, stderr } = await exec.getExecOutput(
    'aws',
    ['amplify', 'delete-branch', '--app-id', appId, '--branch-name', branchName, '--region', awsRegion],
    AWS_EXEC_OPTS,
  );
  if (exitCode === 0 || stderr.includes('NotFoundException')) return { ok: true };
  return { ok: false, error: `amplify branch delete failed: ${stderr.trim()}` };
}

export async function teardown({ octokit, exec, owner, repo, appId, envName, branchName, awsRegion }) {
  const env = await deleteGithubEnvironment(octokit, owner, repo, envName);
  const branch = await deleteAmplifyBranch(exec, appId, branchName, awsRegion);
  return {
    envDeleted: env.ok,
    branchDeleted: branch.ok,
    errors: [env.error, branch.error].filter(Boolean),
  };
}
