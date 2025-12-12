import { getNavigationData } from '../../shared/navigation-urls.js';
import '@justeattakeaway/pie-webc/components/link.js';

/**
 * Create and render the navigation header
 * @param {HTMLElement} container - The container element to render the header into
 */
export function renderNavigationHeader(container) {
    const navigationData = getNavigationData();

    const header = document.createElement('header');
    header.style.cssText = 'padding: 1rem 0; border-bottom: 1px solid #ddd;';

    const headerContent = document.createElement('div');
    headerContent.style.cssText = 'display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;';

    // Add title
    const title = document.createElement('strong');
    title.textContent = 'PIE Aperture:';
    headerContent.appendChild(title);

    // Add navigation items
    navigationData.forEach((item) => {
        if (item.isCurrent) {
            const span = document.createElement('span');
            span.textContent = item.name;
            span.style.fontWeight = 'bold';
            headerContent.appendChild(span);
        } else {
            const link = document.createElement('pie-link');
            link.setAttribute('href', item.url);
            link.textContent = item.name;
            headerContent.appendChild(link);
        }
    });

    header.appendChild(headerContent);

    // Clear container and add header
    container.innerHTML = '';
    container.appendChild(header);
}

/**
 * Initialize navigation header with auto-refresh capability
 */
export function initNavigationHeader() {
    const headerContainer = document.querySelector('#navigation-header');
    if (headerContainer) {
        renderNavigationHeader(headerContainer);

        // Listen for popstate events (back/forward navigation)
        window.addEventListener('popstate', () => {
            setTimeout(() => renderNavigationHeader(headerContainer), 10);
        });

        // Listen for page visibility changes (when switching tabs and coming back)
        document.addEventListener('visibilitychange', () => {
            if (!document.hidden) {
                renderNavigationHeader(headerContainer);
            }
        });
    }
}
