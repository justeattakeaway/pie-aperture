<template>
    <div>
        <h2 id="link-anchor-heading" style="padding: 8px 0;">Link rows (raw anchor)</h2>
        <pie-list aria-label="Manage your restaurant (anchor)">
            <pie-list-item isLink primaryText="Orders" secondaryText="View and manage live orders" metaText="12 active">
                <a slot="link" href="#orders"></a>
            </pie-list-item>
            <pie-list-item isLink primaryText="Menu" secondaryText="Edit items, prices and photos">
                <a slot="link" href="#menu"></a>
            </pie-list-item>
            <pie-list-item isLink primaryText="Opening hours" secondaryText="Set your weekly schedule">
                <a slot="link" href="#opening-hours"></a>
            </pie-list-item>
            <pie-list-item isLink primaryText="Payouts" secondaryText="Invoices and bank details" metaText="Weekly">
                <a slot="link" href="#payouts"></a>
            </pie-list-item>
        </pie-list>

        <h2 id="link-nuxtlink-heading" style="padding: 8px 0;">Link rows (NuxtLink component)</h2>
        <pie-list aria-label="Manage your restaurant (NuxtLink)">
            <pie-list-item isLink primaryText="Orders" secondaryText="View and manage live orders" metaText="12 active">
                <NuxtLink slot="link" to="#orders" />
            </pie-list-item>
            <pie-list-item isLink primaryText="Menu" secondaryText="Edit items, prices and photos">
                <NuxtLink slot="link" to="#menu" />
            </pie-list-item>
            <pie-list-item isLink primaryText="Opening hours" secondaryText="Set your weekly schedule">
                <NuxtLink slot="link" to="#opening-hours" />
            </pie-list-item>
            <pie-list-item isLink primaryText="Payouts" secondaryText="Invoices and bank details" metaText="Weekly">
                <NuxtLink slot="link" to="#payouts" />
            </pie-list-item>
        </pie-list>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/list.js';
import '@justeattakeaway/pie-webc/components/list-item.js';

// The slotted anchor is left empty on purpose: `pie-list-item` names it from the item's text.
// `NuxtLink` renders an `<a>` and forwards the `slot` attribute, so it works as the stretched target.
definePageMeta({
    title: 'List Item Link',
});
</script>
