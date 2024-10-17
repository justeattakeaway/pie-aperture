<template>
  <div>
    <pie-textarea value="foo"></pie-textarea>
    <pie-divider></pie-divider>
    <pie-textarea resize="manual" value="foo"></pie-textarea>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/textarea.js';
import '@justeattakeaway/pie-webc/components/divider.js';

definePageMeta({
  title: 'Textarea',
});
</script>
