import '@justeattakeaway/pie-css';
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-switch';
import '@justeattakeaway/pie-divider';
import './style.css';

const form = document.querySelector('#testForm');
const output = document.querySelector('#output');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());

    output.innerHTML = `
        <h2>Form Data</h2>
        <pre>${JSON.stringify(data, null, 2)}</pre>
    `;
});