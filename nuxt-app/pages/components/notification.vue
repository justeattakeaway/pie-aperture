<template>
  <div>
    <pie-button @click="toggleNotification">{{ !isNotificationOpen ? 'Open' : 'Close' }} Notification</pie-button>

    <pie-divider/>

    <pie-notification
        variant="info"
        heading="Title"
        v-if="isMounted"
        :isOpen="isNotificationOpen ? isNotificationOpen : undefined"
        :leadingAction="leadingAction"
        :supportingAction="supportingAction"
        @pie-notification-close="closeNotification"
        @pie-notification-open="openNotification"
        @pie-notification-leading-action-click="closeNotification"
        @pie-notification-supporting-action-click="closeNotification"
    >
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tincidunt est, vitae vulputate turpis. Cras pretium venenatis elementum. Duis tristique neque non varius tempor. In hac habitasse platea dictumst. Aenean accumsan vehicula urna.
    </pie-notification>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import '@justeattakeaway/pie-webc/components/notification.js';

definePageMeta({
  title: 'PIE Notification',
});

let isNotificationOpen = ref(true);
const isMounted = ref(false);

const toggleNotification = () =>  {
  isNotificationOpen.value = !isNotificationOpen.value;
}

const closeNotification = () =>  {
  isNotificationOpen.value = false;
}

const openNotification = () =>  {
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

// Ensure client-side rendering
onMounted(() => {
  isMounted.value = true;
});

</script>
