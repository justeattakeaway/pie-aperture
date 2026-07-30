'use client';

import { useState } from "react";
import NavigationLayout from "@/app/layout/navigation";
import { PieList } from "@justeattakeaway/pie-webc/react/list.js";
import { PieListItem } from "@justeattakeaway/pie-webc/react/list-item.js";
import { PieSwitch } from "@justeattakeaway/pie-webc/react/switch.js";
import { PieButton } from "@justeattakeaway/pie-webc/react/button.js";

type Settings = { email: boolean; push: boolean; sms: boolean; post: boolean };

const labels: Record<keyof Settings, string> = {
    email: 'Email',
    push: 'Push notifications',
    sms: 'SMS',
    post: 'Post',
};

const initialSettings: Settings = { email: true, push: true, sms: false, post: false };

const summarise = (settings: Settings) => {
    const enabled = (Object.keys(labels) as (keyof Settings)[])
        .filter((key) => settings[key])
        .map((key) => labels[key]);
    return enabled.length ? enabled.join(', ') : 'None';
};

export default function ListItemSwitchSelection() {
    // Switches have no group, so each row's state is owned here and updated from the switch's
    // own change event - the pattern a real consumer would use for a settings screen.
    const [trailingSettings, setTrailingSettings] = useState<Settings>(initialSettings);
    const [leadingSettings, setLeadingSettings] = useState<Settings>(initialSettings);

    const handleChange = (
        setSettings: React.Dispatch<React.SetStateAction<Settings>>,
        key: keyof Settings,
    ) => (event: CustomEvent) => {
        const { checked } = event.target as HTMLInputElement;
        setSettings((current) => ({ ...current, [key]: checked }));
    };

    return (
        <NavigationLayout title="List Item Switch Selection">

            <h2 id="switch-trailing-heading" style={{ padding: '8px 0' }}>Notification settings - trailing control</h2>
            <p>Enabled: {summarise(trailingSettings)}</p>
            <PieList aria-label="Notification settings (trailing control)">
                <PieListItem selectionType="switch" primaryText="Email" secondaryText="Order updates and receipts">
                    <PieSwitch slot="trailing" name="email" checked={trailingSettings.email} onChange={handleChange(setTrailingSettings, 'email')} />
                </PieListItem>
                <PieListItem selectionType="switch" primaryText="Push notifications" secondaryText="Offers and reminders">
                    <PieSwitch slot="trailing" name="push" checked={trailingSettings.push} onChange={handleChange(setTrailingSettings, 'push')} />
                </PieListItem>
                <PieListItem selectionType="switch" disabled primaryText="SMS" secondaryText="Currently unavailable">
                    <PieSwitch slot="trailing" name="sms" checked={trailingSettings.sms} disabled onChange={handleChange(setTrailingSettings, 'sms')} />
                </PieListItem>
                <PieListItem selectionType="switch" primaryText="Post" secondaryText="Paper statements">
                    <PieSwitch slot="trailing" name="post" checked={trailingSettings.post} onChange={handleChange(setTrailingSettings, 'post')} />
                </PieListItem>
            </PieList>

            <PieButton>Some focusable element after trailing switch list</PieButton>

            <h2 id="switch-leading-heading" style={{ padding: '8px 0' }}>Notification settings - leading control</h2>
            <p>Enabled: {summarise(leadingSettings)}</p>
            <PieList aria-label="Notification settings (leading control)">
                <PieListItem selectionType="switch" primaryText="Email" secondaryText="Order updates and receipts">
                    <PieSwitch slot="leading" name="email" checked={leadingSettings.email} onChange={handleChange(setLeadingSettings, 'email')} />
                </PieListItem>
                <PieListItem selectionType="switch" primaryText="Push notifications" secondaryText="Offers and reminders">
                    <PieSwitch slot="leading" name="push" checked={leadingSettings.push} onChange={handleChange(setLeadingSettings, 'push')} />
                </PieListItem>
                <PieListItem selectionType="switch" disabled primaryText="SMS" secondaryText="Currently unavailable">
                    <PieSwitch slot="leading" name="sms" checked={leadingSettings.sms} disabled onChange={handleChange(setLeadingSettings, 'sms')} />
                </PieListItem>
                <PieListItem selectionType="switch" primaryText="Post" secondaryText="Paper statements">
                    <PieSwitch slot="leading" name="post" checked={leadingSettings.post} onChange={handleChange(setLeadingSettings, 'post')} />
                </PieListItem>
            </PieList>

            <PieButton>Some focusable element after leading switch list</PieButton>

        </NavigationLayout>
    );
}
