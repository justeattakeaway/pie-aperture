<template>
  <div>
    <pie-button @click="openModal">Open Modal</pie-button>
    <pie-modal :isOpen="open ? open : undefined" hasBackButton isDismissible heading="Modal Header"
      @pie-modal-close="handleModalClose" @pie-modal-back="handleModalClose">
      <p>Modal</p>
    </pie-modal>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/modal.js';

definePageMeta({
    title: 'PIE Modal',
});

let open = ref(true);

function openModal() {
  open.value = true;
}

function handleModalClose() {
  open.value = false;
}

</script>
