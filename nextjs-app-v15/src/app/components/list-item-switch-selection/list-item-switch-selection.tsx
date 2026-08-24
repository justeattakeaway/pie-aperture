'use client';

import { useState } from "react";
import NavigationLayout from "@/app/layout/navigation";
import { PieList } from "@justeattakeaway/pie-webc/react/list.js";
import { PieListItem } from "@justeattakeaway/pie-webc/react/list-item.js";
import { PieSwitch } from "@justeattakeaway/pie-webc/react/switch.js";
import { PieButton } from "@justeattakeaway/pie-webc/react/button.js";
import { PieTag } from "@justeattakeaway/pie-webc/react/tag.js";
import { PieThumbnail } from "@justeattakeaway/pie-webc/react/thumbnail.js";

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
    const [mediaSettings, setMediaSettings] = useState<Settings>(initialSettings);

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
                <PieListItem interactionType="switch" primaryText="Email" secondaryText="Order updates and receipts" hasDivider>
                    <PieSwitch slot="trailing" name="email" checked={trailingSettings.email} onChange={handleChange(setTrailingSettings, 'email')} />
                </PieListItem>
                <PieListItem interactionType="switch" primaryText="Push notifications" secondaryText="Offers and reminders" hasDivider>
                    <PieSwitch slot="trailing" name="push" checked={trailingSettings.push} onChange={handleChange(setTrailingSettings, 'push')} />
                </PieListItem>
                <PieListItem interactionType="switch" disabled primaryText="SMS" secondaryText="Currently unavailable" hasDivider>
                    <PieTag slot="leading" isDimmed>Unavailable</PieTag>
                    <PieSwitch slot="trailing" name="sms" checked={trailingSettings.sms} disabled onChange={handleChange(setTrailingSettings, 'sms')} />
                </PieListItem>
                <PieListItem interactionType="switch" primaryText="Post" secondaryText="Paper statements">
                    <PieSwitch slot="trailing" name="post" checked={trailingSettings.post} onChange={handleChange(setTrailingSettings, 'post')} />
                </PieListItem>
            </PieList>

            <PieButton>Some focusable element after trailing switch list</PieButton>

            <h2 id="switch-leading-heading" style={{ padding: '8px 0' }}>Notification settings - leading control</h2>
            <p>Enabled: {summarise(leadingSettings)}</p>
            <PieList aria-label="Notification settings (leading control)">
                <PieListItem interactionType="switch" primaryText="Email" secondaryText="Order updates and receipts" hasDivider>
                    <PieSwitch slot="leading" name="email" checked={leadingSettings.email} onChange={handleChange(setLeadingSettings, 'email')} />
                </PieListItem>
                <PieListItem interactionType="switch" primaryText="Push notifications" secondaryText="Offers and reminders" hasDivider>
                    <PieSwitch slot="leading" name="push" checked={leadingSettings.push} onChange={handleChange(setLeadingSettings, 'push')} />
                </PieListItem>
                <PieListItem interactionType="switch" disabled primaryText="SMS" secondaryText="Currently unavailable" hasDivider>
                    <PieSwitch slot="leading" name="sms" checked={leadingSettings.sms} disabled onChange={handleChange(setLeadingSettings, 'sms')} />
                    <PieTag slot="trailing" isDimmed>Unavailable</PieTag>
                </PieListItem>
                <PieListItem interactionType="switch" primaryText="Post" secondaryText="Paper statements">
                    <PieSwitch slot="leading" name="post" checked={leadingSettings.post} onChange={handleChange(setLeadingSettings, 'post')} />
                </PieListItem>
            </PieList>

            <PieButton>Some focusable element after leading switch list</PieButton>

            {/*
              * Switch rows have no container group to propagate a disabled state, so the disabled row
              * sets `disabled` on the item, the switch and the thumbnail, and `isDimmed` on the tag.
              */}
            <h2 id="switch-media-heading" style={{ padding: '8px 0' }}>Notification settings - slotted thumbnail</h2>
            <p>Enabled: {summarise(mediaSettings)}</p>
            <PieList aria-label="Notification settings (slotted thumbnail)">
                <PieListItem interactionType="switch" hasMedia primaryText="Email" secondaryText="Order updates and receipts" hasDivider>
                    <PieThumbnail slot="leading" size={40} backgroundColor="strong" variant="outline" />
                    <PieSwitch slot="trailing" name="email" checked={mediaSettings.email} onChange={handleChange(setMediaSettings, 'email')} />
                </PieListItem>
                <PieListItem interactionType="switch" hasMedia primaryText="Push notifications" secondaryText="Offers and reminders" hasDivider>
                    <PieThumbnail slot="leading" size={40} backgroundColor="strong" variant="outline" />
                    <PieSwitch slot="trailing" name="push" checked={mediaSettings.push} onChange={handleChange(setMediaSettings, 'push')} />
                </PieListItem>
                <PieListItem interactionType="switch" hasMedia disabled primaryText="SMS" secondaryText="Currently unavailable" hasDivider>
                    <PieThumbnail slot="leading" size={40} backgroundColor="strong" variant="outline" disabled />
                    <PieTag slot="trailing" isDimmed>Unavailable</PieTag>
                    <PieSwitch slot="trailing" name="sms" checked={mediaSettings.sms} disabled onChange={handleChange(setMediaSettings, 'sms')} />
                </PieListItem>
                <PieListItem interactionType="switch" hasMedia primaryText="Post" secondaryText="Paper statements">
                    <PieThumbnail slot="leading" size={40} backgroundColor="strong" variant="outline" />
                    <PieSwitch slot="trailing" name="post" checked={mediaSettings.post} onChange={handleChange(setMediaSettings, 'post')} />
                </PieListItem>
            </PieList>

            <PieButton>Some focusable element after slotted thumbnail switch list</PieButton>

        </NavigationLayout>
    );
}
