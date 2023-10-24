const { CI, GITHUB_REF_NAME, PR_NUMBER, VANILLA_AMPLIFY_ID, NEXT_AMPLIFY_ID } = process.env;

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
        const port = appName === 'vanilla-app' ? '5173' : '3000';

        return `http://localhost:${port}`;
    }
}