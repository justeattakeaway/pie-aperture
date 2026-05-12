const PREVIEW_BRANCH_PREFIX = 'pr';

export function classify({ branchName, stage, lastBuildTime, pr, now, cutoffDays }) {
  if (stage === 'PRODUCTION') return 'skip';
  if (!branchName.startsWith(PREVIEW_BRANCH_PREFIX)) return 'skip';
  if (pr === null) return 'orphaned';
  if (pr.state === 'closed') return 'orphaned';

  const cutoffTime = new Date(now).getTime() - cutoffDays * 24 * 60 * 60 * 1000;
  const buildTime = lastBuildTime ? new Date(lastBuildTime).getTime() : null;
  if (buildTime === null || buildTime < cutoffTime) return 'stale-open';

  return 'keep';
}
