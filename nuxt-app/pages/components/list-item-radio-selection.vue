<template>
    <div>
        <h2 id="radio-leading-heading" style="padding: 8px 0;">Radio group - leading control (pre-selected)</h2>
        <pie-radio-group name="deliveryLeading" :value="deliveryLeading" @change="deliveryLeading = $event.target.value">
            <pie-form-label slot="label">Select a delivery option: {{ deliveryLeading }}</pie-form-label>
            <pie-list-item selection-type="radio" primaryText="Standard" secondaryText="3 to 5 days" metaText="Free">
                <pie-radio slot="leading" value="standard"></pie-radio>
            </pie-list-item>
            <pie-list-item selection-type="radio" primaryText="Express" secondaryText="Next day" metaText="£2.99">
                <pie-radio slot="leading" value="express"></pie-radio>
            </pie-list-item>
            <pie-list-item selection-type="radio" disabled primaryText="Collection" secondaryText="Pick up in store">
                <pie-radio slot="leading" value="collection" disabled></pie-radio>
            </pie-list-item>
            <pie-list-item selection-type="radio" primaryText="Locker" secondaryText="Collect at your convenience" metaText="Free">
                <pie-radio slot="leading" value="locker"></pie-radio>
            </pie-list-item>
        </pie-radio-group>

        <pie-button>Some focusable element after leading radio list</pie-button>

        <h2 id="radio-trailing-heading" style="padding: 8px 0;">Radio group - trailing control (pre-selected)</h2>
        <pie-radio-group name="deliveryTrailing" :value="deliveryTrailing" @change="deliveryTrailing = $event.target.value">
            <pie-form-label slot="label">Select a delivery option: {{ deliveryTrailing }}</pie-form-label>
            <pie-list-item selection-type="radio" primaryText="Standard" secondaryText="3 to 5 days">
                <pie-radio slot="trailing" value="standard"></pie-radio>
            </pie-list-item>
            <pie-list-item selection-type="radio" primaryText="Express" secondaryText="Next day">
                <pie-radio slot="trailing" value="express"></pie-radio>
            </pie-list-item>
            <pie-list-item selection-type="radio" disabled primaryText="Collection" secondaryText="Pick up in store">
                <pie-radio slot="trailing" value="collection" disabled></pie-radio>
            </pie-list-item>
            <pie-list-item selection-type="radio" primaryText="Locker" secondaryText="Collect at your convenience">
                <pie-radio slot="trailing" value="locker"></pie-radio>
            </pie-list-item>
        </pie-radio-group>

        <pie-button>Some focusable element after trailing radio list</pie-button>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/radio.js';
import '@justeattakeaway/pie-webc/components/radio-group.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
import '@justeattakeaway/pie-webc/components/form-label.js';
import '@justeattakeaway/pie-webc/components/button.js';

definePageMeta({
    title: 'List Item Radio Selection',
});

const deliveryLeading = ref('express');
const deliveryTrailing = ref('locker');
</script>
