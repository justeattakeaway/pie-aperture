import '@justeattakeaway/pie-webc/components/divider.js';
import '@justeattakeaway/pie-webc/components/link.js';

/**
 * Sets a parent link in the navigation
 * @param {Object} parentLink - The parent link configuration
 * @param {string} parentLink.href - The URL to navigate to
 * @param {string} parentLink.label - The link text to display
 */
export function setParentLink(parentLink) {
    const parentLinkElement = document.querySelector('#parentLink');
    if (parentLinkElement && parentLink) {
        parentLinkElement.innerHTML = ` | <pie-link href="${parentLink.href}">${parentLink.label}</pie-link>`;
    }
}
