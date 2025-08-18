<template>
    <div>
        <h2>PIE Data Table – Table with no header</h2>
        <pie-data-table
            :columns="sampleColumns"
            :data="sampleData"
            data-test-id="pie-data-table"
        ></pie-data-table>

        <pie-divider></pie-divider>

        <pie-data-table
            :columns="sampleColumns"
            :data="sampleData"
            data-test-id="PieDataTable">
            <pie-data-table-header slot="table-header" title="PIE Data Table – Table with header" subtitle="Optional subtitle text">
                <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
                <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
                <pie-button slot="action-button" variant="secondary" size="xsmall">Action</pie-button>
            </pie-data-table-header>
        </pie-data-table>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/data-table.js';
import '@justeattakeaway/pie-webc/components/data-table-header.js';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import { sampleColumns, sampleData } from '../../data/sampleTableData';

definePageMeta({
    title: 'DataTable',
});
</script>
