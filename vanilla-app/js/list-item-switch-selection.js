import '@justeattakeaway/pie-webc/components/list.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
import '@justeattakeaway/pie-webc/components/switch.js';
import '@justeattakeaway/pie-webc/components/button.js';

import './shared.js';
import './utils/navigation.js';

document.querySelector('#app').innerHTML = `
    <h2 id="switch-trailing-heading" style="padding: 8px 0;">Notification settings - trailing control</h2>
    <p id="settings-trailing-summary">Enabled: Email, Push notifications</p>
    <pie-list id="settings-trailing" aria-label="Notification settings (trailing control)">
        <pie-list-item selectionType="switch" primaryText="Email" secondaryText="Order updates and receipts">
            <pie-switch slot="trailing" name="email" checked></pie-switch>
        </pie-list-item>
        <pie-list-item selectionType="switch" primaryText="Push notifications" secondaryText="Offers and reminders">
            <pie-switch slot="trailing" name="push" checked></pie-switch>
        </pie-list-item>
        <pie-list-item selectionType="switch" disabled primaryText="SMS" secondaryText="Currently unavailable">
            <pie-switch slot="trailing" name="sms" disabled></pie-switch>
        </pie-list-item>
        <pie-list-item selectionType="switch" primaryText="Post" secondaryText="Paper statements">
            <pie-switch slot="trailing" name="post"></pie-switch>
        </pie-list-item>
    </pie-list>

    <pie-button>Some focusable element after trailing switch list</pie-button>

    <h2 id="switch-leading-heading" style="padding: 8px 0;">Notification settings - leading control</h2>
    <p id="settings-leading-summary">Enabled: Email, Push notifications</p>
    <pie-list id="settings-leading" aria-label="Notification settings (leading control)">
        <pie-list-item selectionType="switch" primaryText="Email" secondaryText="Order updates and receipts">
            <pie-switch slot="leading" name="email" checked></pie-switch>
        </pie-list-item>
        <pie-list-item selectionType="switch" primaryText="Push notifications" secondaryText="Offers and reminders">
            <pie-switch slot="leading" name="push" checked></pie-switch>
        </pie-list-item>
        <pie-list-item selectionType="switch" disabled primaryText="SMS" secondaryText="Currently unavailable">
            <pie-switch slot="leading" name="sms" disabled></pie-switch>
        </pie-list-item>
        <pie-list-item selectionType="switch" primaryText="Post" secondaryText="Paper statements">
            <pie-switch slot="leading" name="post"></pie-switch>
        </pie-list-item>
    </pie-list>

    <pie-button>Some focusable element after leading switch list</pie-button>
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

['trailing', 'leading'].forEach((slot) => {
    const list = document.querySelector(`#settings-${slot}`);
    const summary = document.querySelector(`#settings-${slot}-summary`);

    list.addEventListener('change', () => {
        summary.textContent = summarise(list);
    });
});
