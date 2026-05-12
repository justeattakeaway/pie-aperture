import { describe, it, expect } from 'vitest';
import { classify } from './classify-branch.mjs';

const NOW = '2026-01-15T02:00:00.000Z';
const CUTOFF_DAYS = 14;

function daysAgo(n) {
  return new Date(new Date(NOW).getTime() - n * 24 * 60 * 60 * 1000).toISOString();
}

describe('classify', () => {
  it('skips PRODUCTION branches', () => {
    expect(classify({
      branchName: 'main',
      stage: 'PRODUCTION',
      lastBuildTime: daysAgo(1),
      pr: { state: 'open' },
      now: NOW,
      cutoffDays: CUTOFF_DAYS,
    })).toBe('skip');
  });

  it('skips non-pr* branch names', () => {
    expect(classify({
      branchName: 'feature-xyz',
      stage: 'NONE',
      lastBuildTime: daysAgo(1),
      pr: { state: 'open' },
      now: NOW,
      cutoffDays: CUTOFF_DAYS,
    })).toBe('skip');
  });

  it('orphans closed PR', () => {
    expect(classify({
      branchName: 'pr42',
      stage: 'NONE',
      lastBuildTime: daysAgo(1),
      pr: { state: 'closed' },
      now: NOW,
      cutoffDays: CUTOFF_DAYS,
    })).toBe('orphaned');
  });

  it('orphans merged PR (GitHub sets state to closed on merge)', () => {
    expect(classify({
      branchName: 'pr42',
      stage: 'NONE',
      lastBuildTime: daysAgo(1),
      pr: { state: 'closed' },
      now: NOW,
      cutoffDays: CUTOFF_DAYS,
    })).toBe('orphaned');
  });

  it('orphans when no matching PR found (null)', () => {
    expect(classify({
      branchName: 'pr42',
      stage: 'NONE',
      lastBuildTime: daysAgo(1),
      pr: null,
      now: NOW,
      cutoffDays: CUTOFF_DAYS,
    })).toBe('orphaned');
  });

  it('keeps open PR with recent build', () => {
    expect(classify({
      branchName: 'pr42',
      stage: 'NONE',
      lastBuildTime: daysAgo(5),
      pr: { state: 'open' },
      now: NOW,
      cutoffDays: CUTOFF_DAYS,
    })).toBe('keep');
  });

  it('marks stale-open when build is older than cutoff', () => {
    expect(classify({
      branchName: 'pr42',
      stage: 'NONE',
      lastBuildTime: daysAgo(15),
      pr: { state: 'open' },
      now: NOW,
      cutoffDays: CUTOFF_DAYS,
    })).toBe('stale-open');
  });

  it('keeps open PR with no jobs but recent branch createTime (passed as lastBuildTime)', () => {
    expect(classify({
      branchName: 'pr42',
      stage: 'NONE',
      lastBuildTime: daysAgo(3),
      pr: { state: 'open' },
      now: NOW,
      cutoffDays: CUTOFF_DAYS,
    })).toBe('keep');
  });

  it('marks stale-open for open PR with no jobs and old branch createTime (passed as lastBuildTime)', () => {
    expect(classify({
      branchName: 'pr42',
      stage: 'NONE',
      lastBuildTime: daysAgo(20),
      pr: { state: 'open' },
      now: NOW,
      cutoffDays: CUTOFF_DAYS,
    })).toBe('stale-open');
  });

  it('keeps branch when build is at exactly the cutoff boundary (strict < comparison)', () => {
    expect(classify({
      branchName: 'pr42',
      stage: 'NONE',
      lastBuildTime: daysAgo(14),
      pr: { state: 'open' },
      now: NOW,
      cutoffDays: CUTOFF_DAYS,
    })).toBe('keep');
  });
});
