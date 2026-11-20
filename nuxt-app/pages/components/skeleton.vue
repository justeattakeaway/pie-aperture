<template>
  <div>
    <pie-skeleton></pie-skeleton>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/skeleton.js';

definePageMeta({
    title: 'Skeleton',
});
</script>
