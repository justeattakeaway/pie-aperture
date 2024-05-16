<template>
  <div>
    <pie-chip>PIE Chip Default</pie-chip>

    <pie-divider></pie-divider>
    <pie-chip variant="outline">PIE Chip Outline</pie-chip>

    <pie-divider></pie-divider>
    <pie-chip variant="ghost">PIE Chip Ghost</pie-chip>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-chip';

definePageMeta({
    title: 'PIE Chip',
});
</script>
