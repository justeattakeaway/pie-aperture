import '@justeattakeaway/pie-webc/components/thumbnail.js';
import '@justeattakeaway/pie-webc/components/divider.js';

import './utils/navigation.js';
import './shared.js';

const props = {
    src: 'https://webc.pie.design/static/images/pie-logo.svg',
    alt: 'The PIE design system logo'
};

const invalidImageProps = {
  src: 'invalid-url.com',
  alt: 'Invalid image url',
}

const invalidImageWithCustomPlaceholderProps = {
  ...invalidImageProps,
  placeholder: {
    src: 'https://www.pie.design/assets/img/404_narrow.png',
    alt: 'Thumbnail placeholder image',
  }
}

function toAttributes(props) {
  return Object.entries(props)
      .map(([key, value]) => {
          if (typeof value === 'object') {
              return `${key}='${JSON.stringify(value)}'`;
          }
          return `${key}="${value}"`;
      })
      .join(' ');
}

const defaultThumbnail = `<pie-thumbnail ${toAttributes(props)}></pie-thumbnail>`;
const outlineThumbnail = `<pie-thumbnail variant="outline" ${toAttributes(props)}></pie-thumbnail>`;
const defaultPlaceholderThumbnail = `<pie-thumbnail ${toAttributes(invalidImageProps)}></pie-thumbnail>`;
const customPlaceholderThumbnail = `<pie-thumbnail ${toAttributes(invalidImageWithCustomPlaceholderProps)}></pie-thumbnail>`;

document.querySelector('#app').innerHTML = `
  <h3>Default</h3>
  ${defaultThumbnail}
  <pie-divider></pie-divider>
  <h3>Outline</h3>
  ${outlineThumbnail}
  <pie-divider></pie-divider>
  <h3>Default Placeholder</h3>
  ${defaultPlaceholderThumbnail}
  <pie-divider></pie-divider>
  <h3>Custom Placeholder</h3>
  ${customPlaceholderThumbnail}
`;
