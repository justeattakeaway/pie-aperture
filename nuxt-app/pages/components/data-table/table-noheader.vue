<template>
    <NuxtLayout name="default" :parent-link="{ href: '/components/data-table', label: 'Back to Data Table variants' }">
        <h2>PIE Data Table – Table with no header</h2>
        <pie-data-table
            :columns="sampleColumns"
            :data="sampleData"
            data-test-id="PieDataTable"
        ></pie-data-table>
    </NuxtLayout>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/data-table.js';
import { sampleColumns, sampleData } from '../../../data/sampleTableData';

definePageMeta({
    title: 'DataTable - No Header',
    layout: false,
});
</script>
