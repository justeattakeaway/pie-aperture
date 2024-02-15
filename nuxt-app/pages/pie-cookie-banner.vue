<template>
  <h1>Nuxt - PIE Cookie Banner</h1>

  <pie-link href="/">Home Page</pie-link>

  <pie-cookie-banner
    hasPrimaryActionsOnly
    :locale="enGB"
    cookieTechnologiesLink="https://justeattakeaway.com"
    cookieStatementLink="https://justeattakeaway.com">
  </pie-cookie-banner>
</template>

<script setup lang="ts">
  import '@justeattakeaway/pie-cookie-banner';
  import '@justeattakeaway/pie-link';

  // TODO: DSW-1710 - Updat this to use the TS declaration for locales.
  // Currently importing the JSON file directly as a workaround as Nuxt wants import assertions.
  import enGB from "@justeattakeaway/pie-cookie-banner/locales/en-gb.json";
</script>
