import '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-icons-webc/dist/IconOfferFilled.js';

import './shared.js';
import './utils/navigation.js';
import '../css/tag.css';

document.querySelector('#app').innerHTML = `
    <h3>Customised Tag using CSS parts</h3>
    <div class="c-tag-container c-tag-container--dark">
        <pie-tag class="custom-style custom-1">
            <icon-offer-filled slot="icon"></icon-offer-filled>
            <span>Label 1</span>
        </pie-tag>
    </div>
</div>`;
