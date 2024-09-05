import '@justeattakeaway/pie-webc/components/tag.js';
import { variants } from '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import './shared.js';
import './utils/navigation.js';

document.querySelector('#app').innerHTML = `
    <h2>Non-interactive</h2>
    <h3>Default</h3>
    <div class="c-tag-container">
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
    </div>

    <pie-divider></pie-divider>

    <h2>Interactive</h2>

    <h3>Default</h3>

    <div class="c-tag-container">
        ${variants.map((variant) => `
            <pie-tag
                variant="${variant}"
                isInteractive>
                ${variant}
            </pie-tag>
        `).join('')}
    </div>

    <h3>Strong</h3>

    <div class="c-tag-container">
        ${variants.map((variant) => `
            <pie-tag
                variant="${variant}"
                isInteractive
                isStrong>
                ${variant}
            </pie-tag>
        `).join('')}
    </div>`;
