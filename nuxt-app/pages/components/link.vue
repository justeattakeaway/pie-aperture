<template>
  <div>
    <pie-link href="https://www.pie.design">
      Visit pie.design
    </pie-link>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-link';

definePageMeta({
    title: 'PIE Link',
});
</script>