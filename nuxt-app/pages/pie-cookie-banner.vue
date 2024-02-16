<template>
  <div>
    <pie-cookie-banner hasPrimaryActionsOnly :locale="enGB" cookieTechnologiesLink="https://justeattakeaway.com"
      cookieStatementLink="https://justeattakeaway.com">
    </pie-cookie-banner>
  </div>
</template>

<script setup lang="ts">
import '@justeattakeaway/pie-cookie-banner';

// TODO: DSW-1710 - Update this to use the TS declaration for locales.
// Currently importing the JSON file directly as a workaround as Nuxt wants import assertions.
import enGB from "@justeattakeaway/pie-cookie-banner/locales/en-gb.json";
</script>
