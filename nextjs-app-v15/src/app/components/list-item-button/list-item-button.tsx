'use client';

import { useState } from "react";
import NavigationLayout from "@/app/layout/navigation";
import { PieList } from "@justeattakeaway/pie-webc/react/list.js";
import { PieListItem } from "@justeattakeaway/pie-webc/react/list-item.js";
import { PieTag } from "@justeattakeaway/pie-webc/react/tag.js";
import { PieThumbnail } from "@justeattakeaway/pie-webc/react/thumbnail.js";
import { IconPlaceholder } from "@justeattakeaway/pie-icons-webc/dist/react/IconPlaceholder.js";
import { IconChevronRight } from "@justeattakeaway/pie-icons-webc/dist/react/IconChevronRight.js";

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

            {/*
              * A button row has no group to propagate from, so each slotted component must be
              * disabled explicitly: `disabled` on the thumbnail and `isDimmed` on the tag. The
              * third row is enabled for comparison.
              */}
            <h2 id="button-disabled-thumbnail-heading" style={{ padding: '8px 0' }}>Disabled button rows with thumbnail (disabled set explicitly)</h2>
            <PieList aria-labelledby="button-disabled-thumbnail-heading">
                <PieListItem interactionType="button" disabled hasMedia primaryText="Cheeseburger Deluxe" secondaryText="Downtown Burger Co." hasDivider onClick={() => setLastAction('Cheeseburger Deluxe')}>
                    <PieThumbnail slot="leading" size={40} backgroundColor="strong" variant="outline" disabled />
                    <PieTag slot="trailing" isDimmed>Out of stock</PieTag>
                </PieListItem>
                <PieListItem interactionType="button" disabled hasMedia primaryText="Mushroom Risotto" secondaryText="Out of season" metaText="£8.50" hasDivider onClick={() => setLastAction('Mushroom Risotto')}>
                    <PieThumbnail slot="leading" size={40} backgroundColor="strong" variant="outline" disabled />
                </PieListItem>
                <PieListItem interactionType="button" hasMedia primaryText="Margherita Pizza" secondaryText="City Pizza Co." hasDivider onClick={() => setLastAction('Margherita Pizza')}>
                    <PieThumbnail slot="leading" size={40} backgroundColor="strong" variant="outline" />
                    <PieTag slot="trailing">New</PieTag>
                </PieListItem>
                <PieListItem interactionType="button" disabled hasMedia primaryText="Veggie Burger" secondaryText="Green Bites" onClick={() => setLastAction('Veggie Burger')}>
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" disabled />
                </PieListItem>
            </PieList>

            {/* Slotted icons are dimmed by the item itself when the row is disabled, so they need no explicit prop. */}
            <h2 id="button-disabled-icon-heading" style={{ padding: '8px 0' }}>Disabled button rows with slotted icons</h2>
            <PieList aria-labelledby="button-disabled-icon-heading">
                <PieListItem interactionType="button" disabled primaryText="Edit profile" secondaryText="Update your name and photo" hasDivider onClick={() => setLastAction('Edit profile')}>
                    <IconPlaceholder slot="leading" />
                    <IconChevronRight slot="trailing" />
                </PieListItem>
                <PieListItem interactionType="button" disabled primaryText="Change password" secondaryText="Keep your account secure" hasDivider onClick={() => setLastAction('Change password')}>
                    <IconPlaceholder slot="leading" />
                    <IconChevronRight slot="trailing" />
                </PieListItem>
                <PieListItem interactionType="button" primaryText="Notification preferences" secondaryText="Choose what we email you about" hasDivider onClick={() => setLastAction('Notification preferences')}>
                    <IconPlaceholder slot="leading" />
                    <IconChevronRight slot="trailing" />
                </PieListItem>
                <PieListItem interactionType="button" disabled primaryText="Sign out" secondaryText="End your session on this device" onClick={() => setLastAction('Sign out')}>
                    <IconPlaceholder slot="leading" />
                    <IconChevronRight slot="trailing" />
                </PieListItem>
            </PieList>

        </NavigationLayout>
    );
}
