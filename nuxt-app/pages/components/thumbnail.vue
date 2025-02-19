<template>
    <h3>Default</h3>
    <pie-thumbnail v-bind="props"></pie-thumbnail>
    <pie-divider></pie-divider>
    <h3>Outline</h3>
    <pie-thumbnail variant="outline" v-bind="props"></pie-thumbnail>
    <pie-divider></pie-divider>
    <h3>Default Placeholder</h3>
    <pie-thumbnail v-bind="invalidImageProps"></pie-thumbnail>
    <pie-divider></pie-divider>
    <h3>Custom Placeholder</h3>
    <pie-thumbnail v-bind="invalidImageWithCustomPlaceholderProps"></pie-thumbnail>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/thumbnail.js';
import '@justeattakeaway/pie-webc/components/divider.js';

definePageMeta({
    title: 'Thumbnail',
});

const props = {
    src: 'https://webc.pie.design/static/images/pie-logo.svg',
    alt: 'The PIE design system logo'
};

const invalidImageProps = {
    src: 'invalid-url.com',
    alt: 'Invalid image url',
}

const invalidImageWithCustomPlaceholderProps = {
    ...invalidImageProps,
    placeholder: {
        src: 'https://www.pie.design/assets/img/404_narrow.png',
        alt: 'Thumbnail placeholder image',
    }
}

</script>