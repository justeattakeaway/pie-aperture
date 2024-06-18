import '@justeattakeaway/pie-webc/components/text-input.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPhone.js';

import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
<pie-text-input value="foo">
    <icon-phone slot="leadingIcon"></icon-phone>
</pie-text-input>`;