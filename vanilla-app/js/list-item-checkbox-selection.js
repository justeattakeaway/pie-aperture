import '@justeattakeaway/pie-webc/components/checkbox.js';
import '@justeattakeaway/pie-webc/components/checkbox-group.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
import '@justeattakeaway/pie-webc/components/form-label.js';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-webc/components/thumbnail.js';

import './shared.js';
import './utils/navigation.js';

document.querySelector('#app').innerHTML = `
    <h2 id="checkbox-leading-heading" style="padding: 8px 0;">Checkbox group - leading control (Pepperoni pre-selected)</h2>
    <pie-checkbox-group id="toppings-leading">
        <pie-form-label slot="label" id="toppings-leading-label">Select your toppings</pie-form-label>
        <pie-list-item hasDivider interactionType="checkbox" primaryText="Cheese" secondaryText="Extra mature" metaText="Free">
            <pie-checkbox slot="leading" name="cheese" value="cheese"></pie-checkbox>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="checkbox" primaryText="Pepperoni" secondaryText="Spicy">
            <pie-checkbox slot="leading" name="pepperoni" value="pepperoni" checked></pie-checkbox>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="checkbox" disabled primaryText="Mushrooms" secondaryText="Out of season">
            <pie-checkbox slot="leading" name="mushrooms" value="mushrooms" disabled></pie-checkbox>
            <pie-tag slot="trailing" isDimmed>Out of stock</pie-tag>
        </pie-list-item>
        <pie-list-item interactionType="checkbox" primaryText="Olives" metaText="£0.50">
            <pie-checkbox slot="leading" name="olives" value="olives"></pie-checkbox>
        </pie-list-item>
    </pie-checkbox-group>

    <pie-button>Some focusable element after leading checkbox list</pie-button>

    <h2 id="checkbox-trailing-heading" style="padding: 8px 0;">Checkbox group - trailing control (Pepperoni pre-selected)</h2>
    <pie-checkbox-group id="toppings-trailing">
        <pie-form-label slot="label" id="toppings-trailing-label">Select your toppings</pie-form-label>
        <pie-list-item hasDivider interactionType="checkbox" primaryText="Cheese" secondaryText="Extra mature">
            <pie-checkbox slot="trailing" name="cheese" value="cheese"></pie-checkbox>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="checkbox" primaryText="Pepperoni" secondaryText="Spicy">
            <pie-checkbox slot="trailing" name="pepperoni" value="pepperoni" checked></pie-checkbox>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="checkbox" disabled primaryText="Mushrooms" secondaryText="Out of season">
            <pie-tag slot="leading" isDimmed>Out of stock</pie-tag>
            <pie-checkbox slot="trailing" name="mushrooms" value="mushrooms" disabled></pie-checkbox>
        </pie-list-item>
        <pie-list-item interactionType="checkbox" primaryText="Olives" metaText="£0.50">
            <pie-checkbox slot="trailing" name="olives" value="olives"></pie-checkbox>
        </pie-list-item>
    </pie-checkbox-group>

    <pie-button>Some focusable element after trailing checkbox list</pie-button>

    <h2 id="checkbox-media-heading" style="padding: 8px 0;">Checkbox group - slotted thumbnails</h2>
    <pie-checkbox-group id="toppings-media">
        <pie-form-label slot="label" id="toppings-media-label">Select your toppings</pie-form-label>
        <pie-list-item hasDivider hasMedia interactionType="checkbox" primaryText="Cheese" secondaryText="Extra mature">
            <pie-checkbox slot="leading" name="cheese" value="cheese"></pie-checkbox>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
        </pie-list-item>
        <pie-list-item hasDivider hasMedia interactionType="checkbox" primaryText="Pepperoni" secondaryText="Spicy">
            <pie-checkbox slot="leading" name="pepperoni" value="pepperoni" checked></pie-checkbox>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
        </pie-list-item>
        <pie-list-item hasDivider hasMedia interactionType="checkbox" primaryText="Mushrooms" secondaryText="In season">
            <pie-checkbox slot="leading" name="mushrooms" value="mushrooms"></pie-checkbox>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
        </pie-list-item>
        <pie-list-item hasMedia interactionType="checkbox" primaryText="Olives" secondaryText="Pitted">
            <pie-checkbox slot="leading" name="olives" value="olives"></pie-checkbox>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
        </pie-list-item>
    </pie-checkbox-group>

    <pie-button>Some focusable element after slotted thumbnail checkbox list</pie-button>

    <!--
        Only the group is disabled here. It propagates its disabled state to every row, its slotted
        checkbox, and any slotted \`pie-tag\` or \`pie-thumbnail\`, so none of them set \`disabled\` or
        \`isDimmed\` themselves.
    -->
    <h2 id="checkbox-group-disabled-heading" style="padding: 8px 0;">Disabled checkbox group - propagated to slotted content</h2>
    <pie-checkbox-group disabled>
        <pie-form-label slot="label">Toppings (group disabled)</pie-form-label>
        <pie-list-item hasDivider interactionType="checkbox" primaryText="Cheese" secondaryText="Extra mature" metaText="Free">
            <pie-checkbox slot="leading" name="cheese" value="cheese"></pie-checkbox>
            <pie-tag slot="trailing">Available</pie-tag>
        </pie-list-item>
        <pie-list-item hasDivider hasMedia interactionType="checkbox" primaryText="Pepperoni" secondaryText="Spicy">
            <pie-checkbox slot="leading" name="pepperoni" value="pepperoni"></pie-checkbox>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="checkbox" primaryText="Mushrooms" secondaryText="Out of season">
            <pie-checkbox slot="leading" name="mushrooms" value="mushrooms"></pie-checkbox>
            <pie-tag slot="trailing">Out of stock</pie-tag>
        </pie-list-item>
        <pie-list-item hasMedia interactionType="checkbox" primaryText="Olives" secondaryText="Pitted">
            <pie-checkbox slot="leading" name="olives" value="olives"></pie-checkbox>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
        </pie-list-item>
    </pie-checkbox-group>

    <pie-button>Some focusable element after group-disabled checkbox list</pie-button>

    <!--
        Setting \`disabled\` on the group, every row and every slotted control, plus \`disabled\` on each
        thumbnail and \`isDimmed\` on each tag, is what the PIE docs recommend for SSR: group propagation
        happens at runtime through Lit context, so it is not reflected in server-rendered markup.
    -->
    <h2 id="checkbox-group-disabled-ssr-heading" style="padding: 8px 0;">Disabled checkbox group - explicit on every part (SSR safe)</h2>
    <pie-checkbox-group disabled>
        <pie-form-label slot="label">Toppings (group and rows disabled)</pie-form-label>
        <pie-list-item hasDivider interactionType="checkbox" disabled primaryText="Cheese" secondaryText="Extra mature" metaText="Free">
            <pie-checkbox slot="leading" name="cheese" value="cheese" disabled></pie-checkbox>
            <pie-tag slot="trailing" isDimmed>Available</pie-tag>
        </pie-list-item>
        <pie-list-item hasDivider hasMedia interactionType="checkbox" disabled primaryText="Pepperoni" secondaryText="Spicy">
            <pie-checkbox slot="leading" name="pepperoni" value="pepperoni" disabled></pie-checkbox>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline" disabled></pie-thumbnail>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="checkbox" disabled primaryText="Mushrooms" secondaryText="Out of season">
            <pie-checkbox slot="leading" name="mushrooms" value="mushrooms" disabled></pie-checkbox>
            <pie-tag slot="trailing" isDimmed>Out of stock</pie-tag>
        </pie-list-item>
        <pie-list-item hasMedia interactionType="checkbox" disabled primaryText="Olives" secondaryText="Pitted">
            <pie-checkbox slot="leading" name="olives" value="olives" disabled></pie-checkbox>
            <pie-thumbnail slot="trailing" size="40" backgroundColor="strong" variant="outline" disabled></pie-thumbnail>
        </pie-list-item>
    </pie-checkbox-group>

    <pie-button>Some focusable element after SSR-safe group-disabled checkbox list</pie-button>
`;

// Multi-select: read the currently checked toppings from the group and show them in the label.
// Confirms that clicking anywhere on a row (not just the checkbox) toggles it.
function selectedToppings (group) {
    const checked = [...group.querySelectorAll('pie-checkbox')]
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.value);
    return checked.length ? checked.join(', ') : 'none';
}

['toppings-leading', 'toppings-trailing', 'toppings-media'].forEach((id) => {
    const group = document.querySelector(`#${id}`);
    const label = document.querySelector(`#${id}-label`);
    const update = () => { label.innerHTML = `Selected toppings: ${selectedToppings(group)}`; };
    group.addEventListener('change', update);
    update();
});
