import '@justeattakeaway/pie-css';
import '@justeattakeaway/pie-css/dist/helpers/typography.css';
import '../css/style.css';
import { renderNavigationHeader } from './navigation-header.js';

// Render the cross-app navigation header
const headerContainer = document.querySelector('#navigation-header');
if (headerContainer) {
    renderNavigationHeader(headerContainer);
}
