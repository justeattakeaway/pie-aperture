<template>
  <div>
    <h1>Nuxt - PIE Icon Button</h1>

    <pie-link href="/">Home Page</pie-link>

    <pie-divider></pie-divider>
    <pie-icon-button>
      <icon-close></icon-close>
    </pie-icon-button>
    <pie-divider></pie-divider>
  </div>
</template>

<script setup lang="ts">
import '@justeattakeaway/pie-icon-button';
import '@justeattakeaway/pie-divider';
import '@justeattakeaway/pie-link';
import { IconClose } from '@justeattakeaway/pie-icons-webc';
</script>
