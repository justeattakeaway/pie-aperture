import '@justeattakeaway/pie-link';
import '../css/style.css';

document.querySelector('#navigation').innerHTML = `
    <h3>Demo Integrations</h3>
    <ul>
        <li><pie-link href="/pages/integrations/form.html">Form Demo</pie-link></li>
    </ul>
    <h3>Component Pages</h3>
    <ul>
        <li><pie-link href="/pages/components/assistive-text.html">Assistive Text</pie-link></li>
        <li><pie-link href="/pages/components/button.html">Button</pie-link></li>
        <li><pie-link href="/pages/components/card.html">Card</pie-link></li>
        <li><pie-link href="/pages/components/chip.html">Chip</pie-link></li>
        <li><pie-link href="/pages/components/cookie-banner.html">Cookie Banner</pie-link></li>
        <li><pie-link href="/pages/components/form-label.html">Form Label</pie-link></li>
        <li><pie-link href="/pages/components/icon-button.html">Icon Button</pie-link></li>
        <li><pie-link href="/pages/components/link.html">Link</pie-link></li>
        <li><pie-link href="/pages/components/modal.html">Modal</pie-link></li>
        <li><pie-link href="/pages/components/spinner.html">Spinner</pie-link></li>
        <li><pie-link href="/pages/components/switch.html">Switch</pie-link></li>
        <li><pie-link href="/pages/components/tag.html">Tag</pie-link></li>
    </ul>`;