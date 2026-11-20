import type { SelectProps } from '@justeattakeaway/pie-webc/react/select.js';
import type { Column, DataTableAdditionalRow } from '@justeattakeaway/pie-webc/react/data-table.js';
import type { TagProps } from '@justeattakeaway/pie-webc/react/tag.js';
import type { MenuItemRow, Order } from './dashboard-types';

/**
 * Seed data for PIE Hub, a fictional back-office for an artisan pie bakery.
 *
 * Nothing here talks to a real API and none of it describes a real business.
 * Customer names are invented, and every URL uses the IANA-reserved `.example`
 * TLD (RFC 2606), which is guaranteed never to resolve.
 */

export const orders: Order[] = [
    {
        id: 'ord-4821',
        reference: '#4821',
        customer: 'Marnie Ashdown',
        items: 3,
        total: '£24.50',
        channel: 'Delivery',
        placedAt: '19:04',
        status: 'new',
        note: 'Leave with the concierge, please.',
    },
    {
        id: 'ord-4820',
        reference: '#4820',
        customer: 'Devi Halloran',
        items: 1,
        total: '£8.95',
        channel: 'Collection',
        placedAt: '18:58',
        status: 'preparing',
    },
    {
        id: 'ord-4819',
        reference: '#4819',
        customer: 'Tomas Bellweather',
        items: 5,
        total: '£41.20',
        channel: 'Delivery',
        placedAt: '18:47',
        status: 'ready',
        note: 'Extra gravy on the side.',
    },
    {
        id: 'ord-4818',
        reference: '#4818',
        customer: 'Priya Ellwood',
        items: 2,
        total: '£16.00',
        channel: 'Collection',
        placedAt: '18:31',
        status: 'collected',
    },
    {
        id: 'ord-4817',
        reference: '#4817',
        customer: 'Callum Rooke',
        items: 4,
        total: '£33.75',
        channel: 'Delivery',
        placedAt: '18:12',
        status: 'cancelled',
        note: 'Customer cancelled before the bakery accepted.',
    },
];

/**
 * `pie-data-table` renders from a `columns` + `data` pair, so the rows below are
 * plain records rather than the richer `Order` objects used elsewhere.
 */
export const payoutColumns: Column[] = [
    { id: 'week', heading: 'Week commencing', accessor: 'week', width: '30%' },
    { id: 'orders', heading: 'Orders', accessor: 'orders', textAlign: 'right' },
    { id: 'gross', heading: 'Gross', accessor: 'gross', textAlign: 'right' },
    { id: 'commission', heading: 'Commission', accessor: 'commission', textAlign: 'right' },
    { id: 'payout', heading: 'Net payout', accessor: 'payout', textAlign: 'right' },
];

export const payoutRows: Record<string, unknown>[] = [
    { week: '11 Aug 2026', orders: 412, gross: '£8,204.10', commission: '−£1,148.57', payout: '£7,055.53' },
    { week: '4 Aug 2026', orders: 388, gross: '£7,611.45', commission: '−£1,065.60', payout: '£6,545.85' },
    { week: '28 Jul 2026', orders: 401, gross: '£7,988.20', commission: '−£1,118.35', payout: '£6,869.85' },
    { week: '21 Jul 2026', orders: 355, gross: '£6,902.75', commission: '−£966.39', payout: '£5,936.36' },
];

export const payoutTotals: DataTableAdditionalRow[] = [
    {
        cells: [
            { content: 'Last four weeks', textAlign: 'left' },
            { content: 1556, textAlign: 'right' },
            { content: '£30,706.50', textAlign: 'right' },
            { content: '−£4,298.91', textAlign: 'right' },
            { content: '£26,407.59', textAlign: 'right' },
        ],
    },
];

export const menuItems: MenuItemRow[] = [
    {
        id: 'menu-1',
        name: 'Steak and ale pie',
        description: 'Slow-braised shin, stout gravy, suet crust',
        price: '£8.50',
        imageSrc: '/logo.png',
        dietary: [],
        isAvailable: true,
    },
    {
        id: 'menu-2',
        name: 'Wild mushroom and thyme pie',
        description: 'Chestnut mushrooms, thyme, vegan shortcrust',
        price: '£8.95',
        imageSrc: '/logo.png',
        dietary: ['vegan'],
        isAvailable: true,
    },
    {
        id: 'menu-3',
        name: 'Cheese, onion and jalapeño pasty',
        description: 'Mature cheddar, caramelised onion, puff pastry',
        price: '£5.75',
        // Intentionally broken so `pie-thumbnail` shows its placeholder behaviour.
        imageSrc: '/images/this-image-does-not-exist.png',
        dietary: ['vegetarian', 'spicy'],
        isAvailable: false,
    },
];

export const categoryOptions: SelectProps['options'] = [
    { tag: 'option', text: 'Choose a menu section', value: '' },
    {
        tag: 'optgroup',
        label: 'Pies and pastry',
        options: [
            { tag: 'option', text: 'Savoury pies', value: 'savoury-pies' },
            { tag: 'option', text: 'Sweet pies and tarts', value: 'sweet-pies' },
            { tag: 'option', text: 'Pasties and rolls', value: 'pasties' },
        ],
    },
    {
        tag: 'optgroup',
        label: 'Sides and drinks',
        options: [
            { tag: 'option', text: 'Mash and gravy', value: 'mash-and-gravy' },
            { tag: 'option', text: 'Mushy peas', value: 'mushy-peas' },
            { tag: 'option', text: 'Hot drinks', value: 'hot-drinks' },
            { tag: 'option', text: 'Ale (licence required)', value: 'ale', disabled: true },
        ],
    },
];

export const prepTimeOptions: SelectProps['options'] = [
    { tag: 'option', text: '10 minutes', value: '10' },
    { tag: 'option', text: '15 minutes', value: '15', selected: true },
    { tag: 'option', text: '20 minutes', value: '20' },
    { tag: 'option', text: '30 minutes', value: '30' },
];

export const dietaryFilters = [
    { id: 'vegan', label: 'Vegan' },
    { id: 'vegetarian', label: 'Vegetarian' },
    { id: 'spicy', label: 'Spicy' },
    { id: 'offers', label: 'On offer' },
];

export const faqs = [
    {
        id: 'faq-payouts',
        heading: 'When do payouts land?',
        secondary: 'Payment schedule',
        body: 'Payouts are calculated every Monday for the previous trading week and reach your nominated account within two working days.',
    },
    {
        id: 'faq-hours',
        heading: 'How do I change my opening hours?',
        secondary: 'Availability',
        body: 'Open the Availability panel, adjust the schedule and publish. Changes to today’s hours take effect within five minutes.',
    },
    {
        id: 'faq-refunds',
        heading: 'Who pays for a refund?',
        secondary: 'Disputes',
        body: 'Refunds caused by a missing or incorrect pie are charged to the bakery. Refunds caused by a courier delay are covered by PIE Hub.',
    },
];

export const statusTagVariant: Record<Order['status'], TagProps['variant']> = {
    new: 'information',
    preparing: 'warning',
    ready: 'success',
    collected: 'neutral',
    cancelled: 'error',
};

export const statusLabel: Record<Order['status'], string> = {
    new: 'New',
    preparing: 'In the oven',
    ready: 'Ready',
    collected: 'Collected',
    cancelled: 'Cancelled',
};
