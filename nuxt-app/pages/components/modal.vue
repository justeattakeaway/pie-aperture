<template>
  <div>
    <pie-button @click="openModal">Open Modal</pie-button>
    <pie-modal
        v-if="open"
        heading="Modal Header"
        hasBackButton
        isDismissible
        :leadingAction="leadingAction"
        :isOpen="open"
        @pie-modal-close="handleModalClose"
        @pie-modal-back="handleModalClose"
    >
      <p>Modal content</p>
    </pie-modal>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/modal.js';

definePageMeta({
    title: 'PIE Modal',
});

let open = ref(false);

onMounted(() => {
  openModal();
});

function openModal() {
  open.value = true;
}

function handleModalClose() {
  open.value = false;
}

const leadingAction = {
  text: 'Leading action',
};

</script>
