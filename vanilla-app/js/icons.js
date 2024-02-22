import * as icons from '@justeattakeaway/pie-icons-webc';
import './shared.js';
import './utils/navigation.js';

const iconsContainer = document.querySelector('#icons');

Object.entries(icons).forEach(([iconName, IconComponent]) => {
    const iconElement = new IconComponent();
    iconsContainer.appendChild(iconElement);
});
