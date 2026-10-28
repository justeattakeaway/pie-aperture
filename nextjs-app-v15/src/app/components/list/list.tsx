'use client';

import { type CSSProperties } from "react";
import NavigationLayout from "@/app/layout/navigation";
import { PieList } from '@justeattakeaway/pie-webc/react/list.js';
import { PieListItem } from '@justeattakeaway/pie-webc/react/list-item.js';
import { PieThumbnail } from '@justeattakeaway/pie-webc/react/thumbnail.js';
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';
import { IconPlaceholder } from '@justeattakeaway/pie-icons-webc/dist/react/IconPlaceholder.js';
import { IconChevronRight } from '@justeattakeaway/pie-icons-webc/dist/react/IconChevronRight.js';

export default function List() {
    const inlinePaddingOverride = { '--list-item-inline-padding': 'var(--dt-spacing-64)' } as CSSProperties;

    return (
        <NavigationLayout title="List">
            <h2 id="plain-text-list-heading" style={{ padding: '8px 0' }}>PIE List - plain text items</h2>
            <PieList aria-labelledby="plain-text-list-heading">
                <PieListItem primaryText="First list item" isBold={false} isCompact={false} hasMedia={false} hasDivider />
                <PieListItem primaryText="Second list item" isBold={false} isCompact={false} hasMedia={false} hasDivider />
                <PieListItem primaryText="Third list item" isBold={false} isCompact={false} hasMedia={false} />
            </PieList>

            <h2 id="mixed-content-list-heading" style={{ padding: '8px 0' }}>PIE List - mixed content</h2>
            <PieList aria-labelledby="mixed-content-list-heading">
                <PieListItem primaryText="Delivery details" isBold isCompact={false} hasMedia={false} hasDivider />
                <PieListItem primaryText="Estimated time: 25 minutes" isBold={false} isCompact={false} hasMedia={false} hasDivider />
                <PieListItem primaryText="Driver is on the way" isBold={false} isCompact={false} hasMedia={false} />
            </PieList>

            <h2 id="leading-trailing-list-heading" style={{ padding: '8px 0' }}>PIE List - leading & trailing content</h2>
            <PieList aria-labelledby="leading-trailing-list-heading">
                <PieListItem
                    primaryText="Cheeseburger Deluxe"
                    secondaryText="Downtown Burger Co."
                    hasMedia
                    isBold={false}
                    isCompact={false}
                    hasDivider
                >
                    <PieThumbnail slot="leading" size={40} />
                    <PieTag slot="trailing">Popular</PieTag>
                </PieListItem>
                <PieListItem
                    primaryText="Track your order"
                    secondaryText="Driver is 5 minutes away"
                    isBold={false}
                    isCompact={false}
                    hasMedia={false}
                >
                    <IconPlaceholder slot="leading" />
                    <IconChevronRight slot="trailing" />
                </PieListItem>
            </PieList>

            <h2 id="meta-text-list-heading" style={{ padding: '8px 0' }}>PIE List - meta text</h2>
            <PieList aria-labelledby="meta-text-list-heading">
                <PieListItem
                    primaryText="Order #48213"
                    secondaryText="Delivered"
                    metaText="2 items"
                    isBold={false}
                    isCompact={false}
                    hasMedia={false}
                    hasDivider
                />
                <PieListItem
                    primaryText="Order #48198"
                    metaText="£24.50"
                    isBold={false}
                    isCompact={false}
                    hasMedia={false}
                    hasDivider
                />
                <PieListItem
                    primaryText="Order #48176"
                    isBold={false}
                    isCompact={false}
                    hasMedia={false}
                />
            </PieList>

            <h2 id="long-text-list-heading" style={{ padding: '8px 0' }}>PIE List - long text (wrapping)</h2>
            <PieList aria-labelledby="long-text-list-heading">
                <PieListItem
                    primaryText="This is an intentionally very long list item primary text that is designed to wrap across multiple lines so we can verify how the list item handles vertical growth, line wrapping and spacing when the content far exceeds a single line of text within the available width of the card container."
                    isBold={false}
                    isCompact={false}
                    hasMedia={false}
                    hasDivider
                />
                <PieListItem
                    primaryText="Order summary with an unusually long title that should wrap onto several lines to test how the primary text behaves alongside secondary text and a trailing meta text value"
                    secondaryText="This secondary line is also deliberately long so that both the primary and secondary text wrap, letting us confirm the trailing meta text stays aligned correctly when the item grows tall"
                    metaText="£152.00"
                    isBold={false}
                    isCompact={false}
                    hasMedia={false}
                    hasDivider
                />
                <PieListItem
                    primaryText="A restaurant with a very long name that keeps going and going to force the primary text to wrap next to the leading thumbnail media element"
                    secondaryText="Plus a secondary description that also wraps to test media alignment against multi-line text content"
                    hasMedia
                    isBold={false}
                    isCompact={false}
                >
                    <PieThumbnail slot="leading" size={40} />
                </PieListItem>
            </PieList>

            <h2 id="rtl-list-heading" style={{ padding: '8px 0' }}>PIE List - right-to-left content</h2>
            <PieList dir="rtl" aria-labelledby="rtl-list-heading">
                <PieListItem primaryText="برجر لحم مشوي" isBold={false} isCompact={false} hasMedia={false} hasDivider />
                <PieListItem primaryText="بيتزا مارغريتا" isBold={false} isCompact={false} hasMedia={false} hasDivider />
                <PieListItem
                    primaryText="تفاصيل التوصيل"
                    secondaryText="الوقت المقدر ٢٥ دقيقة"
                    isBold={false}
                    isCompact={false}
                    hasMedia={false}
                    hasDivider
                />
                <PieListItem
                    primaryText="تتبع طلبك"
                    secondaryText="السائق على بعد ٥ دقائق"
                    isBold={false}
                    isCompact={false}
                    hasMedia={false}
                >
                    <IconPlaceholder slot="leading" />
                    <IconChevronRight slot="trailing" />
                </PieListItem>
            </PieList>

            <h2 id="thumbnail-list-heading" style={{ padding: '8px 0' }}>PIE List - slotted thumbnails</h2>
            <PieList aria-labelledby="thumbnail-list-heading">
                <PieListItem primaryText="Cheeseburger Deluxe" secondaryText="Downtown Burger Co." hasMedia hasDivider>
                    <PieThumbnail slot="leading" size={40} backgroundColor="strong" variant="outline" />
                    <PieTag slot="trailing">Popular</PieTag>
                </PieListItem>
                <PieListItem primaryText="Margherita Pizza" hasMedia hasDivider>
                    <PieThumbnail slot="leading" size={40} backgroundColor="strong" variant="outline" />
                </PieListItem>
                <PieListItem primaryText="Veggie Burger" secondaryText="Green Bites" metaText="£8.50" hasMedia hasDivider>
                    <PieThumbnail slot="leading" size={40} backgroundColor="strong" variant="outline" />
                </PieListItem>
                {/* A non-interactive row has no disabled state, so the thumbnail carries `disabled` on its own here. */}
                <PieListItem primaryText="Mushroom Risotto" secondaryText="Out of season" hasMedia>
                    <PieThumbnail slot="trailing" size={40} backgroundColor="strong" variant="outline" disabled />
                </PieListItem>
            </PieList>

            <h2 id="compact-list-heading" style={{ padding: '8px 0' }}>PIE List - compact items (first line alignment)</h2>
            <PieList aria-labelledby="compact-list-heading">
                <PieListItem
                    isCompact
                    primaryText="A compact row whose primary text is long enough to wrap onto more than one line, so the leading and trailing icons can be checked against its first line"
                    hasDivider
                >
                    <IconPlaceholder slot="leading" />
                    <IconChevronRight slot="trailing" />
                </PieListItem>
                <PieListItem
                    isCompact
                    primaryText="A compact row with wrapping primary text and a meta text value that should stay level with the first line"
                    metaText="£12.00"
                    hasDivider
                >
                    <IconPlaceholder slot="leading" />
                </PieListItem>
                <PieListItem
                    isCompact
                    primaryText="A compact row whose primary text wraps next to a trailing tag rather than an icon"
                    hasDivider
                >
                    <PieTag slot="trailing">New</PieTag>
                </PieListItem>
                {/* Meta text is the taller content here, so the row grows and the primary text sits level with the meta text's first line. */}
                <PieListItem
                    isCompact
                    primaryText="Short primary text"
                    metaText="Meta text long enough to wrap onto a second line"
                />
            </PieList>

            <h2 id="padding-override-list-heading" style={{ padding: '8px 0' }}>PIE List - overridden inline padding</h2>
            <PieList aria-labelledby="padding-override-list-heading">
                <PieListItem primaryText="First list item" isBold={false} isCompact={false} hasMedia={false} style={inlinePaddingOverride} hasDivider />
                <PieListItem primaryText="Second list item" isBold={false} isCompact={false} hasMedia={false} style={inlinePaddingOverride} hasDivider />
                <PieListItem primaryText="Third list item" isBold={false} isCompact={false} hasMedia={false} style={inlinePaddingOverride} />
            </PieList>

        </NavigationLayout>
    );
}
