import '@justeattakeaway/pie-css';
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-card';
import '@justeattakeaway/pie-cookie-banner';
import '@justeattakeaway/pie-divider';
import '@justeattakeaway/pie-form-label';
import '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-modal';
import '@justeattakeaway/pie-switch';
import '@justeattakeaway/pie-spinner';
import '@justeattakeaway/pie-link';
import '@justeattakeaway/pie-tag';
import '@justeattakeaway/pie-icons-webc/IconClose';
import '@justeattakeaway/pie-icons-webc/IconSearch';

import './style.css';
import { setupCounter } from './counter';

document.querySelector('#app').innerHTML = `
    <h2>pie-modal</h2>
    <pie-button id="modal-trigger" type="button">open modal</pie-button>
    <pie-modal
        id="modal"
        heading="My Awesome Heading"
        headingLevel="h3"
        leadingAction='${JSON.stringify({ text: 'Leading action' })}'
        isDismissible>
        <pie-button type="button" onclick="document.querySelector('ul').innerHTML = ''">
            Remove list
        </pie-button>
        <ul>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
        </ul>
        Modal content
    </pie-modal>

    <pie-divider></pie-divider>

    <h2>pie-button Component Counter</h2>
    <pie-button id="counter" type="button"></pie-button>

    <pie-divider></pie-divider>

    <h2>pie-button Component – with icon and text</h2>
    <pie-button>
        <icon-search slot="icon"></icon-search>
        Search
    </pie-button>

    <pie-divider></pie-divider>

    <h2>pie-icon-button</h2>
    <pie-icon-button onclick="alert('clicked')"><icon-close></icon-close></pie-icon-button>

    <pie-divider></pie-divider>
    <pie-cookie-banner></pie-cookie-banner>

    <h2>pie-card</h2>
    <pie-card padding="a">
        <h2>pie-card</h2>
        <p>Some content</p>
    </pie-card>

    <pie-divider></pie-divider>

    <h2>pie-switch</h2>
    <pie-switch></pie-switch>

    <pie-divider></pie-divider>

    <h2>pie-link</h2>
    <pie-link href="http://www.pie.design" target="_blank">Visit pie.design</pie-link>

    <pie-divider></pie-divider>

    <h2>pie-spinner</h2>
    <pie-spinner></pie-spinner>

    <pie-divider></pie-divider>

    <h2>pie-form-label</h2>
    <pie-form-label>Label</pie-form-label>

    <pie-divider></pie-divider>

    <h2>pie-tag</h2>
    <pie-tag>Pie Tag</pie-tag>
`;

setupCounter(document.querySelector('#counter'));

document.querySelector('#modal-trigger').addEventListener('click', () => {
    document.querySelector('#modal').setAttribute('isOpen', true);
});
