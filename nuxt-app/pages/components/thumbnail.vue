<template>
    <h3>Default</h3>
    <pie-thumbnail v-bind="props"></pie-thumbnail>
    <pie-divider></pie-divider>
    <h3>Outline</h3>
    <pie-thumbnail variant="outline" v-bind="props"></pie-thumbnail>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/thumbnail.js';
import '@justeattakeaway/pie-webc/components/divider.js';

definePageMeta({
    title: 'Thumbnail',
});

const props = {
    src: 'https://www.pie.design/assets/img/jet-logo-narrow.svg',
    alt: 'JET logo'
};

</script>