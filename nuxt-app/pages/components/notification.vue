<template>
  <div>
    <pie-button @click="handleToggleNotification">{{ !isNotificationOpen ? 'Open' : 'Close' }} Notification</pie-button>

    <pie-divider/>

    <pie-notification
        variant="info"
        heading="Title"
        :isOpen="isNotificationOpen"
        :leadingAction="leadingAction"
        :supportingAction="supportingAction"
        @pie-notification-close="handleCloseNotification"
        @pie-notification-open="handleOpenNotification"
        @pie-notification-leading-action-click="handleCloseNotification"
        @pie-notification-supporting-action-click="handleCloseNotification"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tincidunt est, vitae vulputate turpis. Cras pretium venenatis elementum. Duis tristique neque non varius tempor. In hac habitasse platea dictumst. Aenean accumsan vehicula urna.
    </pie-notification>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import '@justeattakeaway/pie-webc/components/notification.js';

definePageMeta({
  title: 'PIE Notification',
});

let isNotificationOpen = ref(true);

const handleToggleNotification = () =>  {
  isNotificationOpen.value = !isNotificationOpen.value;
}

const handleCloseNotification = () =>  {
  isNotificationOpen.value = false;
}

const handleOpenNotification = () =>  {
  isNotificationOpen.value = true;
}

const leadingAction = {
  text: 'Confirm',
  ariaLabel: 'Descriptive confirmation text',
};

const supportingAction = {
  text: 'Cancel',
  ariaLabel: 'Descriptive cancellation text',
};

</script>
