import '@justeattakeaway/pie-webc/components/icon-button.js';
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <pie-icon-button>
        <icon-close></icon-close>
    </pie-icon-button>`;