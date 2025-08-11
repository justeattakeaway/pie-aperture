<template>
  <div>
    <pie-form-label optional="Optional" trailing="X out of X">Label</pie-form-label>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/form-label.js';

definePageMeta({
    title: 'Form Label',
});
</script>
