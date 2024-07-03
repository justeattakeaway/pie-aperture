<template>
  <div>
    <pie-button @click="openModal">Open Modal</pie-button>
    <pie-modal
        heading="Modal Header"
        v-if="isMounted"
        hasBackButton
        isDismissible
        :isOpen="open ? open : undefined"
        :leadingAction="leadingAction"
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

let open = ref(true);
const isMounted = ref(false);

function openModal() {
  open.value = true;
}

function handleModalClose() {
  open.value = false;
}

const leadingAction = {
  text: 'Leading action',
};

// Ensure client-side rendering
onMounted(() => {
  isMounted.value = true;
});

</script>
