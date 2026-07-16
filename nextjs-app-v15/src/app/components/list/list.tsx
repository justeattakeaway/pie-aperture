'use client';

import { type CSSProperties } from "react";
import NavigationLayout from "@/app/layout/navigation";
import { PieList } from '@justeattakeaway/pie-webc/react/list.js';
import { PieListItem } from '@justeattakeaway/pie-webc/react/list-item.js';
import { PieCard } from '@justeattakeaway/pie-webc/react/card.js';
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
                    <PieListItem primaryText="First list item" isBold={false} isCompact={false} hasMedia={false} />
                    <PieListItem primaryText="Second list item" isBold={false} isCompact={false} hasMedia={false} />
                    <PieListItem primaryText="Third list item" isBold={false} isCompact={false} hasMedia={false} />
                </PieList>


            <h2 id="mixed-content-list-heading" style={{ padding: '8px 0' }}>PIE List - mixed content</h2>
            <PieCard variant="outline">
                <PieList aria-labelledby="mixed-content-list-heading">
                    <PieListItem primaryText="Delivery details" isBold isCompact={false} hasMedia={false} />
                    <PieListItem primaryText="Estimated time: 25 minutes" isBold={false} isCompact={false} hasMedia={false} />
                    <PieListItem primaryText="Driver is on the way" isBold={false} isCompact={false} hasMedia={false} />
                </PieList>
            </PieCard>

            <h2 id="leading-trailing-list-heading" style={{ padding: '8px 0' }}>PIE List - leading & trailing content</h2>
            <PieCard variant="outline">
                <PieList aria-labelledby="leading-trailing-list-heading">
                    <PieListItem
                        primaryText="Cheeseburger Deluxe"
                        secondaryText="Downtown Burger Co."
                        hasMedia
                        isBold={false}
                        isCompact={false}
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
            </PieCard>

            <h2 id="meta-text-list-heading" style={{ padding: '8px 0' }}>PIE List - meta text</h2>
            <PieCard variant="outline">
                <PieList aria-labelledby="meta-text-list-heading">
                    <PieListItem
                        primaryText="Order #48213"
                        secondaryText="Delivered"
                        metaText="2 items"
                        isBold={false}
                        isCompact={false}
                        hasMedia={false}
                    />
                    <PieListItem
                        primaryText="Order #48198"
                        metaText="£24.50"
                        isBold={false}
                        isCompact={false}
                        hasMedia={false}
                    />
                    <PieListItem
                        primaryText="Order #48176"
                        isBold={false}
                        isCompact={false}
                        hasMedia={false}
                    />
                </PieList>
            </PieCard>

            <h2 id="long-text-list-heading" style={{ padding: '8px 0' }}>PIE List - long text (wrapping)</h2>
            <PieCard variant="outline">
                <PieList aria-labelledby="long-text-list-heading">
                    <PieListItem
                        primaryText="This is an intentionally very long list item primary text that is designed to wrap across multiple lines so we can verify how the list item handles vertical growth, line wrapping and spacing when the content far exceeds a single line of text within the available width of the card container."
                        isBold={false}
                        isCompact={false}
                        hasMedia={false}
                    />
                    <PieListItem
                        primaryText="Order summary with an unusually long title that should wrap onto several lines to test how the primary text behaves alongside secondary text and a trailing meta text value"
                        secondaryText="This secondary line is also deliberately long so that both the primary and secondary text wrap, letting us confirm the trailing meta text stays aligned correctly when the item grows tall"
                        metaText="£152.00"
                        isBold={false}
                        isCompact={false}
                        hasMedia={false}
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
            </PieCard>

            <h2 id="rtl-list-heading" style={{ padding: '8px 0' }}>PIE List - right-to-left content</h2>
            <PieCard variant="outline">
                <PieList dir="rtl" aria-labelledby="rtl-list-heading">
                    <PieListItem primaryText="برجر لحم مشوي" isBold={false} isCompact={false} hasMedia={false} />
                    <PieListItem primaryText="بيتزا مارغريتا" isBold={false} isCompact={false} hasMedia={false} />
                    <PieListItem
                        primaryText="تفاصيل التوصيل"
                        secondaryText="الوقت المقدر ٢٥ دقيقة"
                        isBold={false}
                        isCompact={false}
                        hasMedia={false}
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
            </PieCard>

            <h2 id="padding-override-list-heading" style={{ padding: '8px 0' }}>PIE List - overridden inline padding</h2>
            <PieCard variant="outline">
                <PieList aria-labelledby="padding-override-list-heading">
                    <PieListItem primaryText="First list item" isBold={false} isCompact={false} hasMedia={false} style={inlinePaddingOverride} />
                    <PieListItem primaryText="Second list item" isBold={false} isCompact={false} hasMedia={false} style={inlinePaddingOverride} />
                    <PieListItem primaryText="Third list item" isBold={false} isCompact={false} hasMedia={false} style={inlinePaddingOverride} />
                </PieList>
            </PieCard>
        </NavigationLayout>
    );
}
