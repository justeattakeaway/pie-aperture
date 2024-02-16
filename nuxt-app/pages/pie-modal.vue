<template>
  <div>
    <pie-button @click="openModal">Open Modal</pie-button>
    <pie-modal :isOpen="open ? open : undefined" hasBackButton isDismissible heading="Modal Header"
      @pie-modal-close="handleModalClose" @pie-modal-back="handleModalClose">
      <p>Modal</p>
    </pie-modal>

    <pie-divider></pie-divider>
  </div>
</template>

<script setup lang="ts">
import '@justeattakeaway/pie-button';
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
