import '@justeattakeaway/pie-webc/components/list.js';
import '@justeattakeaway/pie-webc/components/list-item.js';

import './shared.js';
import './utils/navigation.js';

// The slotted anchor is left empty on purpose: `pie-list-item` names it from the item's text.
document.querySelector('#app').innerHTML = `
    <h2 id="link-anchor-heading" style="padding: 8px 0;">Link rows (anchor)</h2>
    <pie-list aria-label="Manage your restaurant">
        <pie-list-item interactionType="link" primaryText="Orders" secondaryText="View and manage live orders" metaText="12 active">
            <a slot="link" href="#orders"></a>
        </pie-list-item>
        <pie-list-item interactionType="link" primaryText="Menu" secondaryText="Edit items, prices and photos">
            <a slot="link" href="#menu"></a>
        </pie-list-item>
        <pie-list-item interactionType="link" primaryText="Opening hours" secondaryText="Set your weekly schedule">
            <a slot="link" href="#opening-hours"></a>
        </pie-list-item>
        <pie-list-item interactionType="link" primaryText="Payouts" secondaryText="Invoices and bank details" metaText="Weekly">
            <a slot="link" href="#payouts"></a>
        </pie-list-item>
    </pie-list>
`;
