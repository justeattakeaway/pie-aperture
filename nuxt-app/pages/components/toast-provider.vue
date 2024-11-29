<template>
    <div>
      <pie-toast-provider
        :options="toastOptions"
        @pie-toast-provider-queue-update="handleQueueUpdate"
      ></pie-toast-provider>
      
      <pie-tag variant="information" style="margin-top: 16px;">
        Toast Queue Length: {{ queueLength }}
      </pie-tag>
  
      <div style="margin-top: 16px; display: flex; gap: 16px; flex-wrap: wrap;">
        <pie-button @click="triggerInfoToast">Trigger Info Toast (Low Priority)</pie-button>
        <pie-button @click="triggerWarningToast">Trigger Warning Toast (Medium Priority)</pie-button>
        <pie-button @click="triggerErrorToast">Trigger Error Toast (High Priority)</pie-button>
        <pie-button variant="secondary" @click="clearToasts">Clear All Toasts</pie-button>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { definePageMeta } from '#imports';
  import { ref } from 'vue';
  import { toaster } from '@justeattakeaway/pie-webc/components/toast-provider.js';
  import '@justeattakeaway/pie-webc/components/toast-provider.js';
  import '@justeattakeaway/pie-webc/components/button.js';
  import '@justeattakeaway/pie-webc/components/tag.js';
    
  definePageMeta({
    title: 'Toast Provider',
  });

  const queueLength = ref(0);
  
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
  
  const toastOptions = ref({
    duration: 3000,
    isDismissible: true,
    onPieToastOpen: () => console.log('Toast Opened'),
    onPieToastClose: () => console.log('Toast Closed'),
    onPieToastLeadingActionClick: () => console.log('Leading Action Clicked'),
  });

  </script>
  