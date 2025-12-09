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
