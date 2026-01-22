<template>
    <NuxtLayout name="default" :parent-link="{ href: '/components/data-table', label: 'Back to Data Table variants' }">
        <h2>Table with additional rows and header</h2>
        <p>This example shows how to combine additional rows with a data table header.</p>
        <pie-data-table
            :columns="orderColumns"
            :data="orderData"
            :additionalRows="additionalRows"
            data-test-id="PieDataTable"
        >
            <pie-data-table-header
                slot="table-header"
                heading="Order Summary"
                subHeading="Your current order items"
            >
                <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
                <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
                <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
            </pie-data-table-header>
        </pie-data-table>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/data-table.js';
import '@justeattakeaway/pie-webc/components/data-table-header.js';
import '@justeattakeaway/pie-webc/components/button.js';

definePageMeta({
    title: 'DataTable - Additional Rows with Header',
    layout: false,
});

const orderColumns = [
    { id: 'item', heading: 'Item', accessor: 'item' },
    { id: 'quantity', heading: 'Quantity', accessor: 'quantity', textAlign: 'right' },
    { id: 'unitPrice', heading: 'Unit Price', accessor: 'unitPrice', textAlign: 'right' },
    { id: 'total', heading: 'Total', accessor: 'total', textAlign: 'right' },
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
            { content: 'Subtotal', textAlign: 'right', colSpan: 3 },
            { content: `£${subtotal.toFixed(2)}`, textAlign: 'right' },
        ],
    },
    {
        cells: [
            { content: 'Tax (5%)', textAlign: 'right', colSpan: 3 },
            { content: `£${taxAmount.toFixed(2)}`, textAlign: 'right' },
        ],
    },
    {
        cells: [
            { content: 'Total', textAlign: 'right', colSpan: 3 },
            { content: `£${totalAmount.toFixed(2)}`, textAlign: 'right' },
        ],
    },
];
</script>
