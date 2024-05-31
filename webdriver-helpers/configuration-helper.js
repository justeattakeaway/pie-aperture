const { CI, GITHUB_REF_NAME, GITHUB_RUN_ID, PR_NUMBER, VANILLA_AMPLIFY_ID, NEXT_AMPLIFY_ID, NEXT_14_AMPLIFY_ID, NUXT_AMPLIFY_ID } = process.env;
const { execSync } = require('child_process');

exports.getAppConfig = (appName) => {
    const config = {};

    switch (appName) {
        case 'vanilla-app':
            config.amplifyId = VANILLA_AMPLIFY_ID;
            config.port = '3001';
            break;
        case 'nextjs-app-v13':
            config.amplifyId = NEXT_AMPLIFY_ID;
            config.port = '3000';
            break;
        case 'nextjs-app-v14':
            config.amplifyId = NEXT_14_AMPLIFY_ID;
            config.port = '3003';
            break;
        case 'nuxt-app':
            config.amplifyId = NUXT_AMPLIFY_ID;
            config.port = '3002';
            break;
        default:
            throw new Error(`appName: '${appName}' is invalid. Please use either 'vanilla-app', 'nextjs-app-v13', 'nextjs-app-v14' or 'nuxt-app'.`);
    }
    return config;
}

exports.getEnvironmentBaseUrl = (appName) => {

    const appConfig = this.getAppConfig(appName);

    if (CI) {
        const amplifyId = appConfig.amplifyId;

        if (GITHUB_REF_NAME === 'main') {
            return `https://main.${amplifyId}.amplifyapp.com`;
        }

        return `https://pr${PR_NUMBER}.${amplifyId}.amplifyapp.com`;
    }
    else {
        return `http://localhost:${appConfig.port}`;
    }
}

exports.createBrowserstackBuildName = () => {

    let branchName;
    let runId;

    if (CI) {
        branchName = GITHUB_REF_NAME;
        runId = GITHUB_RUN_ID;
    }
    else {
        branchName = execSync('git rev-parse --abbrev-ref HEAD').toString().trim();
        var date = new Date();
        var currentTime = date.toLocaleTimeString();

        runId = currentTime;
    }

    return `PIE Aperture - ${branchName} - ${runId}`;
};

exports.createCapability = (os, osVersion, browserName, browserVersion, deviceName = null) => {

    const commonConfig = {
        'bstack:options': {
            "projectName": "PIE Aperture",
            "buildName": this.createBrowserstackBuildName(),
            "local": !CI,
            "debug": true,
            "networkLogs": true
        }
    };

    let capability = {
        'bstack:options': {
            ...commonConfig['bstack:options'],
            os,
            osVersion,
            browserVersion,
        },
        browserName,
    };

    // If there is a device name, it's a mobile configuration
    if (deviceName) {
        capability['bstack:options'].deviceName = deviceName;
        // Remove unnecessary properties for mobile configuration
        delete capability['bstack:options'].os;
        delete capability['bstack:options'].browserVersion;
    }

    return capability;
}
