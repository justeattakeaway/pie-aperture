<template>
  <h1>Nuxt - PIE Modal</h1>
  <pie-link href="/">Home Page</pie-link>

  <pie-divider></pie-divider>

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
</template>

<script setup lang="ts">
  import '@justeattakeaway/pie-button';
  import '@justeattakeaway/pie-divider';
  import '@justeattakeaway/pie-link';
  import '@justeattakeaway/pie-modal';
  import { ref } from 'vue';

  let open = ref(false);

  function openModal() {
    open.value = true;
  }

  function handleModalClose() {
    open.value = false;
  }

</script>
