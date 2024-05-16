<template>
    <div>
      <h1>PIE Icons Test Page</h1>
      <div class="icon-container">
        <component v-for="icon in icons" :key="icon" :is="icon" />
      </div>
    </div>
</template>
  
<script setup lang="ts">
import * as webcIcons from '@justeattakeaway/pie-icons-webc';
import kebabCase from 'just-kebab-case';

const icons = Object.keys(webcIcons).map(kebabCase);

</script>

<style>
.icon-container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(40px, 1fr));
  gap: var(--dt-spacing-c);
  justify-items: center;
  align-items: center;
}
</style>
