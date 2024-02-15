<template>
    <div>
        <h1>Nuxt - {{  componentName }}</h1>
        <pie-link href="/">Home Page</pie-link>
        <pie-divider></pie-divider>
        <slot />
    </div>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router';
import { computed } from 'vue';
const route = useRoute();

const componentName = computed(() => {
    const parts = route.path.substring(1).toLowerCase().split('-');
    const formattedParts = parts.map((part, index) => {
        if (part === 'pie') return 'PIE';
        return part.charAt(0).toUpperCase() + part.slice(1);
    });
    return formattedParts.join(' ');
});
</script>
