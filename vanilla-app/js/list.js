import '@justeattakeaway/pie-webc/components/list.js';
import '@justeattakeaway/pie-webc/components/list-item.js';
import '@justeattakeaway/pie-webc/components/card.js';
import '@justeattakeaway/pie-webc/components/thumbnail.js';
import '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPlaceholder.js';
import '@justeattakeaway/pie-icons-webc/dist/IconChevronRight.js';
import './utils/navigation.js';
import './shared.js';

document.querySelector('#app').innerHTML = `
    <h2 id="plain-text-list-heading" style="padding: 8px 0;">PIE List - plain text items</h2>
    <pie-card variant="outline">
        <pie-list aria-labelledby="plain-text-list-heading">
            <pie-list-item primaryText="First list item"></pie-list-item>
            <pie-list-item primaryText="Second list item"></pie-list-item>
            <pie-list-item primaryText="Third list item"></pie-list-item>
        </pie-list>
    </pie-card>

    <h2 id="mixed-content-list-heading" style="padding: 8px 0;">PIE List - mixed content</h2>
    <pie-card variant="outline">
        <pie-list aria-labelledby="mixed-content-list-heading">
            <pie-list-item primaryText="Delivery details" is-bold></pie-list-item>
            <pie-list-item primaryText="Estimated time: 25 minutes"></pie-list-item>
            <pie-list-item primaryText="Driver is on the way"></pie-list-item>
        </pie-list>
    </pie-card>

    <h2 id="leading-trailing-list-heading" style="padding: 8px 0;">PIE List - leading & trailing content</h2>
    <pie-card variant="outline">
        <pie-list aria-labelledby="leading-trailing-list-heading">
            <pie-list-item has-media primaryText="Cheeseburger Deluxe" secondaryText="Downtown Burger Co.">
                <pie-thumbnail slot="leading" size="40"></pie-thumbnail>
                <pie-tag slot="trailing">Popular</pie-tag>
            </pie-list-item>
            <pie-list-item primaryText="Track your order" secondaryText="Driver is 5 minutes away">
                <icon-placeholder slot="leading"></icon-placeholder>
                <icon-chevron-right slot="trailing"></icon-chevron-right>
            </pie-list-item>
        </pie-list>
    </pie-card>

    <h2 id="meta-text-list-heading" style="padding: 8px 0;">PIE List - meta text</h2>
    <pie-card variant="outline">
        <pie-list aria-labelledby="meta-text-list-heading">
            <pie-list-item primaryText="Order #48213" secondaryText="Delivered" metaText="2 items"></pie-list-item>
            <pie-list-item primaryText="Order #48198" metaText="£24.50"></pie-list-item>
            <pie-list-item primaryText="Order #48176"></pie-list-item>
        </pie-list>
    </pie-card>
`;
