<template>
  <div>
    <pie-cookie-banner hasPrimaryActionsOnly language="en" country="ca" cookieTechnologiesLink="https://justeattakeaway.com"
      cookieStatementLink="https://justeattakeaway.com">
    </pie-cookie-banner>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/cookie-banner.js';

definePageMeta({
    title: 'Cookie Banner',
});

</script>
