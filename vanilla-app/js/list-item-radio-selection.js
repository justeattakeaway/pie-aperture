import '@justeattakeaway/pie-webc/components/radio.js';
import '@justeattakeaway/pie-webc/components/radio-group.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
import '@justeattakeaway/pie-webc/components/form-label.js';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-webc/components/thumbnail.js';

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
            <pie-tag slot="trailing" isDimmed>Unavailable</pie-tag>
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
            <pie-tag slot="leading" isDimmed>Unavailable</pie-tag>
            <pie-radio slot="trailing" value="collection" disabled></pie-radio>
        </pie-list-item>
        <pie-list-item interactionType="radio" primaryText="Locker" secondaryText="Collect at your convenience">
            <pie-radio slot="trailing" value="locker"></pie-radio>
        </pie-list-item>
    </pie-radio-group>

    <pie-button>Some focusable element after trailing radio list</pie-button>

    <h2 id="radio-media-heading" style="padding: 8px 0;">Radio group - slotted thumbnails</h2>
    <pie-radio-group id="delivery-media" name="deliveryMedia" value="standard">
        <pie-form-label slot="label" id="delivery-media-label">Select a delivery option: standard</pie-form-label>
        <pie-list-item hasDivider hasMedia interactionType="radio" primaryText="Standard" secondaryText="3 to 5 days">
            <pie-radio slot="leading" value="standard"></pie-radio>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
        </pie-list-item>
        <pie-list-item hasDivider hasMedia interactionType="radio" primaryText="Express" secondaryText="Next day">
            <pie-radio slot="leading" value="express"></pie-radio>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
        </pie-list-item>
        <pie-list-item hasDivider hasMedia interactionType="radio" primaryText="Collection" secondaryText="Pick up in store">
            <pie-radio slot="leading" value="collection"></pie-radio>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
        </pie-list-item>
        <pie-list-item hasMedia interactionType="radio" primaryText="Locker" secondaryText="Collect at your convenience">
            <pie-radio slot="leading" value="locker"></pie-radio>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
        </pie-list-item>
    </pie-radio-group>

    <pie-button>Some focusable element after slotted thumbnail radio list</pie-button>

    <!--
        Only the group is disabled here. It propagates its disabled state to every row, its slotted
        radio, and any slotted \`pie-tag\` or \`pie-thumbnail\`, so none of them set \`disabled\` or
        \`isDimmed\` themselves.
    -->
    <h2 id="radio-group-disabled-heading" style="padding: 8px 0;">Disabled radio group - propagated to slotted content</h2>
    <pie-radio-group name="deliveryGroupDisabled" disabled>
        <pie-form-label slot="label">Delivery options (group disabled)</pie-form-label>
        <pie-list-item hasDivider interactionType="radio" primaryText="Standard" secondaryText="3 to 5 days">
            <pie-radio slot="leading" value="standard"></pie-radio>
            <pie-tag slot="trailing">Free</pie-tag>
        </pie-list-item>
        <pie-list-item hasDivider hasMedia interactionType="radio" primaryText="Express" secondaryText="Next day">
            <pie-radio slot="leading" value="express"></pie-radio>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="radio" primaryText="Collection" secondaryText="Pick up in store">
            <pie-radio slot="leading" value="collection"></pie-radio>
            <pie-tag slot="trailing">Free</pie-tag>
        </pie-list-item>
        <pie-list-item hasMedia interactionType="radio" primaryText="Locker" secondaryText="Collect at your convenience">
            <pie-radio slot="leading" value="locker"></pie-radio>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
        </pie-list-item>
    </pie-radio-group>

    <pie-button>Some focusable element after group-disabled radio list</pie-button>

    <!--
        Setting \`disabled\` on the group, every row and every slotted control, plus \`disabled\` on each
        thumbnail and \`isDimmed\` on each tag, is what the PIE docs recommend for SSR: group propagation
        happens at runtime through Lit context, so it is not reflected in server-rendered markup.
    -->
    <h2 id="radio-group-disabled-ssr-heading" style="padding: 8px 0;">Disabled radio group - explicit on every part (SSR safe)</h2>
    <pie-radio-group name="deliveryGroupDisabledSsr" disabled>
        <pie-form-label slot="label">Delivery options (group and rows disabled)</pie-form-label>
        <pie-list-item hasDivider interactionType="radio" disabled primaryText="Standard" secondaryText="3 to 5 days">
            <pie-radio slot="leading" value="standard" disabled></pie-radio>
            <pie-tag slot="trailing" isDimmed>Free</pie-tag>
        </pie-list-item>
        <pie-list-item hasDivider hasMedia interactionType="radio" disabled primaryText="Express" secondaryText="Next day">
            <pie-radio slot="leading" value="express" disabled></pie-radio>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline" disabled></pie-thumbnail>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="radio" disabled primaryText="Collection" secondaryText="Pick up in store">
            <pie-radio slot="leading" value="collection" disabled></pie-radio>
            <pie-tag slot="trailing" isDimmed>Free</pie-tag>
        </pie-list-item>
        <pie-list-item hasMedia interactionType="radio" disabled primaryText="Locker" secondaryText="Collect at your convenience">
            <pie-radio slot="leading" value="locker" disabled></pie-radio>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline" disabled></pie-thumbnail>
        </pie-list-item>
    </pie-radio-group>

    <pie-button>Some focusable element after SSR-safe group-disabled radio list</pie-button>
`;

document.querySelector('#delivery-leading').addEventListener('change', function () {
    document.querySelector('#delivery-leading-label').innerHTML = `Select a delivery option: ${this.value}`;
});

document.querySelector('#delivery-trailing').addEventListener('change', function () {
    document.querySelector('#delivery-trailing-label').innerHTML = `Select a delivery option: ${this.value}`;
});

document.querySelector('#delivery-media').addEventListener('change', function () {
    document.querySelector('#delivery-media-label').innerHTML = `Select a delivery option: ${this.value}`;
});
