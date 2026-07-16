<template>
    <div>
        <h2 id="plain-text-list-heading" style="padding: 8px 0;">PIE List - plain text items</h2>
        <pie-card variant="outline">
            <pie-list aria-labelledby="plain-text-list-heading">
                <pie-list-item primaryText="First list item"></pie-list-item>
                <pie-list-item primaryText="Second list item"></pie-list-item>
                <pie-list-item primaryText="Third list item"></pie-list-item>
            </pie-list>
        </pie-card>

        <h2 id="mixed-content-list-heading" style="padding: 8px 0;">PIE List - mixed content</h2>
        <pie-card variant="outline">
            <pie-list aria-labelledby="mixed-content-list-heading">
                <pie-list-item primaryText="Delivery details" is-bold></pie-list-item>
                <pie-list-item primaryText="Estimated time: 25 minutes"></pie-list-item>
                <pie-list-item primaryText="Driver is on the way"></pie-list-item>
            </pie-list>
        </pie-card>

        <h2 id="leading-trailing-list-heading" style="padding: 8px 0;">PIE List - leading &amp; trailing content</h2>
        <pie-card variant="outline">
            <pie-list aria-labelledby="leading-trailing-list-heading">
                <pie-list-item has-media primaryText="Cheeseburger Deluxe" secondaryText="Downtown Burger Co.">
                    <pie-thumbnail slot="leading" :size="40"></pie-thumbnail>
                    <pie-tag slot="trailing">Popular</pie-tag>
                </pie-list-item>
                <pie-list-item primaryText="Track your order" secondaryText="Driver is 5 minutes away">
                    <icon-placeholder slot="leading"></icon-placeholder>
                    <icon-chevron-right slot="trailing"></icon-chevron-right>
                </pie-list-item>
            </pie-list>
        </pie-card>

        <h2 id="meta-text-list-heading" style="padding: 8px 0;">PIE List - meta text</h2>
        <pie-card variant="outline">
            <pie-list aria-labelledby="meta-text-list-heading">
                <pie-list-item primaryText="Order #48213" secondaryText="Delivered" metaText="2 items"></pie-list-item>
                <pie-list-item primaryText="Order #48198" metaText="£24.50"></pie-list-item>
                <pie-list-item primaryText="Order #48176"></pie-list-item>
            </pie-list>
        </pie-card>

        <h2 id="long-text-list-heading" style="padding: 8px 0;">PIE List - long text (wrapping)</h2>
        <pie-card variant="outline">
            <pie-list aria-labelledby="long-text-list-heading">
                <pie-list-item primaryText="This is an intentionally very long list item primary text that is designed to wrap across multiple lines so we can verify how the list item handles vertical growth, line wrapping and spacing when the content far exceeds a single line of text within the available width of the card container."></pie-list-item>
                <pie-list-item primaryText="Order summary with an unusually long title that should wrap onto several lines to test how the primary text behaves alongside secondary text and a trailing meta text value" secondaryText="This secondary line is also deliberately long so that both the primary and secondary text wrap, letting us confirm the trailing meta text stays aligned correctly when the item grows tall" metaText="£152.00"></pie-list-item>
                <pie-list-item has-media primaryText="A restaurant with a very long name that keeps going and going to force the primary text to wrap next to the leading thumbnail media element" secondaryText="Plus a secondary description that also wraps to test media alignment against multi-line text content">
                    <pie-thumbnail slot="leading" :size="40"></pie-thumbnail>
                </pie-list-item>
            </pie-list>
        </pie-card>

        <h2 id="rtl-list-heading" style="padding: 8px 0;">PIE List - right-to-left content</h2>
        <pie-card variant="outline">
            <pie-list dir="rtl" aria-labelledby="rtl-list-heading">
                <pie-list-item primaryText="برجر لحم مشوي"></pie-list-item>
                <pie-list-item primaryText="بيتزا مارغريتا"></pie-list-item>
                <pie-list-item primaryText="تفاصيل التوصيل" secondaryText="الوقت المقدر ٢٥ دقيقة"></pie-list-item>
                <pie-list-item primaryText="تتبع طلبك" secondaryText="السائق على بعد ٥ دقائق">
                    <icon-placeholder slot="leading"></icon-placeholder>
                    <icon-chevron-right slot="trailing"></icon-chevron-right>
                </pie-list-item>
            </pie-list>
        </pie-card>

        <h2 id="padding-override-list-heading" style="padding: 8px 0;">PIE List - overridden inline padding</h2>
        <pie-card variant="outline">
            <pie-list aria-labelledby="padding-override-list-heading">
                <pie-list-item primaryText="First list item" style="--list-item-inline-padding: var(--dt-spacing-64);"></pie-list-item>
                <pie-list-item primaryText="Second list item" style="--list-item-inline-padding: var(--dt-spacing-64);"></pie-list-item>
                <pie-list-item primaryText="Third list item" style="--list-item-inline-padding: var(--dt-spacing-64);"></pie-list-item>
            </pie-list>
        </pie-card>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/list.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
import '@justeattakeaway/pie-webc/components/card.js';
import '@justeattakeaway/pie-webc/components/thumbnail.js';
import '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronRight.js';

definePageMeta({
    title: 'List',
});
</script>
