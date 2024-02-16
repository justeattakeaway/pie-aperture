import '@justeattakeaway/pie-switch';
import '@justeattakeaway/pie-css';
import '../css/style.css';

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
    <pie-divider></pie-divider>
`;

// Add event listener to pie-switch for change events
document.querySelector('pie-switch').addEventListener('change', handleSwitchChange);
