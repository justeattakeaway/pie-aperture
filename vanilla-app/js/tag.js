import '@justeattakeaway/pie-webc/components/tag.js';
import { variants } from '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import '@justeattakeaway/pie-icons-webc/dist/IconOfferFilled.js';

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
    </div>

    <h3>Customised Tag using CSS parts</h3>
    <div class="c-tag-container c-tag-container--dark">
        <pie-tag class="custom-style custom-1">
            <icon-offer-filled slot="icon"></icon-offer-filled>
            <span>Label 1</span>
        </pie-tag>
    </div>
</div>`;
