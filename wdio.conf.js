const { createCapability } = require('./webdriver-helpers/configuration-helper');

const capabilities = [
    createCapability("OS X", "Big Sur", "Safari", "14.1"),
    createCapability("OS X", "Ventura", "Safari", "16.0"),
    createCapability("Windows", "11", "Chrome", "latest"),
    createCapability("Windows", "11", "Chrome", "115"),
    createCapability("Windows", "11", "Edge", "latest"),
    createCapability("Windows", "11", "Edge", "115"),
    createCapability("Windows", "11", "Firefox", "latest"),
    createCapability("Windows", "11", "Firefox", "115"),
    createCapability(null, "17", "Safari", null, "iPhone 15"),
    createCapability(null, "15", "Safari", null, "iPhone XS"),
    createCapability(null, "14.0", "Chrome", null, "Google Pixel 8"),
    createCapability(null, "11.0", "Chrome", null, "Google Pixel 5")
];

exports.config = {

    user: process.env.BROWSERSTACK_USERNAME,
    key: process.env.BROWSERSTACK_ACCESS_KEY,

    services: [
        ['browserstack', {
            browserstackLocal: !process.env.CI, // Only use BrowserStack local when not running on CI.
            forcedStop: true // Kill the BrowserStack Local process on complete.
        }]
    ],
    //
    // ====================
    // Runner Configuration
    // ====================
    // WebdriverIO supports running e2e tests as well as unit and component tests.
    runner: 'local',
    //
    // ============
    // Capabilities
    // ============
    // Define your capabilities here. WebdriverIO can run multiple capabilities at the same
    // time. Depending on the number of capabilities, WebdriverIO launches several test
    // sessions. Within your capabilities you can overwrite the spec and exclude options in
    // order to group specific specs to a specific capability.
    //
    // First, you can define how many instances should be started at the same time. Let's
    // say you have 3 different capabilities (Chrome, Firefox, and Safari) and you have
    // set maxInstances to 1; wdio will spawn 3 processes. Therefore, if you have 10 spec
    // files and you set maxInstances to 10, all spec files will get tested at the same time
    // and 30 processes will get spawned. The property handles how many capabilities
    // from the same test should run tests.
    //
    maxInstances: process.env.CI ? 5 : 1,
    //
    // If you have trouble getting all important capabilities together, check out the
    // Sauce Labs platform configurator - a great tool to configure your capabilities:
    // https://saucelabs.com/platform/platform-configurator
    //
    capabilities,

    //
    // ===================
    // Test Configurations
    // ===================
    // Define all options that are relevant for the WebdriverIO instance here
    //
    // Level of logging verbosity: trace | debug | info | warn | error | silent
    logLevel: 'info',
    //
    //
    bail: 0,
    //
    // Default timeout for all waitFor* commands.
    waitforTimeout: 10000,
    //
    // Default timeout in milliseconds for request
    // if browser driver or grid doesn't send response
    connectionRetryTimeout: 120000,
    //
    // Default request retries count
    connectionRetryCount: 3,
    // Framework you want to run your specs with.
    // The following are supported: Mocha, Jasmine, and Cucumber
    // see also: https://webdriver.io/docs/frameworks
    //
    // Make sure you have the wdio adapter package for the specific framework installed
    // before running any tests.
    framework: 'mocha',
    // Test reporter for stdout.
    // The only one supported by default is 'dot'
    // see also: https://webdriver.io/docs/dot-reporter
    reporters: ['spec'],

    // Options to be passed to Mocha.
    // See the full list at http://mochajs.org/
    mochaOpts: {
        ui: 'bdd',
        timeout: 60000
    }
}
