<template>
  <div>
    <pie-skeleton variant="circle" height="40px"></pie-skeleton>
    <pie-skeleton variant="text" height="font-body-l" lines="3"></pie-skeleton>
    <pie-skeleton variant="star" stars="5"></pie-skeleton>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/skeleton.js';

definePageMeta({
    title: 'Skeleton',
});
</script>
