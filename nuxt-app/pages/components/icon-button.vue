<template>
  <div>
    <pie-icon-button>
      <icon-close></icon-close>
    </pie-icon-button>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/icon-button.js';
import { IconClose } from '@justeattakeaway/pie-icons-webc';

definePageMeta({
    title: 'PIE Icon Button',
});
</script>
