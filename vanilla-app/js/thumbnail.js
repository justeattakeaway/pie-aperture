import '@justeattakeaway/pie-webc/components/thumbnail.js';
import '@justeattakeaway/pie-webc/components/divider.js';

import './utils/navigation.js';
import './shared.js';

const thumbnailProps = {
    src: 'https://www.pie.design/assets/img/jet-logo-narrow.svg',
    alt: 'JET logo'
};

const invalidSrcWithPlaceholderProps = {
  src: 'https://www.pie.design/assets/img/jet-invalid-aperture.svg',
  placeholder: {
      src: 'https://www.pie.design/assets/img/404_narrow.png',
      alt: 'Thumbnail placeholder image',
  }
}

function toAttributes(props) {
    return Object.entries(props)
        .map(([key, value]) => `${key}="${value}"`)
        .join(' ');
}

const defaultThumbnail = `<pie-thumbnail ${toAttributes(thumbnailProps)}></pie-thumbnail>`;
const outlineThumbnail = `<pie-thumbnail variant="outline" ${toAttributes(thumbnailProps)}></pie-thumbnail>`;
const placeholderThumbnail = `<pie-thumbnail ${toAttributes(invalidSrcWithPlaceholderProps)}></pie-thumbnail>`;

document.querySelector('#app').innerHTML = `
  <h3>Default</h3>
  ${defaultThumbnail}
  <pie-divider></pie-divider>
  <h3>Outline</h3>
  ${outlineThumbnail}
  <h3>Placeholder</h3>
  ${placeholderThumbnail}
`;
