<template>
    <div>
        <h2>Data Table Variants</h2>
        <ul>
            <li><pie-link href="/components/data-table/table-noheader">Data Table - No Header</pie-link></li>
            <li><pie-link href="/components/data-table/table-withheader">Data Table - With Header</pie-link></li>
            <li><pie-link href="/components/data-table/table-additionalrows">Data Table - Additional Rows</pie-link></li>
            <li><pie-link href="/components/data-table/table-additionalrows-withheader">Data Table - Additional Rows with Header</pie-link></li>
            <li><pie-link href="/components/data-table/table-usessubcomponents">Data Table - Uses Subcomponents</pie-link></li>
        </ul>
    </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/link.js';

definePageMeta({
    title: 'DataTable',
});
</script>
