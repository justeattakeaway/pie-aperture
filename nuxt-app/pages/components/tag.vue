<template>
  <div>
    <h2>Non-interactive</h2>

    <h3>Default</h3>
    <div class="c-tag-container">
      <pie-tag
        v-for="variant in variants"
        :key="variant"
        :variant="variant">
        {{ variant }}
      </pie-tag>
    </div>

    <h3>Strong</h3>

    <div class="c-tag-container">
      <pie-tag
        v-for="variant in variants"
        :key="variant"
        isStrong
        :variant="variant">
        {{ variant }}
      </pie-tag>
    </div>

    <pie-divider></pie-divider>

    <h2>Interactive</h2>

    <h3>Default</h3>

    <div class="c-tag-container">
      <pie-tag
        v-for="variant in variants"
        :key="variant"
        isInteractive
        :variant="variant">
        {{ variant }}
      </pie-tag>
    </div>

    <h3>Strong</h3>

    <div class="c-tag-container">
      <pie-tag
        v-for="variant in variants"
        :key="variant"
        isInteractive
        isStrong
        :variant="variant">
        {{ variant }}
      </pie-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/tag.js';
import { variants } from '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-webc/components/divider.js';

definePageMeta({
    title: 'Tag',
});
</script>

<style>
.c-tag-container {
  display: flex;
  flex-wrap: wrap;
  gap: var(--dt-spacing-b);
}
</style>