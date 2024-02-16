import '@justeattakeaway/pie-link';
import '../css/style.css';

document.querySelector('#navigation').innerHTML = `
    <h3>Demo Integrations</h3>
    <ul>
        <li><pie-link href="/form.html">Form Demo</pie-link></li>
    </ul>
    <h3>Component Pages</h3>
    <ul>
        <li><pie-link href="/pie-assistive-text.html">Assistive Text</pie-link></li>
        <li><pie-link href="/pie-button.html">Button</pie-link></li>
        <li><pie-link href="/pie-card.html">Card</pie-link></li>
        <li><pie-link href="/pie-chip.html">Chip</pie-link></li>
        <li><pie-link href="/pie-cookie-banner.html">Cookie Banner</pie-link></li>
        <li><pie-link href="/pie-form-label.html">Form Label</pie-link></li>
        <li><pie-link href="/pie-icon-button.html">Icon Button</pie-link></li>
        <li><pie-link href="/pie-link.html">Link</pie-link></li>
        <li><pie-link href="/pie-modal.html">Modal</pie-link></li>
        <li><pie-link href="/pie-spinner.html">Spinner</pie-link></li>
        <li><pie-link href="/pie-switch.html">Switch</pie-link></li>
        <li><pie-link href="/pie-tag.html">Tag</pie-link></li>
    </ul>`;