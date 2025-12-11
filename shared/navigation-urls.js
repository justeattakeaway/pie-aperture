/**
 * Cross-app navigation URL utility
 * Handles URLs for different environments: local development, PR previews, and production
 */

/**
 * Get the current path with proper formatting for each app type
 * @param {string} targetApp - The target app to format the path for
 * @returns {string} The formatted path
 */
export function getCurrentPath(targetApp) {
    if (typeof window === 'undefined') {
        return '';
    }

    let currentPath = window.location.pathname;

    // Remove leading slash if present
    if (currentPath.startsWith('/')) {
        currentPath = currentPath.substring(1);
    }

    // Handle specific path mappings between apps
    if (currentPath === 'integrations/form' || currentPath === 'integrations/form.html') {
        // Map form to controlled-form for NextJS apps
        if (targetApp === 'nextjsV14' || targetApp === 'nextjsV15') {
            currentPath = 'integrations/controlled-form';
        }
    } else if (currentPath === 'integrations/controlled-form' || currentPath === 'integrations/uncontrolled-form') {
        // Map controlled-form and uncontrolled-form back to form for non-NextJS apps
        if (targetApp === 'vanilla' || targetApp === 'nuxt') {
            currentPath = 'integrations/form';
        }
        // For NextJS apps, keep as controlled-form regardless of whether coming from controlled or uncontrolled
        else if (targetApp === 'nextjsV14' || targetApp === 'nextjsV15') {
            currentPath = 'integrations/controlled-form';
        }
    }

    // For vanilla app, add .html extension if not present and not on homepage
    if (targetApp === 'vanilla' && currentPath && !currentPath.endsWith('.html')) {
        currentPath += '.html';
    }

    // For non-vanilla apps, remove .html extension if present
    if (targetApp !== 'vanilla' && currentPath.endsWith('.html')) {
        currentPath = currentPath.replace(/\.html$/, '');
    }    // Return with leading slash
    return currentPath ? `/${currentPath}` : '';
}

/**
 * Get the navigation URLs for all aperture apps based on the current environment
 * @param {boolean} preservePath - Whether to preserve the current path
 * @returns {Object} Object containing URLs for all apps
 */
export function getNavigationUrls(preservePath = false) {
    const currentHostname = typeof window !== 'undefined' ? window.location.hostname : '';

    // Base URLs without paths
    let baseUrls;

    // Local development detection
    if (currentHostname === 'localhost' || currentHostname === '127.0.0.1') {
        baseUrls = {
            vanilla: 'http://localhost:3001',
            nuxt: 'http://localhost:3002',
            nextjsV14: 'http://localhost:3003',
            nextjsV15: 'http://localhost:3004'
        };
    }
    // PR preview detection (format: pr123-aperture-{app}-app.pie.design)
    else {
        const prMatch = currentHostname.match(/^pr(\d+)-aperture-(.+)\.pie\.design$/);
        if (prMatch) {
            const prNumber = prMatch[1];
            baseUrls = {
                vanilla: `https://pr${prNumber}-aperture-vanilla-app.pie.design/`,
                nuxt: `https://pr${prNumber}-aperture-nuxt-app.pie.design/`,
                nextjsV14: `https://pr${prNumber}-aperture-nextjs-app-v14.pie.design/`,
                nextjsV15: `https://pr${prNumber}-aperture-nextjs-app-v15.pie.design/`
            };
        } else {
            // Production URLs (default)
            baseUrls = {
                vanilla: 'https://aperture-vanilla.pie.design/',
                nuxt: 'https://aperture-nuxt.pie.design/',
                nextjsV14: 'https://aperture-nextjs-v14.pie.design/',
                nextjsV15: 'https://aperture-nextjs-v15.pie.design/'
            };
        }
    }

    // If preservePath is false, return base URLs
    if (!preservePath) {
        return baseUrls;
    }

    // Add current path to each URL
    const urlsWithPath = {};
    Object.keys(baseUrls).forEach(app => {
        const currentPath = getCurrentPath(app);
        const baseUrl = baseUrls[app];
        // Remove trailing slash from base URL if present
        const cleanBaseUrl = baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
        urlsWithPath[app] = cleanBaseUrl + currentPath;
    });

    return urlsWithPath;
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
 * @param {boolean} preservePath - Whether to preserve the current path when navigating
 * @returns {Array} Array of navigation items
 */
export function getNavigationData(preservePath = true) {
    const urls = getNavigationUrls(preservePath);
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
