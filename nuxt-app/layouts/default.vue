<template>
    <div>
        <h1>Nuxt - {{  route.meta.title }}</h1>
        <pie-link v-if="!homePage" href="/">Home Page</pie-link>
        <template v-if="parentLink">
            &nbsp;| <pie-link :href="parentLink.href">{{ parentLink.label }}</pie-link>
        </template>
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

interface ParentLink {
    href: string;
    label: string;
}

defineProps<{
    parentLink?: ParentLink;
}>();

const route = useRoute();

useHead({
    title: route.meta.title || 'PIE Aperture'
});

const homePage = computed(() => route.path === '/');
</script>
