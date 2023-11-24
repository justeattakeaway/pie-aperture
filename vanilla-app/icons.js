import * as icons from '@justeattakeaway/pie-icons-webc';

const iconsContainer = document.querySelector('#icons');

Object.entries(icons).forEach(([iconName, IconComponent]) => {
    const iconElement = new IconComponent();
    iconsContainer.appendChild(iconElement);
});
