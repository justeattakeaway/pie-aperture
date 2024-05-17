import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/modal.js';
import './shared.js';
import './utils/navigation.js';

document.querySelector('#app').innerHTML = `
    <h2>pie-modal</h2>
    <pie-button id="modal-trigger" type="button">Open Modal</pie-button>
    <pie-modal
        id="modal"
        heading="My Awesome Heading"
        headingLevel="h3"
        leadingAction='${JSON.stringify({ text: 'Leading action' })}'
        isDismissible>
        Modal content
    </pie-modal>`;

document.querySelector('#modal-trigger').addEventListener('click', () => {
    document.querySelector('#modal').setAttribute('isOpen', true);
});