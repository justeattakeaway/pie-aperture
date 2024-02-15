<template>
  <h1>Nuxt - PIE Chip</h1>
  
  <pie-link href="/">Home Page</pie-link>
  
  <pie-divider></pie-divider>
  <pie-chip>PIE Chip Default</pie-chip>
  
  <pie-divider></pie-divider>
  <pie-chip variant="outline">PIE Chip Outline</pie-chip>
    
  <pie-divider></pie-divider>
  <pie-chip variant="ghost">PIE Chip Ghost</pie-chip>
  
  <pie-divider></pie-divider>
</template>

<script setup lang="ts">
  import '@justeattakeaway/pie-chip';
  import '@justeattakeaway/pie-divider';
  import '@justeattakeaway/pie-link';
</script>
