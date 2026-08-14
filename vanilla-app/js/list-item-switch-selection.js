import '@justeattakeaway/pie-webc/components/list.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
import '@justeattakeaway/pie-webc/components/switch.js';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-webc/components/thumbnail.js';

import './shared.js';
import './utils/navigation.js';

document.querySelector('#app').innerHTML = `
    <h2 id="switch-trailing-heading" style="padding: 8px 0;">Notification settings - trailing control</h2>
    <p id="settings-trailing-summary">Enabled: Email, Push notifications</p>
    <pie-list id="settings-trailing" aria-label="Notification settings (trailing control)">
        <pie-list-item hasDivider interactionType="switch" primaryText="Email" secondaryText="Order updates and receipts">
            <pie-switch slot="trailing" name="email" checked></pie-switch>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="switch" primaryText="Push notifications" secondaryText="Offers and reminders">
            <pie-switch slot="trailing" name="push" checked></pie-switch>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="switch" disabled primaryText="SMS" secondaryText="Currently unavailable">
            <pie-tag slot="leading" isDimmed>Unavailable</pie-tag>
            <pie-switch slot="trailing" name="sms" disabled></pie-switch>
        </pie-list-item>
        <pie-list-item interactionType="switch" primaryText="Post" secondaryText="Paper statements">
            <pie-switch slot="trailing" name="post"></pie-switch>
        </pie-list-item>
    </pie-list>

    <pie-button>Some focusable element after trailing switch list</pie-button>

    <h2 id="switch-leading-heading" style="padding: 8px 0;">Notification settings - leading control</h2>
    <p id="settings-leading-summary">Enabled: Email, Push notifications</p>
    <pie-list id="settings-leading" aria-label="Notification settings (leading control)">
        <pie-list-item hasDivider interactionType="switch" primaryText="Email" secondaryText="Order updates and receipts">
            <pie-switch slot="leading" name="email" checked></pie-switch>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="switch" primaryText="Push notifications" secondaryText="Offers and reminders">
            <pie-switch slot="leading" name="push" checked></pie-switch>
        </pie-list-item>
        <pie-list-item hasDivider interactionType="switch" disabled primaryText="SMS" secondaryText="Currently unavailable">
            <pie-switch slot="leading" name="sms" disabled></pie-switch>
            <pie-tag slot="trailing" isDimmed>Unavailable</pie-tag>
        </pie-list-item>
        <pie-list-item interactionType="switch" primaryText="Post" secondaryText="Paper statements">
            <pie-switch slot="leading" name="post"></pie-switch>
        </pie-list-item>
    </pie-list>

    <pie-button>Some focusable element after leading switch list</pie-button>

    <!--
        Switch rows have no container group to propagate a disabled state, so the disabled row sets
        \`disabled\` on the item, the switch and the thumbnail, and \`isDimmed\` on the tag.
    -->
    <h2 id="switch-media-heading" style="padding: 8px 0;">Notification settings - slotted thumbnail</h2>
    <p id="settings-media-summary">Enabled: Email, Push notifications</p>
    <pie-list id="settings-media" aria-label="Notification settings (slotted thumbnail)">
        <pie-list-item hasDivider hasMedia interactionType="switch" primaryText="Email" secondaryText="Order updates and receipts">
            <pie-thumbnail slot="leading" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
            <pie-switch slot="trailing" name="email" checked></pie-switch>
        </pie-list-item>
        <pie-list-item hasDivider hasMedia interactionType="switch" primaryText="Push notifications" secondaryText="Offers and reminders">
            <pie-thumbnail slot="leading" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
            <pie-switch slot="trailing" name="push" checked></pie-switch>
        </pie-list-item>
        <pie-list-item hasDivider hasMedia interactionType="switch" disabled primaryText="SMS" secondaryText="Currently unavailable">
            <pie-thumbnail slot="leading" size="40" backgroundColor="strong" variant="outline" disabled></pie-thumbnail>
            <pie-tag slot="trailing" isDimmed>Unavailable</pie-tag>
            <pie-switch slot="trailing" name="sms" disabled></pie-switch>
        </pie-list-item>
        <pie-list-item hasMedia interactionType="switch" primaryText="Post" secondaryText="Paper statements">
            <pie-thumbnail slot="leading" size="40" backgroundColor="strong" variant="outline"></pie-thumbnail>
            <pie-switch slot="trailing" name="post"></pie-switch>
        </pie-list-item>
    </pie-list>

    <pie-button>Some focusable element after slotted thumbnail switch list</pie-button>
`;

const labels = {
    email: 'Email',
    push: 'Push notifications',
    sms: 'SMS',
    post: 'Post',
};

// Switches have no group, so state lives on each switch. The change event bubbles up to the
// `pie-list`, so a single listener on the list can recompute the summary of what is enabled.
function summarise (list) {
    const enabled = [...list.querySelectorAll('pie-switch')]
        .filter((pieSwitch) => pieSwitch.checked)
        .map((pieSwitch) => labels[pieSwitch.name]);

    return `Enabled: ${enabled.length ? enabled.join(', ') : 'None'}`;
}

['trailing', 'leading', 'media'].forEach((variant) => {
    const list = document.querySelector(`#settings-${variant}`);
    const summary = document.querySelector(`#settings-${variant}-summary`);

    list.addEventListener('change', () => {
        summary.textContent = summarise(list);
    });
});
