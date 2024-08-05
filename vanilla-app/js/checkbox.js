import '@justeattakeaway/pie-webc/components/checkbox.js';
import './shared.js';
import './utils/navigation.js';

let checked = false;

function handleCheckboxChange() {
    checked = !checked;

    const pieCheckbox = document.querySelector('pie-checkbox');
    pieCheckbox.innerHTML = `checked: ${checked}`;
    pieCheckbox.checked = checked;
}

// Set initial HTML structure
document.querySelector('#app').innerHTML = `
    <pie-checkbox>checked: ${checked}</pie-checkbox>
`;

// Add event listener to pie-switch for change events
document.querySelector('pie-checkbox').addEventListener('change', handleCheckboxChange);
