import '@justeattakeaway/pie-webc/components/radio.js';
import './shared.js';
import './utils/navigation.js';

let checked = false;

function handleRadioChange() {
    checked = !checked;

    const pieRadio = document.querySelector('pie-radio');
    pieRadio.innerHTML = `checked: ${checked}`;
    pieRadio.checked = checked;
}

// Set initial HTML structure
document.querySelector('#app').innerHTML = `
    <pie-radio value="value">checked: ${checked}</pie-radio>
`;

// Add event listener to pie-radio for change events
document.querySelector('pie-radio').addEventListener('change', handleRadioChange);
