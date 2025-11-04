<template>
  <div>
    <h3>Default</h3>
    <div class="c-tag-container">
      <pie-tag
        v-for="variant in variants"
        :key="variant"
        :variant="variant">
        {{ variant }}
      </pie-tag>

      <pie-tag
        v-for="variant in variants"
        :key="variant"
        :variant="variant"
        hasLeadingIcon>
        <icon-fingerprint slot="icon"></icon-fingerprint>
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
      
      <pie-tag
        v-for="variant in variants"
        :key="variant"
        isStrong
        :variant="variant"
        hasLeadingIcon>
        <icon-fingerprint slot="icon"></icon-fingerprint>
        {{ variant }}
      </pie-tag>
    </div>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/tag.js';
import { variants } from '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-icons-webc/dist/IconFingerprint.js';

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