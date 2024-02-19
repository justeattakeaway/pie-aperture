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
import { computed } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();
const homePage = computed(() => route.path === '/');
</script>
