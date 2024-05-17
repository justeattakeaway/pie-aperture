'use client';

import { useState } from "react";
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieNotification } from '@justeattakeaway/pie-webc/react/notification.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import NavigationLayout from "@/layout/navigation";

export default function Notification() {
  const [isNotificationOpen, setIsNotificationOpen] = useState(false);

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
    </NavigationLayout>

  )
}
