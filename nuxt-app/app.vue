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
  html {
    background-color: var(--dt-color-container-default);
    height: 100%;

    @font-face {
      font-family: JETSansDigital;
      src: url('https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Regular-optimised.woff2') format("woff2"),
        url('https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Regular-optimised.woff') format("woff");
      font-weight: 400;
      font-display: swap;
    }

    @font-face {
      font-family: JETSansDigital;
      src: url('https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Bold-optimised.woff2') format("woff2"),
        url('https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Bold-optimised.woff') format("woff");
      font-weight: 700;
      font-display: swap;
    }
  }

  body {
    font-family: JetSansDigital;
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