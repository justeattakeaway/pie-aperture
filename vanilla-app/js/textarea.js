import '@justeattakeaway/pie-webc/components/textarea.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import '@justeattakeaway/pie-webc/components/form-label.js';

import './utils/navigation.js';
import './shared.js';

const maxLength = 20;

document.querySelector('#app').innerHTML = `
    <pie-textarea value="foo"></pie-textarea>
    <pie-divider></pie-divider>
    <pie-textarea resize="manual" value="foo"></pie-textarea>
    <pie-divider></pie-divider>
    <pie-form-label id="counter-label" trailing="0 / ${maxLength}">Label</pie-form-label>
    <pie-textarea id="counter-textarea" value="" maxlength="${maxLength}"></pie-textarea>`;

document.getElementById('counter-textarea').addEventListener('input', (e) => {
    const count = e.target.value.length;
    document.getElementById('counter-label').trailing = `${count} / ${maxLength}`;
});