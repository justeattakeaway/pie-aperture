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

    <pie-divider/>

    <pie-notification
        variant="success"
        heading="Link Actions"
        :leadingAction="leadingActionLink"
        :supportingAction="supportingActionLink"
    >
      A new version is available with exciting features. This notification demonstrates link-based actions instead of buttons.
    </pie-notification>

    <pie-divider/>

    <pie-notification
        variant="info"
        heading="Slotted Actions"
        :isOpen="isSlottedNotificationOpen"
    >
      This notification uses slotted pie-button elements for custom actions instead of the leadingAction and supportingAction props.
      <pie-button
          slot="leadingAction"
          variant="primary"
          size="small-productive"
          @click="handleCloseSlottedNotification">
          <icon-plus-circle slot="icon"></icon-plus-circle>
          Confirm
      </pie-button>
      <pie-button
          slot="supportingAction"
          variant="ghost"
          size="small-productive"
          @click="handleCloseSlottedNotification">
          Cancel
      </pie-button>
    </pie-notification>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { definePageMeta } from '#imports';
import '@justeattakeaway/pie-webc/components/button.js';
import '@justeattakeaway/pie-webc/components/divider.js';
import '@justeattakeaway/pie-webc/components/notification.js';
import '@justeattakeaway/pie-icons-webc/dist/IconPlusCircle.js';

definePageMeta({
  title: 'Notification',
});

let isNotificationOpen = ref(true);
let isSlottedNotificationOpen = ref(true);

const handleToggleNotification = () =>  {
  isNotificationOpen.value = !isNotificationOpen.value;
}

const handleCloseNotification = () =>  {
  isNotificationOpen.value = false;
}

const handleOpenNotification = () =>  {
  isNotificationOpen.value = true;
}

const handleCloseSlottedNotification = () =>  {
  isSlottedNotificationOpen.value = false;
}

const leadingAction = {
  text: 'Confirm',
  ariaLabel: 'Descriptive confirmation text',
};

const supportingAction = {
  text: 'Cancel',
  ariaLabel: 'Descriptive cancellation text',
};

const leadingActionLink = {
  text: 'Learn More',
  href: 'https://example.com',
  target: '_blank',
  rel: 'noopener noreferrer',
};

const supportingActionLink = {
  text: 'Download',
  href: '/path/to/file.pdf',
  download: 'release-notes.pdf',
};

</script>
