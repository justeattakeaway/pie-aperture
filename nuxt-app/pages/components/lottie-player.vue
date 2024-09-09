<template>
  <div>
    <pie-lottie-player animationSrc="/animations/courier.json"></pie-lottie-player>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-lottie-player';


definePageMeta({
    title: 'PIE Lottie Player',
});
</script>