<template>
  <div>
      <icon-phone></icon-phone>
      <icon-phone-large></icon-phone-large>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-icons-webc/dist/IconPhone.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPhoneLarge.js';

definePageMeta({
    title: 'PIE Icon',
});
</script>
