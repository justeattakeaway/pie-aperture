<template>
    <NuxtLayout name="default" :parent-link="{ href: '/components/data-table', label: 'Back to Data Table variants' }">
        <pie-data-table
            :columns="sampleColumns"
            :data="sampleData"
            data-test-id="PieDataTable">
            <pie-data-table-header slot="table-header" heading="PIE Data Table – Table with header" subHeading="Optional subtitle text">
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
import { sampleColumns, sampleData } from '../../../data/sampleTableData';

definePageMeta({
    title: 'DataTable - With Header',
    layout: false,
});
</script>
