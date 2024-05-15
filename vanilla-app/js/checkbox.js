import '@justeattakeaway/pie-checkbox';
import './shared.js';
import './utils/navigation.js';

let checked = false;

function handleCheckboxChange() {
    checked = !checked;

    const pieCheckbox = document.querySelector('pie-checkbox');
    pieCheckbox.setAttribute('label', `checked: ${checked}`);
    pieCheckbox.checked = checked;
}

// Set initial HTML structure
document.querySelector('#app').innerHTML = `
    <pie-checkbox label="checked: ${checked}"></pie-checkbox>
`;

// Add event listener to pie-switch for change events
document.querySelector('pie-checkbox').addEventListener('change', handleCheckboxChange);
