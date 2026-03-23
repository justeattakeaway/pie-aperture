import { getEnvironmentBaseUrl } from './playwright-helpers/configuration-helper';

const appName = process.env.APP_NAME;

if (!appName) {
    throw new Error('APP_NAME is required for Percy Playwright runs.');
}

const baseUrl = getEnvironmentBaseUrl(appName);
const monorepoRoot = __dirname;
const testMatch = `${monorepoRoot}/${appName}/test/visual/**/*-percy.spec.js`;

const desktopViewport = { width: 1440, height: 1024 };

// Project names follow the BrowserStack SDK convention:
//   desktop: <browser>@<version>:<OS> <OSVersion>@browserstack
//   mobile:  <browser>@<device>:<osVersion>@browserstack-mobile
// The SDK routes each project to the appropriate BrowserStack infrastructure,
// including real mobile devices for @browserstack-mobile projects.

export default {
    fullyParallel: true,
    forbidOnly: !!process.env.CI,
    retries: process.env.CI ? 2 : 0,
    workers: process.env.CI ? 5 : 1,
    reporter: [[
        'html',
        {
            outputFolder: `${monorepoRoot}/playwright-reports/${appName}-percy-playwright-report`,
            open: 'never',
        },
    ]],
    use: {
        trace: 'retain-on-failure',
    },
    projects: [
        // macOS - Safari
        {
            name: 'playwright-webkit@latest:OSX Monterey@browserstack',
            testMatch,
            use: { browserName: 'webkit' as const, baseURL: baseUrl, viewport: desktopViewport },
        },
        {
            name: 'playwright-webkit@latest:OSX Sonoma@browserstack',
            testMatch,
            use: { browserName: 'webkit' as const, baseURL: baseUrl, viewport: desktopViewport },
        },
        // Windows - Chrome
        {
            name: 'chrome@latest:Windows 11@browserstack',
            testMatch,
            use: { browserName: 'chromium' as const, channel: 'chrome', baseURL: baseUrl, viewport: desktopViewport },
        },
        {
            name: 'chrome@126:Windows 11@browserstack',
            testMatch,
            use: { browserName: 'chromium' as const, channel: 'chrome', baseURL: baseUrl, viewport: desktopViewport },
        },
        // Windows - Edge
        {
            name: 'edge@latest:Windows 11@browserstack',
            testMatch,
            use: { browserName: 'chromium' as const, channel: 'msedge', baseURL: baseUrl, viewport: desktopViewport },
        },
        {
            name: 'edge@126:Windows 11@browserstack',
            testMatch,
            use: { browserName: 'chromium' as const, channel: 'msedge', baseURL: baseUrl, viewport: desktopViewport },
        },
        // Windows - Firefox
        {
            name: 'playwright-firefox@latest:Windows 11@browserstack',
            testMatch,
            use: { browserName: 'firefox' as const, baseURL: baseUrl, viewport: desktopViewport },
        },
        {
            name: 'playwright-firefox@127:Windows 11@browserstack',
            testMatch,
            use: { browserName: 'firefox' as const, baseURL: baseUrl, viewport: desktopViewport },
        },
        // Mobile - Real devices (routed via BrowserStack real device cloud)
        {
            name: 'safari@iPhone 16:18@browserstack-mobile',
            testMatch,
            use: { browserName: 'webkit' as const, baseURL: baseUrl },
        },
        {
            name: 'safari@iPhone 14:16@browserstack-mobile',
            testMatch,
            use: { browserName: 'webkit' as const, baseURL: baseUrl },
        },
        {
            name: 'chrome@Google Pixel 9:15.0@browserstack-mobile',
            testMatch,
            use: { browserName: 'chromium' as const, baseURL: baseUrl },
        },
        {
            name: 'chrome@Google Pixel 6:11.0@browserstack-mobile',
            testMatch,
            use: { browserName: 'chromium' as const, baseURL: baseUrl },
        },
    ],
    webServer: process.env.CI ? undefined : {
        command: `cd ./${appName} && yarn dev`,
        url: baseUrl,
        reuseExistingServer: true,
        stdout: 'ignore',
        stderr: 'pipe',
    },
};