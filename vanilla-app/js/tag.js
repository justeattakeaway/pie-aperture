import '@justeattakeaway/pie-webc/components/tag.js';
import { variants } from '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-icons-webc/dist/IconFingerprint.js';
import './shared.js';
import './utils/navigation.js';
import '../css/tag.css';

document.querySelector('#app').innerHTML = `
    <h2>Non-interactive</h2>
    <h3>Default</h3>
    <div class="c-tag-container">
        ${variants.map((variant) => `
            <pie-tag
                variant="${variant}">
                <icon-fingerprint slot="icon"></icon-fingerprint>
                ${variant}
            </pie-tag>
        `).join('')}

        ${variants.map((variant) => `
            <pie-tag
                variant="${variant}">
                <icon-fingerprint slot="icon"></icon-fingerprint>
            </pie-tag>
        `).join('')}

        ${variants.map((variant) => `
            <pie-tag
                variant="${variant}">
                ${variant}
            </pie-tag>
        `).join('')}
    </div>

    <h3>Strong</h3>

    <div class="c-tag-container">
        ${variants.map((variant) => `
            <pie-tag
                variant="${variant}"
                isStrong>
                ${variant}
            </pie-tag>
        `).join('')}

        ${variants.map((variant) => `
            <pie-tag
                variant="${variant}"
                isStrong>
                <icon-fingerprint slot="icon"></icon-fingerprint>
                ${variant}
            </pie-tag>
        `).join('')}

        ${variants.map((variant) => `
            <pie-tag
                variant="${variant}"
                isStrong>
                <icon-fingerprint slot="icon"></icon-fingerprint>
            </pie-tag>
        `).join('')}
    </div>
`;
