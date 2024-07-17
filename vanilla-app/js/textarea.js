import '@justeattakeaway/pie-webc/components/textarea.js';
import '@justeattakeaway/pie-webc/components/divider.js';

import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <pie-textarea></pie-textarea>
    <pie-divider></pie-divider>
    <pie-textarea resize="manual"></pie-textarea>`;