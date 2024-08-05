<template>
  <div>
    <pie-button @click="openModal">Open Modal</pie-button>
    <pie-modal
        heading="Modal Header"
        hasBackButton
        isDismissible
        :isOpen="open"
        leadingActionText="Leading action"
        @pie-modal-close="handleModalClose"
        @pie-modal-back="handleModalClose"
    >
      <p>Modal content</p>
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
