const { PR_NUMBER, VANILLA_AMPLIFY_ID, NEXT_AMPLIFY_ID } = process.env;

exports.getEnvironmentBaseUrl = (appName) => {

    let amplifyId;

    if (appName !== 'vanilla-app' && appName !== 'nextjs-app') {
        throw new Error(`appName: '${appName}' is invalid. Please use either 'vanilla-app' or 'nextjs-app'.`);
    }

    amplifyId = appName === 'vanilla-app' ? VANILLA_AMPLIFY_ID : NEXT_AMPLIFY_ID;

    return `https://pr${PR_NUMBER}.${amplifyId}.amplifyapp.com`;
}