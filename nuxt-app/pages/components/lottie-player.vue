<template>
  <div>
    <pie-button size="xsmall" @click="handleLoadAnimationClick">
      load another animation
    </pie-button>
    <pie-lottie-player 
      :animationSrc="animationPath"
      :autoPlayDisabled="autoPlayDisabled"
    ></pie-lottie-player>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/lottie-player.js';

const animations = [
    "/animations/preparing.json",
    "/animations/courier.json",
    "/animations/order-confirmed.json",
]

definePageMeta({
    title: 'Lottie Player',
});

let animationIndex = ref(0);
let animationPath = ref(animations[animationIndex.value % animations.length]);
const autoPlayDisabled = ref(false);

function handleLoadAnimationClick () {
  animationIndex.value++;
  animationPath.value = animations[animationIndex.value % animations.length];
}

onMounted(() => {
  const isRunningInPercy = document && document?.location?.search.indexOf('PERCY=true') > -1
  autoPlayDisabled.value = isRunningInPercy ? true : undefined;
});

</script>