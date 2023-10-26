const { CI, GITHUB_REF_NAME, GITHUB_RUN_ID, PR_NUMBER, VANILLA_AMPLIFY_ID, NEXT_AMPLIFY_ID } = process.env;
const { execSync } = require('child_process');

exports.getEnvironmentBaseUrl = (appName) => {

    if (appName !== 'vanilla-app' && appName !== 'nextjs-app') {
        throw new Error(`appName: '${appName}' is invalid. Please use either 'vanilla-app' or 'nextjs-app'.`);
    }

    if (CI) {
        const amplifyId = appName === 'vanilla-app' ? VANILLA_AMPLIFY_ID : NEXT_AMPLIFY_ID;

        if (GITHUB_REF_NAME === 'main') {
            return `https://main.${amplifyId}.amplifyapp.com`;
        }

        return `https://pr${PR_NUMBER}.${amplifyId}.amplifyapp.com`;
    }
    else {
        const port = appName === 'vanilla-app' ? '3001' : '3000';

        return `http://localhost:${port}`;
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
            "local": true
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
