<template>
  <div>
    <pie-icon-button>
      <icon-close></icon-close>
    </pie-icon-button>
    <pie-divider></pie-divider>
  </div>
</template>

<script setup lang="ts">
import '@justeattakeaway/pie-icon-button';
import { IconClose } from '@justeattakeaway/pie-icons-webc';
import { definePageMeta } from '#imports';

definePageMeta({
    title: 'PIE Icon Button',
});
</script>
