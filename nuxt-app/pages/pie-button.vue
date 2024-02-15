<template>
  <div>
    <h1>Nuxt - PIE Button</h1>

    <pie-link href="/">Home Page</pie-link>

    <pie-divider></pie-divider>
    <pie-button @click="setCounter">
      Counter: {{ counter }}
    </pie-button>
    <pie-divider></pie-divider>
  </div>
</template>

<script setup lang="ts">
import '@justeattakeaway/pie-button';
import '@justeattakeaway/pie-divider';
import '@justeattakeaway/pie-link';

import { ref } from 'vue';

let counter = ref(0);

function setCounter() {
  counter.value++;
}
</script>
