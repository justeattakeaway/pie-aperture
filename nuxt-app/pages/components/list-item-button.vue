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
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/list.js';
import '@justeattakeaway/pie-webc/components/list-item.js';

definePageMeta({
    title: 'List Item Button',
});

const lastAction = ref('None');
</script>
