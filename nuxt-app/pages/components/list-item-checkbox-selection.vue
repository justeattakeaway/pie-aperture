<template>
    <div>
        <h2 id="checkbox-leading-heading" style="padding: 8px 0;">Checkbox group - leading control (Pepperoni pre-selected)</h2>
        <pie-checkbox-group @change="onLeadingChange">
            <pie-form-label slot="label">Selected toppings: {{ leadingSelected.join(', ') || 'none' }}</pie-form-label>
            <pie-list-item selectionType="checkbox" primaryText="Cheese" secondaryText="Extra mature" metaText="Free">
                <pie-checkbox slot="leading" name="cheese" value="cheese"></pie-checkbox>
            </pie-list-item>
            <pie-list-item selectionType="checkbox" primaryText="Pepperoni" secondaryText="Spicy">
                <pie-checkbox slot="leading" name="pepperoni" value="pepperoni" checked></pie-checkbox>
            </pie-list-item>
            <pie-list-item selectionType="checkbox" disabled primaryText="Mushrooms" secondaryText="Out of season">
                <pie-checkbox slot="leading" name="mushrooms" value="mushrooms" disabled></pie-checkbox>
            </pie-list-item>
            <pie-list-item selectionType="checkbox" primaryText="Olives" metaText="£0.50">
                <pie-checkbox slot="leading" name="olives" value="olives"></pie-checkbox>
            </pie-list-item>
        </pie-checkbox-group>

        <pie-button>Some focusable element after leading checkbox list</pie-button>

        <h2 id="checkbox-trailing-heading" style="padding: 8px 0;">Checkbox group - trailing control (Pepperoni pre-selected)</h2>
        <pie-checkbox-group @change="onTrailingChange">
            <pie-form-label slot="label">Selected toppings: {{ trailingSelected.join(', ') || 'none' }}</pie-form-label>
            <pie-list-item selectionType="checkbox" primaryText="Cheese" secondaryText="Extra mature">
                <pie-checkbox slot="trailing" name="cheese" value="cheese"></pie-checkbox>
            </pie-list-item>
            <pie-list-item selectionType="checkbox" primaryText="Pepperoni" secondaryText="Spicy">
                <pie-checkbox slot="trailing" name="pepperoni" value="pepperoni" checked></pie-checkbox>
            </pie-list-item>
            <pie-list-item selectionType="checkbox" disabled primaryText="Mushrooms" secondaryText="Out of season">
                <pie-checkbox slot="trailing" name="mushrooms" value="mushrooms" disabled></pie-checkbox>
            </pie-list-item>
            <pie-list-item selectionType="checkbox" primaryText="Olives" metaText="£0.50">
                <pie-checkbox slot="trailing" name="olives" value="olives"></pie-checkbox>
            </pie-list-item>
        </pie-checkbox-group>

        <pie-button>Some focusable element after trailing checkbox list</pie-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/checkbox.js';
import '@justeattakeaway/pie-webc/components/checkbox-group.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
import '@justeattakeaway/pie-webc/components/form-label.js';
import '@justeattakeaway/pie-webc/components/button.js';

definePageMeta({
    title: 'List Item Checkbox Selection',
});

// Multi-select: track the checked toppings so the label reflects them. This confirms clicking
// anywhere on a row (not just the checkbox) toggles it.
const leadingSelected = ref<string[]>(['pepperoni']);
const trailingSelected = ref<string[]>(['pepperoni']);

const toggle = (selected: string[], event: Event) => {
    const checkbox = event.target as HTMLInputElement;
    return checkbox.checked
        ? [...new Set([...selected, checkbox.value])]
        : selected.filter((value) => value !== checkbox.value);
};

const onLeadingChange = (event: Event) => { leadingSelected.value = toggle(leadingSelected.value, event); };
const onTrailingChange = (event: Event) => { trailingSelected.value = toggle(trailingSelected.value, event); };
</script>
