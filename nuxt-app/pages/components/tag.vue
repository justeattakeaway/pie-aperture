<template>
  <div>
    <pie-tag variant="brand" size="large">Label</pie-tag>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/tag.js';

definePageMeta({
    title: 'PIE Tag',
});
</script>
