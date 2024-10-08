import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/modal.js';
import './shared.js';
import './utils/navigation.js';

document.querySelector('#app').innerHTML = `
    <pie-button id="modal-trigger" type="button">Open Modal</pie-button>
    <pie-modal
        id="modal"
        isOpen
        heading="Modal Header"
        leadingAction='${JSON.stringify({ text: 'Confirm' })}'
        supportingAction='${JSON.stringify({ text: 'Cancel' })}'
        isDismissible
        hasBackButton>
      <p>Modal content</p>
    </pie-modal>`;


document.querySelector('#modal-trigger').addEventListener('click', () => {
    document.querySelector('#modal').setAttribute('isOpen', true);
});