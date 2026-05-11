import '@justeattakeaway/pie-webc/components/textarea.js';
import '@justeattakeaway/pie-webc/components/divider.js';

import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <h3>Default</h3>
    <pie-textarea value="foo"></pie-textarea>
    <pie-divider></pie-divider>
    <h3>Resize: manual</h3>
    <pie-textarea resize="manual" value="foo"></pie-textarea>
    <pie-divider></pie-divider>
    <h3>Maxlength: 4</h3>
    <pie-textarea value="foo" maxlength="4"></pie-textarea>`;