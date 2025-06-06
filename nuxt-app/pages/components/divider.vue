<template>
  <div class="divider-container">
    <span>Span before divider</span>
    <pie-divider label="Horizontal Divider"/>
    <span>Span after divider</span>
  </div>
  <div class="divider-container divider-container-flex">
    <span>Span before divider</span>
    <pie-divider orientation="vertical"/>
    <span>Span after divider</span>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/divider.js';

definePageMeta({
    title: 'Divider',
});
</script>

<style>
.divider-container {
    height: 200px;
    margin: 100px 0;
}

.divider-container-flex {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: var(--dt-spacing-d);
}
</style>
