<template>
    <div>
        <h2>Data Table Variants</h2>
        <ul>
            <li><pie-link href="/components/data-table/table-noheader">Table - No Header</pie-link></li>
            <li><pie-link href="/components/data-table/table-withheader">Table - With Header</pie-link></li>
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
