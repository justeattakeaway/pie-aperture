<template>
    <div>
      <pie-radio-group name="favouriteTakeaway" @change="favouriteTakeaway = $event.target.value">
          <pie-form-label>
          Your favourite takeaway is: {{ favouriteTakeaway }}
          </pie-form-label>
          <pie-radio
              value="chinese">
              Chinese
          </pie-radio>
          <pie-radio
              data-test-id="shawarma"
              value="shawarma">
              Shawarma
          </pie-radio>
      </pie-radio-group>
    </div>
  </template>

  <script setup lang="ts">
  import { ref } from 'vue';
  import { definePageMeta } from '#imports';
  import '@justeattakeaway/pie-webc/components/radio.js';
  import '@justeattakeaway/pie-webc/components/radio-group.js';
  import '@justeattakeaway/pie-webc/components/form-label.js';

  definePageMeta({
      title: 'Radio Group',
  });

  const favouriteTakeaway = ref('');
  </script>
