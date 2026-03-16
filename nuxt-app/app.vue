<template>
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
import '@justeattakeaway/pie-css';
import '@justeattakeaway/pie-webc/components/link.js';
import '@justeattakeaway/pie-webc/components/divider.js';
</script>

<style lang="scss">
  @font-face {
    font-family: JETSansDigital;
    src: url('https://pie-design-system-cdn.production.jet-external.com/fonts/JETSansDigital-VF-opt.woff2') format("woff2");
    font-weight: 100 1000;
    font-stretch: 25% 151%;
    font-style: oblique 0deg 20deg;
    font-display: swap;
  }

  html {
    background-color: var(--dt-color-container-default);
    height: 100%;
  }

  body {
    font-family: JETSansDigital;
    font-feature-settings: "tnum";
    margin: auto;
    min-height: 100%;
    padding: 16px;
    max-width: 720px;
    color: var(--dt-color-content-default);
  }

  pie-divider {
    display: block;
    margin-block: 2em;
  }
</style>