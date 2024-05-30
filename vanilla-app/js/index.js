import '@justeattakeaway/pie-webc/components/link.js';
import './shared.js';

document.querySelector('#navigation').innerHTML = `
    <h3>Demo Integrations</h3>
    <ul>
        <li><pie-link href="/integrations/form.html">Form Demo</pie-link></li>
        <li><pie-link href="/integrations/icons.html">Icons Demo</pie-link></li>
    </ul>
    <h3>Component Pages</h3>
    <ul>
        <li><pie-link href="/components/assistive-text.html">Assistive Text</pie-link></li>
        <li><pie-link href="/components/button.html">Button</pie-link></li>
        <li><pie-link href="/components/card.html">Card</pie-link></li>
        <li><pie-link href="/components/chip.html">Chip</pie-link></li>
        <li><pie-link href="/components/cookie-banner.html">Cookie Banner</pie-link></li>
        <li><pie-link href="/components/form-label.html">Form Label</pie-link></li>
        <li><pie-link href="/components/icon-button.html">Icon Button</pie-link></li>
        <li><pie-link href="/components/link.html">Link</pie-link></li>
        <li><pie-link href="/components/modal.html">Modal</pie-link></li>
        <li><pie-link href="/components/spinner.html">Spinner</pie-link></li>
        <li><pie-link href="/components/switch.html">Switch</pie-link></li>
        <li><pie-link href="/components/tag.html">Tag</pie-link></li>
        <li><pie-link href="/components/notification.html">Notification</pie-link></li>
        <li><pie-link href="/components/checkbox.html">Checkbox</pie-link></li>
    </ul>`;
