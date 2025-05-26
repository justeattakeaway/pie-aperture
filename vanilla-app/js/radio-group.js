import '@justeattakeaway/pie-webc/components/radio.js';
import '@justeattakeaway/pie-webc/components/radio-group.js';
import '@justeattakeaway/pie-webc/components/form-label.js';
import '@justeattakeaway/pie-webc/components/button.js';

import './shared.js';
import './utils/navigation.js';

let checked = false;

function handleRadioChange() {
    const radioGroup = document.querySelector('pie-radio-group');
    const formLabel = document.querySelector('pie-form-label');

    formLabel.innerHTML = `Your favourite takeaway: ${radioGroup.value}`;
}

// Set initial HTML structure
document.querySelector('#app').innerHTML = `
    <pie-radio-group>
        <pie-form-label slot="label">Your favourite takeaway:</pie-form-label>
        <pie-radio name="favouriteTakeaway" value="chinese">Chinese</pie-radio>
        <pie-radio name="favouriteTakeaway" value="gyros" disabled>Gyros</pie-radio>
        <pie-radio name="favouriteTakeaway" value="shawarma">Shawarma</pie-radio>
        <pie-radio name="favouriteTakeaway" value="pizza">Pizza</pie-radio>
    </pie-radio-group>
    
    <pie-button>Some focusable element</pie-button>
`;

// Add event listener to pie-radio for change events
document.querySelector('pie-radio-group').addEventListener('change', handleRadioChange);
