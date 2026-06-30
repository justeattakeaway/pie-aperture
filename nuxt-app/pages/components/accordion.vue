<template>
  <div>
    <pie-accordion
      headingLabel="What is PIE?"
      :isOpen="isFirstOpen"
      @pie-accordion-toggle="handleFirstToggle"
    >
      <icon-pie slot="icon" size="m"></icon-pie>
      PIE is the design system used across Just Eat Takeaway products. It provides a consistent set of components and styles.
    </pie-accordion>

    <pie-accordion
      headingLabel="How do I get started?"
      secondaryLabel="Installation and setup guide"
      :isOpen="isSecondOpen"
      :isDividerHidden="true"
      @pie-accordion-toggle="handleSecondToggle"
    >
      <icon-rocket-ship slot="icon" size="m"></icon-rocket-ship>
      Install the pie-webc package and import the components you need. See the documentation for more details.
    </pie-accordion>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/accordion.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPie.js';
import '@justeattakeaway/pie-icons-webc/dist/IconRocketShip.js';

definePageMeta({
    title: 'Accordion',
});

const isFirstOpen = ref(true);
const isSecondOpen = ref(false);

function handleFirstToggle(event: CustomEvent) {
    isFirstOpen.value = !event.detail.isOpen;
}

function handleSecondToggle(event: CustomEvent) {
    isSecondOpen.value = !event.detail.isOpen;
}
</script>
