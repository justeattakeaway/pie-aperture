<template>
    <div>
        <h1>Nuxt - {{  route.meta.title }}</h1>
        <pie-link v-if="!homePage" href="/">Home Page</pie-link>
        <pie-divider></pie-divider>
        <slot />
        <pie-divider v-if="!homePage"></pie-divider>
    </div>
</template>

<script setup lang="ts">
import { useHead } from '#imports';
import '@justeattakeaway/pie-webc/components/link.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

useHead({
    title: route.meta.title || 'PIE Aperture'
});

const homePage = computed(() => route.path === '/');
</script>
