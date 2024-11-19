const { CI, GITHUB_REF_NAME, PR_NUMBER, VANILLA_AMPLIFY_ID, NEXT_14_AMPLIFY_ID, NUXT_AMPLIFY_ID } = process.env;

export function getAppConfig(appName) {
    const config = {};

    switch (appName) {
        case 'vanilla-app':
            config.amplifyId = VANILLA_AMPLIFY_ID;
            config.port = '3001';
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
            throw new Error(`appName: '${appName}' is invalid. Please use either 'vanilla-app', 'nextjs-app-v14' or 'nuxt-app'.`);
    }
    return config;
}

export function getEnvironmentBaseUrl(appName) {
    const appConfig = getAppConfig(appName);

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

