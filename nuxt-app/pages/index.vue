<template>
      <h1>Nuxt - PIE Aperture - Amplify - test</h1>
      <NuxtLink to="/form">Form page</NuxtLink>

      <h2>PIE Button</h2>
      <pie-button @click="setCounter">
        Counter: {{ counter }}
      </pie-button>

      <pie-divider></pie-divider>

      <h2>PIE Icon Button</h2>
      <pie-icon-button>
        <icon-close></icon-close>
      </pie-icon-button>

      <pie-divider></pie-divider>

      <h2>PIE Switch</h2>
      <pie-switch
        :label="`checked: ${checked}`"
        :checked="checked"
        @change="handleSwitchChange"
      ></pie-switch>

      <pie-divider></pie-divider>

      <h2>PIE Link</h2>
      <pie-link href="https://www.pie.design" target="_blank">Visit pie.design</pie-link>

      <pie-divider></pie-divider>

      <h2>PIE Spinner</h2>
      <pie-spinner></pie-spinner>

      <pie-divider></pie-divider>

      <h2>PIE Card</h2>
      <pie-card>
        <h2>Title</h2>
        <p>Test card</p>
      </pie-card>

      <pie-divider></pie-divider>

      <h2>PIE Modal</h2>
      <pie-button @click="openModal">Open Modal</pie-button>
      <pie-modal
        :isOpen="open ? open : undefined"
        hasBackButton
        isDismissible
        heading="Modal Header"
        @pie-modal-close="handleModalClose"
        @pie-modal-back="handleModalClose">
        <p>Modal</p>
      </pie-modal>

      <pie-divider></pie-divider>

      <h2>PIE Form Label</h2>
      <pie-form-label>Label</pie-form-label>

      <pie-cookie-banner
        hasPrimaryActionsOnly
        :locale="enGB"
        cookieTechnologiesLink="https://justeattakeaway.com"
        cookieStatementLink="https://justeattakeaway.com"/>

      <pie-divider></pie-divider>

      <h2>PIE Tag</h2>
      <pie-tag variant="brand" size="large">Label</pie-tag>

      <pie-divider></pie-divider>

      <h2>PIE Assistive Text</h2>
      <pie-assistive-text>Assistive Text</pie-assistive-text>

      <pie-divider></pie-divider>

      <h2>PIE Chip</h2>
      <pie-chip>PIE Chip</pie-chip>
  </template>
  
  <script setup lang="ts">
  import '@justeattakeaway/pie-assistive-text';
  import '@justeattakeaway/pie-button';
  import '@justeattakeaway/pie-card';
  import '@justeattakeaway/pie-chip';
  import '@justeattakeaway/pie-cookie-banner';
  import '@justeattakeaway/pie-form-label';
  import '@justeattakeaway/pie-icon-button';
  import '@justeattakeaway/pie-divider';
  import '@justeattakeaway/pie-link';
  import '@justeattakeaway/pie-modal';
  import '@justeattakeaway/pie-spinner';
  import '@justeattakeaway/pie-switch';
  import '@justeattakeaway/pie-tag';
  
  // TODO: DSW-1710 - Updat this to use the TS declaration for locales.
  // Currently importing the JSON file directly as a workaround as Nuxt wants import assertions.
  import enGB from "@justeattakeaway/pie-cookie-banner/locales/en-gb.json";
  import { IconClose } from '@justeattakeaway/pie-icons-webc';
  import { ref } from 'vue';
  
  let counter = ref(0);
  let checked = ref(false);
  let open = ref(false);

  function setCounter() {
    counter.value++;
  }

  function handleSwitchChange() {
    checked.value = !checked.value;
  }

  function openModal() {
    open.value = true;
  }

  function handleModalClose() {
    open.value = false;
  }

</script>
  