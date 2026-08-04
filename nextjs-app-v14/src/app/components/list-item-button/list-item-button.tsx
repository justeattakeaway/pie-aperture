'use client';

import { useState } from "react";
import NavigationLayout from "@/app/layout/navigation";
import { PieList } from "@justeattakeaway/pie-webc/react/list.js";
import { PieListItem } from "@justeattakeaway/pie-webc/react/list-item.js";

export default function ListItemButton() {
    const [lastAction, setLastAction] = useState('None');

    return (
        <NavigationLayout title="List Item Button">

            <h2 id="button-heading" style={{ padding: '8px 0' }}>Button rows</h2>
            <p data-test-id="button-activation-status">Last action: {lastAction}</p>
            <PieList data-test-id="button-list" aria-label="Account actions">
                <PieListItem interactionType="button" data-action="Edit profile" primaryText="Edit profile" secondaryText="Update your name and photo" metaText="New" onClick={() => setLastAction('Edit profile')} />
                <PieListItem interactionType="button" data-action="Change password" primaryText="Change password" secondaryText="Keep your account secure" onClick={() => setLastAction('Change password')} />
                <PieListItem interactionType="button" data-action="Notification preferences" primaryText="Notification preferences" secondaryText="Choose what we email you about" onClick={() => setLastAction('Notification preferences')} />
                <PieListItem interactionType="button" data-action="Sign out" primaryText="Sign out" secondaryText="End your session on this device" onClick={() => setLastAction('Sign out')} />
            </PieList>

            <h2 id="button-disabled-heading" style={{ padding: '8px 0' }}>Disabled button rows</h2>
            <PieList data-test-id="button-list-disabled" aria-label="Unavailable account actions">
                <PieListItem interactionType="button" data-action="Edit profile" disabled primaryText="Edit profile" secondaryText="Update your name and photo" metaText="New" onClick={() => setLastAction('Edit profile')} />
                <PieListItem interactionType="button" data-action="Change password" disabled primaryText="Change password" secondaryText="Keep your account secure" onClick={() => setLastAction('Change password')} />
                <PieListItem interactionType="button" data-action="Notification preferences" disabled primaryText="Notification preferences" secondaryText="Choose what we email you about" onClick={() => setLastAction('Notification preferences')} />
                <PieListItem interactionType="button" data-action="Sign out" disabled primaryText="Sign out" secondaryText="End your session on this device" onClick={() => setLastAction('Sign out')} />
            </PieList>

        </NavigationLayout>
    );
}
