<template>
  <div>
    <pie-button @click="setCounter">
      Counter: {{ counter }}
    </pie-button>
  </div>
</template>

<script setup lang="ts">
import '@justeattakeaway/pie-button';
import { ref } from 'vue';
import { definePageMeta } from '#imports';

definePageMeta({
    title: 'PIE Button',
});

let counter = ref(0);

function setCounter() {
  counter.value++;
}
</script>
