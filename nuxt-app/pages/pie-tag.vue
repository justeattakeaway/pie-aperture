<template>
  <div>
    <pie-tag variant="brand" size="large">Label</pie-tag>

    <pie-divider></pie-divider>
  </div>
</template>

<script setup lang="ts">
import '@justeattakeaway/pie-tag';
import { definePageMeta } from '#imports';

definePageMeta({
    title: 'PIE Tag',
});
</script>
