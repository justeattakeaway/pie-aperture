import { devices } from '@playwright/test';
import { getEnvironmentBaseUrl } from './playwright-helpers/configuration-helper';

const baseUrl = getEnvironmentBaseUrl(process.env.APP_NAME);
const monorepoRoot = __dirname;

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */
// require('dotenv').config();

/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default {
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: [['html', { outputFolder: `${monorepoRoot}/playwright-reports/${process.env.APP_NAME}-playwright-report`, open: 'never' }]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    baseURL: baseUrl,
    testIdAttribute: 'data-test-id',
    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: 'retain-on-failure',
  },
  /* Configure projects for major browsers */
  projects: [
    {
        name: 'system',
        use: { ...devices['Desktop Chrome'] },
        testMatch: `${monorepoRoot}/test/system/**/*.spec.ts`,
    }
],

webServer: process.env.CI ? undefined : {
  command: `cd ./${process.env.APP_NAME} && yarn dev`,
  url: baseUrl,
  reuseExistingServer: true,
  stdout: 'ignore',
  stderr: 'pipe',
},
};
