import '@justeattakeaway/pie-switch';
import './shared.js';
import './utils/navigation.js';

let checked = false;

function handleSwitchChange() {
    checked = !checked;

    const pieSwitch = document.querySelector('pie-switch');
    pieSwitch.setAttribute('label', `checked: ${checked}`);
    pieSwitch.checked = checked;
}

// Set initial HTML structure
document.querySelector('#app').innerHTML = `
    <pie-switch label="checked: ${checked}"></pie-switch>
`;

// Add event listener to pie-switch for change events
document.querySelector('pie-switch').addEventListener('change', handleSwitchChange);
