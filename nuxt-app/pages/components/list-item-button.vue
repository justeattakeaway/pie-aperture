<template>
    <div>
        <h2 id="button-heading" style="padding: 8px 0;">Button rows</h2>
        <p data-test-id="button-activation-status">Last action: {{ lastAction }}</p>
        <pie-list data-test-id="button-list" aria-labelledby="button-heading">
            <pie-list-item hasDivider interactionType="button" data-action="Edit profile" primaryText="Edit profile" secondaryText="Update your name and photo" metaText="New" @click="lastAction = 'Edit profile'"></pie-list-item>
            <pie-list-item hasDivider interactionType="button" data-action="Change password" primaryText="Change password" secondaryText="Keep your account secure" @click="lastAction = 'Change password'"></pie-list-item>
            <pie-list-item hasDivider interactionType="button" data-action="Notification preferences" primaryText="Notification preferences" secondaryText="Choose what we email you about" @click="lastAction = 'Notification preferences'"></pie-list-item>
            <pie-list-item interactionType="button" data-action="Sign out" primaryText="Sign out" secondaryText="End your session on this device" @click="lastAction = 'Sign out'"></pie-list-item>
        </pie-list>

        <h2 id="button-disabled-heading" style="padding: 8px 0;">Disabled button rows</h2>
        <pie-list data-test-id="button-list-disabled" aria-labelledby="button-disabled-heading">
            <pie-list-item hasDivider interactionType="button" data-action="Edit profile" disabled primaryText="Edit profile" secondaryText="Update your name and photo" metaText="New" @click="lastAction = 'Edit profile'"></pie-list-item>
            <pie-list-item hasDivider interactionType="button" data-action="Change password" disabled primaryText="Change password" secondaryText="Keep your account secure" @click="lastAction = 'Change password'"></pie-list-item>
            <pie-list-item hasDivider interactionType="button" data-action="Notification preferences" disabled primaryText="Notification preferences" secondaryText="Choose what we email you about" @click="lastAction = 'Notification preferences'"></pie-list-item>
            <pie-list-item interactionType="button" data-action="Sign out" disabled primaryText="Sign out" secondaryText="End your session on this device" @click="lastAction = 'Sign out'"></pie-list-item>
        </pie-list>

        <h2 id="button-disabled-tag-heading" style="padding: 8px 0;">Disabled button rows with tag (isDimmed set explicitly)</h2>
        <pie-list aria-labelledby="button-disabled-tag-heading">
            <pie-list-item hasDivider interactionType="button" disabled primaryText="Cheeseburger Deluxe" secondaryText="Downtown Burger Co." @click="lastAction = 'Cheeseburger Deluxe'">
                <pie-tag slot="trailing" isDimmed>Popular</pie-tag>
            </pie-list-item>
            <pie-list-item hasDivider interactionType="button" primaryText="Margherita Pizza" secondaryText="City Pizza Co." @click="lastAction = 'Margherita Pizza'">
                <pie-tag slot="trailing">New</pie-tag>
            </pie-list-item>
            <pie-list-item interactionType="button" disabled primaryText="Veggie Burger" secondaryText="Green Bites" @click="lastAction = 'Veggie Burger'">
                <pie-tag slot="trailing" isDimmed>Deal</pie-tag>
            </pie-list-item>
        </pie-list>

        <!--
            A button row has no group to propagate from, so each slotted component must be disabled
            explicitly: `disabled` on the thumbnail and `isDimmed` on the tag. The third row is
            enabled for comparison.
        -->
        <h2 id="button-disabled-thumbnail-heading" style="padding: 8px 0;">Disabled button rows with thumbnail (disabled set explicitly)</h2>
        <pie-list aria-labelledby="button-disabled-thumbnail-heading">
            <pie-list-item hasDivider hasMedia interactionType="button" disabled primaryText="Cheeseburger Deluxe" secondaryText="Downtown Burger Co." @click="lastAction = 'Cheeseburger Deluxe'">
                <pie-thumbnail slot="leading" :size="40" backgroundColor="strong" variant="outline" disabled></pie-thumbnail>
                <pie-tag slot="trailing" isDimmed>Out of stock</pie-tag>
            </pie-list-item>
            <pie-list-item hasDivider hasMedia interactionType="button" disabled primaryText="Mushroom Risotto" secondaryText="Out of season" metaText="£8.50" @click="lastAction = 'Mushroom Risotto'">
                <pie-thumbnail slot="leading" :size="40" backgroundColor="strong" variant="outline" disabled></pie-thumbnail>
            </pie-list-item>
            <pie-list-item hasDivider hasMedia interactionType="button" primaryText="Margherita Pizza" secondaryText="City Pizza Co." @click="lastAction = 'Margherita Pizza'">
                <pie-thumbnail slot="leading" :size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
                <pie-tag slot="trailing">New</pie-tag>
            </pie-list-item>
            <pie-list-item hasMedia interactionType="button" disabled primaryText="Veggie Burger" secondaryText="Green Bites" @click="lastAction = 'Veggie Burger'">
                <pie-thumbnail slot="trailing" :size="40" backgroundColor="strong" variant="outline" disabled></pie-thumbnail>
            </pie-list-item>
        </pie-list>

        <!-- Slotted icons are dimmed by the item itself when the row is disabled, so they need no explicit prop. -->
        <h2 id="button-disabled-icon-heading" style="padding: 8px 0;">Disabled button rows with slotted icons</h2>
        <pie-list aria-labelledby="button-disabled-icon-heading">
            <pie-list-item hasDivider interactionType="button" disabled primaryText="Edit profile" secondaryText="Update your name and photo" @click="lastAction = 'Edit profile'">
                <icon-placeholder slot="leading"></icon-placeholder>
                <icon-chevron-right slot="trailing"></icon-chevron-right>
            </pie-list-item>
            <pie-list-item hasDivider interactionType="button" disabled primaryText="Change password" secondaryText="Keep your account secure" @click="lastAction = 'Change password'">
                <icon-placeholder slot="leading"></icon-placeholder>
                <icon-chevron-right slot="trailing"></icon-chevron-right>
            </pie-list-item>
            <pie-list-item hasDivider interactionType="button" primaryText="Notification preferences" secondaryText="Choose what we email you about" @click="lastAction = 'Notification preferences'">
                <icon-placeholder slot="leading"></icon-placeholder>
                <icon-chevron-right slot="trailing"></icon-chevron-right>
            </pie-list-item>
            <pie-list-item interactionType="button" disabled primaryText="Sign out" secondaryText="End your session on this device" @click="lastAction = 'Sign out'">
                <icon-placeholder slot="leading"></icon-placeholder>
                <icon-chevron-right slot="trailing"></icon-chevron-right>
            </pie-list-item>
        </pie-list>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/list.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
import '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-webc/components/thumbnail.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronRight.js';

definePageMeta({
    title: 'List Item Button',
});

const lastAction = ref('None');
</script>
