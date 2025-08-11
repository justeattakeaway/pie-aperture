import '@justeattakeaway/pie-webc/components/form-label.js';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <pie-form-label optional="Optional" trailing="X out of X">Label</pie-form-label>`;