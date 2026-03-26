<template>
  <div>
    <pie-cookie-banner hasPrimaryActionsOnly language="da" country="dk" cookieTechnologiesLink="https://justeattakeaway.com"
      cookieStatementLink="https://justeattakeaway.com">
    </pie-cookie-banner>
  </div>

  <pie-divider></pie-divider>

  <h2>PIE Cookie - French Canada</h2>
  <pie-cookie-banner hasPrimaryActionsOnly language="fr" country="ca" cookieTechnologiesLink="https://justeattakeaway.com"
    cookieStatementLink="https://justeattakeaway.com">

  <pie-divider></pie-divider>

  <h2>PIE Cookie - English Canada</h2>
  <pie-cookie-banner hasPrimaryActionsOnly language="en" country="ca" cookieTechnologiesLink="https://justeattakeaway.com"
    cookieStatementLink="https://justeattakeaway.com">
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/cookie-banner.js';

definePageMeta({
    title: 'Cookie Banner',
});

</script>