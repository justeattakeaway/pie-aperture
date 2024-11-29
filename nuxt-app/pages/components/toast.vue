<template>
    <div>
      <pie-toast 
      message="This is a message"
      isDismissible></pie-toast>
    </div>
  </template>
  
  <script setup lang="ts">
  import { definePageMeta } from '#imports';
  import '@justeattakeaway/pie-webc/components/toast.js';
  
  definePageMeta({
    title: 'Toast',
  });
  </script>
  