<template>
  <div>
    <pie-text-input value="foo">
      <icon-phone slot="leadingIcon"></icon-phone>
    </pie-text-input>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/text-input.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPhone.js';

definePageMeta({
    title: 'Text Input',
});
</script>
