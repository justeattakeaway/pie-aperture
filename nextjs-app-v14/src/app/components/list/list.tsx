'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieList } from '@justeattakeaway/pie-webc/react/list.js';
import { PieListItem } from '@justeattakeaway/pie-webc/react/list-item.js';
import { PieCard } from '@justeattakeaway/pie-webc/react/card.js';
import { PieThumbnail } from '@justeattakeaway/pie-webc/react/thumbnail.js';
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';
import { IconPlaceholder } from '@justeattakeaway/pie-icons-webc/dist/react/IconPlaceholder.js';
import { IconChevronRight } from '@justeattakeaway/pie-icons-webc/dist/react/IconChevronRight.js';

export default function List() {
    return (
        <NavigationLayout title="List">
            <h2 id="plain-text-list-heading" style={{ padding: '8px 0' }}>PIE List - plain text items</h2>
            <PieCard variant="outline">
                <PieList aria-labelledby="plain-text-list-heading">
                    <PieListItem primaryText="First list item" isBold={false} isCompact={false} hasMedia={false} />
                    <PieListItem primaryText="Second list item" isBold={false} isCompact={false} hasMedia={false} />
                    <PieListItem primaryText="Third list item" isBold={false} isCompact={false} hasMedia={false} />
                </PieList>
            </PieCard>

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
        </NavigationLayout>
    );
}
