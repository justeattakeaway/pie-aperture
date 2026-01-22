'use client';

import { useState } from "react";
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieNotification } from '@justeattakeaway/pie-webc/react/notification.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import NavigationLayout from "@/app/layout/navigation";

export default function Notification() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(true);

  const toggleNotification = () => {
    setIsNotificationOpen((previousState => !previousState))
  }

  return (
    <NavigationLayout title="Notification">
      <PieButton onClick={toggleNotification}>{!isNotificationOpen ? 'Open' : 'Close'} Notification</PieButton>

      <PieDivider />

      <PieNotification
        isOpen={isNotificationOpen}
        variant="info"
        heading="Title"
        leadingAction={{
            text: 'Confirm',
            ariaLabel: 'Descriptive confirmation text',
        }}
        supportingAction={{
            text: 'Cancel',
            ariaLabel: 'Descriptive cancellation text',
        }}
        onPieNotificationClose={() => setIsNotificationOpen(false)}
        onPieNotificationOpen={() => setIsNotificationOpen(true)}
        onPieNotificationLeadingActionClick={() => setIsNotificationOpen(false)}
        onPieNotificationSupportingActionClick={() => setIsNotificationOpen(false)}
      >
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus sit amet tincidunt est, vitae vulputate turpis. Cras pretium venenatis elementum. Duis tristique neque non varius tempor. In hac habitasse platea dictumst. Aenean accumsan vehicula urna.
      </PieNotification>

      <PieDivider />

      <PieNotification
        variant="success"
        heading="Link Actions"
        leadingAction={{
            text: 'Learn More',
            href: 'https://example.com',
            target: '_blank',
            rel: 'noopener noreferrer',
        }}
        supportingAction={{
            text: 'Download',
            href: '/path/to/file.pdf',
            download: 'release-notes.pdf',
        }}
      >
        A new version is available with exciting features. This notification demonstrates link-based actions instead of buttons.
      </PieNotification>
    </NavigationLayout>

  )
}
