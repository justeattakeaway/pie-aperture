import '@justeattakeaway/pie-css';
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-card';
import '@justeattakeaway/pie-cookie-banner';
import '@justeattakeaway/pie-divider';
import '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-modal';
import '@justeattakeaway/pie-switch';
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
        isDismissible
        leadingAction='${JSON.stringify({ text: 'Example' })}'>
        Modal content
    </pie-modal>

    <pie-divider></pie-divider>

    <h2>pie-button Component Counter</h2>
    <pie-button id="counter" type="button"></pie-button>

    <pie-divider></pie-divider>

    <h2>pie-icon-button Component – trailing and leading icons</h2>
    <pie-button>
        <icon-search slot="icon"></icon-search>
        Search
    </pie-button>

    <pie-divider></pie-divider>

    <h2>pie-icon-button Component</h2>
    <pie-icon-button size="medium" type="button" variant="primary">
        <icon-close></icon-close>
    </pie-icon-button>

    <pie-divider></pie-divider>

    <pie-cookie-banner></pie-cookie-banner>

    <h2>pie-card</h2>
    <pie-card>
        <h2>pie-card</h2>
        <p>Some content</p>
    </pie-card>

    <pie-divider></pie-divider>

    <h2>pie-switch</h2>
    <pie-switch></pie-switch>
`;

setupCounter(document.querySelector('#counter'));

document.querySelector('#modal-trigger').addEventListener('click', () => {
    document.querySelector('#modal').setAttribute('isOpen', true);
});
