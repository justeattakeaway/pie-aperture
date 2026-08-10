'use client';

import NavigationLayout from "@/app/layout/navigation";
import NextLink from "next/link";
import { PieList } from "@justeattakeaway/pie-webc/react/list.js";
import { PieListItem } from "@justeattakeaway/pie-webc/react/list-item.js";

// The slotted anchor is left empty on purpose: `pie-list-item` names it from the item's text.
// Two variants are shown: a raw `<a>` and the Next.js `<Link>` component (which renders an `<a>`
// and forwards the `slot` attribute), so we can confirm both work as the stretched link target.
export default function ListItemLink() {
    return (
        <NavigationLayout title="List Item Link">

            <h2 id="link-anchor-heading" style={{ padding: '8px 0' }}>Link rows (raw anchor)</h2>
            <PieList aria-label="Manage your restaurant (anchor)">
                <PieListItem hasDivider interactionType="link" primaryText="Orders" secondaryText="View and manage live orders" metaText="12 active">
                    <a slot="link" href="#orders"></a>
                </PieListItem>
                <PieListItem hasDivider interactionType="link" primaryText="Menu" secondaryText="Edit items, prices and photos">
                    <a slot="link" href="#menu"></a>
                </PieListItem>
                <PieListItem hasDivider interactionType="link" primaryText="Opening hours" secondaryText="Set your weekly schedule">
                    <a slot="link" href="#opening-hours"></a>
                </PieListItem>
                <PieListItem interactionType="link" primaryText="Payouts" secondaryText="Invoices and bank details" metaText="Weekly">
                    <a slot="link" href="#payouts"></a>
                </PieListItem>
            </PieList>

            <h2 id="link-nextlink-heading" style={{ padding: '8px 0' }}>Link rows (Next.js Link component)</h2>
            <PieList aria-label="Manage your restaurant (Next.js Link)">
                <PieListItem hasDivider interactionType="link" primaryText="Orders" secondaryText="View and manage live orders" metaText="12 active">
                    <NextLink slot="link" href="#orders"></NextLink>
                </PieListItem>
                <PieListItem hasDivider interactionType="link" primaryText="Menu" secondaryText="Edit items, prices and photos">
                    <NextLink slot="link" href="#menu"></NextLink>
                </PieListItem>
                <PieListItem hasDivider interactionType="link" primaryText="Opening hours" secondaryText="Set your weekly schedule">
                    <NextLink slot="link" href="#opening-hours"></NextLink>
                </PieListItem>
                <PieListItem interactionType="link" primaryText="Payouts" secondaryText="Invoices and bank details" metaText="Weekly">
                    <NextLink slot="link" href="#payouts"></NextLink>
                </PieListItem>
            </PieList>

        </NavigationLayout>
    );
}
