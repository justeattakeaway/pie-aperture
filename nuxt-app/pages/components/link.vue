<template>
  <div>
    <pie-link href="https://www.pie.design">
      Visit pie.design
    </pie-link>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/link.js';

definePageMeta({
    title: 'Link',
});
</script>