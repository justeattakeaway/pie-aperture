<template>
  <div>
    <pie-button size="xsmall" @click="handleLoadAnimationClick">
      load another animation
    </pie-button>
    <pie-lottie-player :animationSrc="animationPath"></pie-lottie-player>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-lottie-player';

const animations = [
    "/animations/preparing.json",
    "/animations/courier.json",
    "/animations/order-confirmed.json",
]

definePageMeta({
    title: 'PIE Lottie Player',
});

let animationIndex = ref(0);
let animationPath = ref(animations[animationIndex.value % animations.length]);

function handleLoadAnimationClick () {
  animationIndex.value++;
  animationPath.value = animations[animationIndex.value % animations.length];
}

</script>