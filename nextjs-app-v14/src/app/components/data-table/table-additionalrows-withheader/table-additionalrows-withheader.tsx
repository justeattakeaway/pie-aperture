'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieDataTable } from '@justeattakeaway/pie-webc/react/data-table.js';
import { PieDataTableHeader } from '@justeattakeaway/pie-webc/react/data-table-header.js';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';

const orderColumns = [
    { id: 'item', heading: 'Item', accessor: 'item' },
    { id: 'quantity', heading: 'Quantity', accessor: 'quantity', textAlign: 'right' as const },
    { id: 'unitPrice', heading: 'Unit Price', accessor: 'unitPrice', textAlign: 'right' as const },
    { id: 'total', heading: 'Total', accessor: 'total', textAlign: 'right' as const },
];

const orderData = [
    { item: 'Margherita Pizza', quantity: 2, unitPrice: '£12.99', total: '£25.98' },
    { item: 'Pepperoni Pizza', quantity: 1, unitPrice: '£14.99', total: '£14.99' },
    { item: 'Garlic Bread', quantity: 3, unitPrice: '£4.50', total: '£13.50' },
    { item: 'Caesar Salad', quantity: 2, unitPrice: '£7.99', total: '£15.98' },
    { item: 'Soft Drinks', quantity: 4, unitPrice: '£2.50', total: '£10.00' },
];

const subtotal = 80.45;
const taxRate = 0.05;
const taxAmount = subtotal * taxRate;
const totalAmount = subtotal + taxAmount;

const additionalRows = [
    {
        cells: [
            { content: 'Subtotal', textAlign: 'right' as const, colSpan: 3 },
            { content: `£${subtotal.toFixed(2)}`, textAlign: 'right' as const },
        ],
    },
    {
        cells: [
            { content: 'Tax (5%)', textAlign: 'right' as const, colSpan: 3 },
            { content: `£${taxAmount.toFixed(2)}`, textAlign: 'right' as const },
        ],
    },
    {
        cells: [
            { content: 'Total', textAlign: 'right' as const, colSpan: 3 },
            { content: `£${totalAmount.toFixed(2)}`, textAlign: 'right' as const },
        ],
    },
];

export default function TableAdditionalRowsWithHeader() {
    return (
        <NavigationLayout
            title="DataTable - Additional Rows with Header"
            parentLink={{ href: '/components/data-table', label: 'Back to Data Table variants' }}
        >
            <h2>Table with additional rows and header</h2>
            <p>This example shows how to combine additional rows with a data table header.</p>
            <PieDataTable
                columns={orderColumns}
                data={orderData}
                additionalRows={additionalRows}
                data-test-id="PieDataTable"
            >
                <PieDataTableHeader
                    slot="table-header"
                    heading="Order Summary"
                    subHeading="Your current order items"
                >
                    <PieButton slot="action-button" variant="secondary" size="xsmall">Action</PieButton>
                    <PieButton slot="action-button" variant="secondary" size="xsmall">Action</PieButton>
                    <PieButton slot="action-button" variant="secondary" size="xsmall">Action</PieButton>
                </PieDataTableHeader>
            </PieDataTable>
        </NavigationLayout>
    );
}
