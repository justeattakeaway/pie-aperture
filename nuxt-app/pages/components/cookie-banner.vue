<template>
  <div>
    <pie-cookie-banner hasPrimaryActionsOnly :locale="daDK" cookieTechnologiesLink="https://justeattakeaway.com"
      cookieStatementLink="https://justeattakeaway.com">
    </pie-cookie-banner>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/cookie-banner.js';

definePageMeta({
    title: 'PIE Cookie Banner',
});

// TODO: DSW-1710 - Update this to use the TS declaration for locales.
// Currently importing the JSON file directly as a workaround as Nuxt wants import assertions.
import daDK from '@justeattakeaway/pie-cookie-banner/locales/dk-dk.json';
</script>
