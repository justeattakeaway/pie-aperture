<template>
  <div>
    <pie-toast-provider
      :options="toastOptions"
      :position="selectedPosition"
      @pie-toast-provider-queue-update="handleQueueUpdate" />

    <pie-tag
      data-test-id="toast-queue-length"
      variant="information"
      style="margin-top: var(--dt-spacing-d);">
      Toast Queue Length: {{ queueLength }}
    </pie-tag>

    <div style="margin-top: var(--dt-spacing-d); display: flex; align-items: center; gap: var(--dt-spacing-d); flex-wrap: wrap;">
        <h3>Position:</h3>
        <pie-chip
            v-for="position in positions"
            :key="position"
            :isSelected="selectedPosition === position"
            @click="selectedPosition = position">
            {{ position }}
        </pie-chip>
    </div>

    <div style="margin-top: var(--dt-spacing-d); display: flex; gap: var(--dt-spacing-d); flex-wrap: wrap;">
      <pie-button data-test-id="info-toast-btn" @click="triggerInfoToast">Trigger Info Toast (Low Priority)</pie-button>
      <pie-button data-test-id="warning-toast-btn" @click="triggerWarningToast">Trigger Warning Toast (Medium
        Priority)</pie-button>
      <pie-button data-test-id="error-toast-btn" @click="triggerErrorToast">Trigger Error Toast (High
        Priority)</pie-button>
      <pie-button data-test-id="clear-toasts-btn" variant="secondary" @click="clearToasts">Clear All Toasts</pie-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { definePageMeta } from '#imports';
import { ref } from 'vue';
import { toaster, positions } from '@justeattakeaway/pie-webc/components/toast-provider.js';
import '@justeattakeaway/pie-webc/components/toast-provider.js';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/tag.js';
import '@justeattakeaway/pie-webc/components/chip.js';

definePageMeta({
  title: 'Toast Provider',
});

const toastOptions = ref({
  isDismissible: true,
  onPieToastOpen: () => console.log('Toast Opened'),
  onPieToastClose: () => console.log('Toast Closed'),
  onPieToastLeadingActionClick: () => console.log('Leading Action Clicked'),
});

const queueLength = ref(0);
const selectedPosition = ref('default');

const handleQueueUpdate = (event: CustomEvent) => {
  queueLength.value = event.detail.length;
};

const triggerInfoToast = () => {
  toaster.create({
    message: 'Low Priority Info',
    variant: 'info',
  });
};

const triggerWarningToast = () => {
  toaster.create({
    message: 'Medium Priority Warning Toast',
    variant: 'warning',
  });
};

const triggerErrorToast = () => {
  toaster.create({
    message: 'High Priority Error Toast',
    variant: 'error',
  });
};

const clearToasts = () => {
  toaster.clearAll();
};
</script>