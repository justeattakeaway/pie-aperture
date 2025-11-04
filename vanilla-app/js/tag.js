import '@justeattakeaway/pie-webc/components/tag.js';
import { variants } from '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-icons-webc/dist/IconFingerprint.js';
import './shared.js';
import './utils/navigation.js';
import '../css/tag.css';

document.querySelector('#app').innerHTML = `
    <h2>Default</h2>
    <div class="c-tag-container">
        ${variants.map((variant) => `
            <pie-tag
                variant="${variant}">
                ${variant}
            </pie-tag>
        `).join('')}

        ${variants.map((variant) => `
            <pie-tag
                variant="${variant}"
                has-leading-icon>
                <icon-fingerprint slot="icon"></icon-fingerprint>
                ${variant}
            </pie-tag>
        `).join('')}

        ${variants.map((variant) => `
            <pie-tag
                variant="${variant}"
                is-icon-only>
                <icon-fingerprint slot="icon"></icon-fingerprint>
            </pie-tag>
        `).join('')}
    </div>

    <h2>Strong</h2>

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
                isStrong
                has-leading-icon>
                <icon-fingerprint slot="icon"></icon-fingerprint>
                ${variant}
            </pie-tag>
        `).join('')}

        ${variants.map((variant) => `
            <pie-tag
                variant="${variant}"
                isStrong
                is-icon-only>
                <icon-fingerprint slot="icon"></icon-fingerprint>
            </pie-tag>
        `).join('')}
    </div>
`;
