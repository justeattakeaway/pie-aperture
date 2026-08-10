import '@justeattakeaway/pie-webc/components/radio.js';
import '@justeattakeaway/pie-webc/components/radio-group.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
import '@justeattakeaway/pie-webc/components/form-label.js';
import '@justeattakeaway/pie-webc/components/button.js';

import './shared.js';
import './utils/navigation.js';

document.querySelector('#app').innerHTML = `
    <h2 id="radio-leading-heading" style="padding: 8px 0;">Radio group - leading control (pre-selected)</h2>
    <pie-radio-group id="delivery-leading" name="deliveryLeading" value="express">
        <pie-form-label slot="label" id="delivery-leading-label">Select a delivery option: express</pie-form-label>
        <pie-list-item hasDivider interactionType="radio" primaryText="Standard" secondaryText="3 to 5 days" metaText="Free">
            <pie-radio slot="leading" value="standard"></pie-radio>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="radio" primaryText="Express" secondaryText="Next day" metaText="£2.99">
            <pie-radio slot="leading" value="express"></pie-radio>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="radio" disabled primaryText="Collection" secondaryText="Pick up in store">
            <pie-radio slot="leading" value="collection" disabled></pie-radio>
        </pie-list-item>
        <pie-list-item interactionType="radio" primaryText="Locker" secondaryText="Collect at your convenience" metaText="Free">
            <pie-radio slot="leading" value="locker"></pie-radio>
        </pie-list-item>
    </pie-radio-group>

    <pie-button>Some focusable element after leading radio list</pie-button>

    <h2 id="radio-trailing-heading" style="padding: 8px 0;">Radio group - trailing control (pre-selected)</h2>
    <pie-radio-group id="delivery-trailing" name="deliveryTrailing" value="locker">
        <pie-form-label slot="label" id="delivery-trailing-label">Select a delivery option: locker</pie-form-label>
        <pie-list-item hasDivider interactionType="radio" primaryText="Standard" secondaryText="3 to 5 days">
            <pie-radio slot="trailing" value="standard"></pie-radio>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="radio" primaryText="Express" secondaryText="Next day">
            <pie-radio slot="trailing" value="express"></pie-radio>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="radio" disabled primaryText="Collection" secondaryText="Pick up in store">
            <pie-radio slot="trailing" value="collection" disabled></pie-radio>
        </pie-list-item>
        <pie-list-item interactionType="radio" primaryText="Locker" secondaryText="Collect at your convenience">
            <pie-radio slot="trailing" value="locker"></pie-radio>
        </pie-list-item>
    </pie-radio-group>

    <pie-button>Some focusable element after trailing radio list</pie-button>
`;

document.querySelector('#delivery-leading').addEventListener('change', function () {
    document.querySelector('#delivery-leading-label').innerHTML = `Select a delivery option: ${this.value}`;
});

document.querySelector('#delivery-trailing').addEventListener('change', function () {
    document.querySelector('#delivery-trailing-label').innerHTML = `Select a delivery option: ${this.value}`;
});
