<template>
  <div>
    <pie-icon-button>
      <icon-close></icon-close>
    </pie-icon-button>
  </div>
</template>

<script setup lang="ts">
import '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-icons-webc/dist/IconClose.js';
import { definePageMeta } from '#imports';

definePageMeta({
    title: 'PIE Icon Button',
});
</script>
