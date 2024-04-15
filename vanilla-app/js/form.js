import '@justeattakeaway/pie-webc/button.js';
import '@justeattakeaway/pie-input';
import '@justeattakeaway/pie-switch';
import '@justeattakeaway/pie-form-label';
import './utils/navigation.js';
import './shared.js';

const form = document.querySelector('#testForm');
const output = document.querySelector('#output');
const favouriteNumberInput = document.querySelector('#favouriteNumber');

favouriteNumberInput.addEventListener('input', (e) => {
    const value = parseInt(e.target.value, 10);
    let validationMessage = '';
    let status = '';

    if (value < -5) {
        validationMessage = 'The favourite number is too low. Please pick a number between -5 and 200.';
        status = 'error';
    } else if (value > 200) {
        validationMessage = 'The favourite number is too high. Please pick a number between -5 and 200.';
        status = 'error';
    }

    favouriteNumberInput.setAttribute('assistiveText', validationMessage);
    favouriteNumberInput.setAttribute('status', status);
});

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(form);

    const data = Object.fromEntries(formData.entries());
    data.approveSettings = formData.get('approveSettings') === 'on';
    data.enableNotifications = formData.get('enableNotifications') === 'on';
    output.innerHTML = `
        <h2>Form Data</h2>
        <pre data-test-id="outputData">${JSON.stringify(data, null, 2)}</pre>
    `;
});
