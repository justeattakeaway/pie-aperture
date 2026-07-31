<template>
    <div>
        <h2 id="switch-trailing-heading" style="padding: 8px 0;">Notification settings - trailing control</h2>
        <p>Enabled: {{ summarise(trailingSettings) }}</p>
        <pie-list aria-label="Notification settings (trailing control)">
            <pie-list-item interactionType="switch" primaryText="Email" secondaryText="Order updates and receipts">
                <pie-switch slot="trailing" name="email" :checked="trailingSettings.email" @change="trailingSettings.email = $event.target.checked"></pie-switch>
            </pie-list-item>
            <pie-list-item interactionType="switch" primaryText="Push notifications" secondaryText="Offers and reminders">
                <pie-switch slot="trailing" name="push" :checked="trailingSettings.push" @change="trailingSettings.push = $event.target.checked"></pie-switch>
            </pie-list-item>
            <pie-list-item interactionType="switch" disabled primaryText="SMS" secondaryText="Currently unavailable">
                <pie-switch slot="trailing" name="sms" :checked="trailingSettings.sms" disabled @change="trailingSettings.sms = $event.target.checked"></pie-switch>
            </pie-list-item>
            <pie-list-item interactionType="switch" primaryText="Post" secondaryText="Paper statements">
                <pie-switch slot="trailing" name="post" :checked="trailingSettings.post" @change="trailingSettings.post = $event.target.checked"></pie-switch>
            </pie-list-item>
        </pie-list>

        <pie-button>Some focusable element after trailing switch list</pie-button>

        <h2 id="switch-leading-heading" style="padding: 8px 0;">Notification settings - leading control</h2>
        <p>Enabled: {{ summarise(leadingSettings) }}</p>
        <pie-list aria-label="Notification settings (leading control)">
            <pie-list-item interactionType="switch" primaryText="Email" secondaryText="Order updates and receipts">
                <pie-switch slot="leading" name="email" :checked="leadingSettings.email" @change="leadingSettings.email = $event.target.checked"></pie-switch>
            </pie-list-item>
            <pie-list-item interactionType="switch" primaryText="Push notifications" secondaryText="Offers and reminders">
                <pie-switch slot="leading" name="push" :checked="leadingSettings.push" @change="leadingSettings.push = $event.target.checked"></pie-switch>
            </pie-list-item>
            <pie-list-item interactionType="switch" disabled primaryText="SMS" secondaryText="Currently unavailable">
                <pie-switch slot="leading" name="sms" :checked="leadingSettings.sms" disabled @change="leadingSettings.sms = $event.target.checked"></pie-switch>
            </pie-list-item>
            <pie-list-item interactionType="switch" primaryText="Post" secondaryText="Paper statements">
                <pie-switch slot="leading" name="post" :checked="leadingSettings.post" @change="leadingSettings.post = $event.target.checked"></pie-switch>
            </pie-list-item>
        </pie-list>

        <pie-button>Some focusable element after leading switch list</pie-button>
    </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/list.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
import '@justeattakeaway/pie-webc/components/switch.js';
import '@justeattakeaway/pie-webc/components/button.js';

definePageMeta({
    title: 'List Item Switch Selection',
});

type Settings = { email: boolean; push: boolean; sms: boolean; post: boolean };

const labels: Record<keyof Settings, string> = {
    email: 'Email',
    push: 'Push notifications',
    sms: 'SMS',
    post: 'Post',
};

// Switches have no group, so each row's state is owned here and updated from the switch's own
// change event - the pattern a real consumer would use for a settings screen.
const trailingSettings = reactive<Settings>({ email: true, push: true, sms: false, post: false });
const leadingSettings = reactive<Settings>({ email: true, push: true, sms: false, post: false });

const summarise = (settings: Settings) => {
    const enabled = (Object.keys(labels) as (keyof Settings)[])
        .filter((key) => settings[key])
        .map((key) => labels[key]);
    return enabled.length ? enabled.join(', ') : 'None';
};
</script>
