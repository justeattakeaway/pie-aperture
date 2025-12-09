/**
 * Cross-app navigation URL utility
 * Handles URLs for different environments: local development, PR previews, and production
 */

/**
 * Get the navigation URLs for all aperture apps based on the current environment
 * @returns {Object} Object containing URLs for all apps
 */
export function getNavigationUrls() {
    const currentHostname = typeof window !== 'undefined' ? window.location.hostname : '';

    // Local development detection
    if (currentHostname === 'localhost' || currentHostname === '127.0.0.1') {
        return {
            vanilla: 'http://localhost:3001',
            nuxt: 'http://localhost:3002',
            nextjsV14: 'http://localhost:3003',
            nextjsV15: 'http://localhost:3004'
        };
    }

    // PR preview detection (format: pr123-aperture-{app}-app.pie.design)
    const prMatch = currentHostname.match(/^pr(\d+)-aperture-(.+)\.pie\.design$/);
    if (prMatch) {
        const prNumber = prMatch[1];
        return {
            vanilla: `https://pr${prNumber}-aperture-vanilla-app.pie.design/`,
            nuxt: `https://pr${prNumber}-aperture-nuxt-app.pie.design/`,
            nextjsV14: `https://pr${prNumber}-aperture-nextjs-app-v14.pie.design/`,
            nextjsV15: `https://pr${prNumber}-aperture-nextjs-app-v15.pie.design/`
        };
    }

    // Production URLs (default)
    return {
        vanilla: 'https://aperture-vanilla.pie.design/',
        nuxt: 'https://aperture-nuxt.pie.design/',
        nextjsV14: 'https://aperture-nextjs-v14.pie.design/',
        nextjsV15: 'https://aperture-nextjs-v15.pie.design/'
    };
}

/**
 * Get the current app name based on URL patterns or environment
 * @returns {string} The current app name
 */
export function getCurrentAppName() {
    if (typeof window === 'undefined') {
        return 'unknown';
    }

    const hostname = window.location.hostname;
    const port = window.location.port;

    // Local development detection by port
    if (hostname === 'localhost' || hostname === '127.0.0.1') {
        switch (port) {
            case '3001': return 'vanilla';
            case '3002': return 'nuxt';
            case '3003': return 'nextjsV14';
            case '3004': return 'nextjsV15';
            default: return 'unknown';
        }
    }

    // Production/PR preview detection
    if (hostname.includes('vanilla')) return 'vanilla';
    if (hostname.includes('nuxt')) return 'nuxt';
    if (hostname.includes('nextjs-app-v14')) return 'nextjsV14';
    if (hostname.includes('nextjs-app-v15')) return 'nextjsV15';

    return 'unknown';
}

/**
 * Get navigation data with URLs and metadata
 * @returns {Array} Array of navigation items
 */
export function getNavigationData() {
    const urls = getNavigationUrls();
    const currentApp = getCurrentAppName();

    return [
        {
            name: 'Vanilla',
            url: urls.vanilla,
            key: 'vanilla',
            isCurrent: currentApp === 'vanilla'
        },
        {
            name: 'Nuxt',
            url: urls.nuxt,
            key: 'nuxt',
            isCurrent: currentApp === 'nuxt'
        },
        {
            name: 'NextJS v14',
            url: urls.nextjsV14,
            key: 'nextjsV14',
            isCurrent: currentApp === 'nextjsV14'
        },
        {
            name: 'NextJS v15',
            url: urls.nextjsV15,
            key: 'nextjsV15',
            isCurrent: currentApp === 'nextjsV15'
        }
    ];
}
