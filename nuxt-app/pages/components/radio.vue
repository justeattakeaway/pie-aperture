<template>
    <div>
      <pie-radio :checked="checked" value="value" @change="handleRadioChange">
        {{ `checked: ${checked}` }}
      </pie-radio>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';
  import { definePageMeta } from '#imports';
  import '@justeattakeaway/pie-webc/components/radio.js';

  definePageMeta({
      title: 'PIE Radio',
  });

  let checked = ref(false);

  function handleRadioChange() {
    checked.value = !checked.value;
  }

  </script>
