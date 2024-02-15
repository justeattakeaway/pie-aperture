<template>
    <h1>Nuxt - PIE Assistive Text</h1>

    <pie-link href="/">Home Page</pie-link>

    <pie-divider></pie-divider>

    <pie-assistive-text>Assistive Text Default</pie-assistive-text>
    <pie-assistive-text variant="success">Assistive Text Success</pie-assistive-text>
    <pie-assistive-text variant="error">Assistive Text Error</pie-assistive-text>

    <pie-divider></pie-divider>
</template>

<script setup lang="ts">
import '@justeattakeaway/pie-assistive-text';
import '@justeattakeaway/pie-divider';
import '@justeattakeaway/pie-link';
</script>
