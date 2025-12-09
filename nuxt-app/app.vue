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
        src: url('https://pie-design-system-cdn.production.jet-external.com/fonts/JETSansDigital-VF-optimised-extended.woff2') format("woff2");
        font-weight: 100 1000;
        font-stretch: 25% 151%;
        font-style: oblique 0deg 20deg;
        font-display: swap;
    }

    @font-face {
        font-family: PTMono;
        src: url('https://d30v2pzvrfyzpo.cloudfront.net/fonts/PTMono-Regular.ttf') format("truetype");
        font-weight: 400;
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
