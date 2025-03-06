<template>
        <pie-select></pie-select>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/select.js';

definePageMeta({
    title: 'Select',
});

</script>
