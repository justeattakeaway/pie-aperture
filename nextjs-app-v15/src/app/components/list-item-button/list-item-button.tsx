'use client';

import { useState } from "react";
import NavigationLayout from "@/app/layout/navigation";
import { PieList } from "@justeattakeaway/pie-webc/react/list.js";
import { PieListItem } from "@justeattakeaway/pie-webc/react/list-item.js";
import { PieTag } from "@justeattakeaway/pie-webc/react/tag.js";

export default function ListItemButton() {
    const [lastAction, setLastAction] = useState('None');

    return (
        <NavigationLayout title="List Item Button">

            <h2 id="button-heading" style={{ padding: '8px 0' }}>Button rows</h2>
            <p data-test-id="button-activation-status">Last action: {lastAction}</p>
            <PieList data-test-id="button-list" aria-labelledby="button-heading">
                <PieListItem interactionType="button" data-action="Edit profile" primaryText="Edit profile" secondaryText="Update your name and photo" metaText="New" hasDivider onClick={() => setLastAction('Edit profile')} />
                <PieListItem interactionType="button" data-action="Change password" primaryText="Change password" secondaryText="Keep your account secure" hasDivider onClick={() => setLastAction('Change password')} />
                <PieListItem interactionType="button" data-action="Notification preferences" primaryText="Notification preferences" secondaryText="Choose what we email you about" hasDivider onClick={() => setLastAction('Notification preferences')} />
                <PieListItem interactionType="button" data-action="Sign out" primaryText="Sign out" secondaryText="End your session on this device" onClick={() => setLastAction('Sign out')} />
            </PieList>

            <h2 id="button-disabled-heading" style={{ padding: '8px 0' }}>Disabled button rows</h2>
            <PieList data-test-id="button-list-disabled" aria-labelledby="button-disabled-heading">
                <PieListItem interactionType="button" data-action="Edit profile" disabled primaryText="Edit profile" secondaryText="Update your name and photo" metaText="New" hasDivider onClick={() => setLastAction('Edit profile')} />
                <PieListItem interactionType="button" data-action="Change password" disabled primaryText="Change password" secondaryText="Keep your account secure" hasDivider onClick={() => setLastAction('Change password')} />
                <PieListItem interactionType="button" data-action="Notification preferences" disabled primaryText="Notification preferences" secondaryText="Choose what we email you about" hasDivider onClick={() => setLastAction('Notification preferences')} />
                <PieListItem interactionType="button" data-action="Sign out" disabled primaryText="Sign out" secondaryText="End your session on this device" onClick={() => setLastAction('Sign out')} />
            </PieList>

            <h2 id="button-disabled-tag-heading" style={{ padding: '8px 0' }}>Disabled button rows with tag (isDimmed set explicitly)</h2>
            <PieList aria-labelledby="button-disabled-tag-heading">
                <PieListItem interactionType="button" disabled primaryText="Cheeseburger Deluxe" secondaryText="Downtown Burger Co." hasDivider onClick={() => setLastAction('Cheeseburger Deluxe')}>
                    <PieTag slot="trailing" isDimmed>Popular</PieTag>
                </PieListItem>
                <PieListItem interactionType="button" primaryText="Margherita Pizza" secondaryText="City Pizza Co." hasDivider onClick={() => setLastAction('Margherita Pizza')}>
                    <PieTag slot="trailing">New</PieTag>
                </PieListItem>
                <PieListItem interactionType="button" disabled primaryText="Veggie Burger" secondaryText="Green Bites" onClick={() => setLastAction('Veggie Burger')}>
                    <PieTag slot="trailing" isDimmed>Deal</PieTag>
                </PieListItem>
            </PieList>

        </NavigationLayout>
    );
}
