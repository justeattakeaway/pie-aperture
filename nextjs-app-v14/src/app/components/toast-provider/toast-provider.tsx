'use client';

import { useState } from 'react';
import NavigationLayout from '@/app/layout/navigation';
import { PieToastProvider } from '@justeattakeaway/pie-webc/react/toast-provider.js';
import { toaster } from '@justeattakeaway/pie-webc/components/toast-provider.js';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';

export default function ToastProviderPage() {
    const [queueLength, setQueueLength] = useState(0);

    const handleQueueUpdate = (event: CustomEvent) => {
        setQueueLength(event.detail.length);
    };

    return (
        <NavigationLayout title="Toast Provider">
            <PieToastProvider
                options={{
                    isDismissible: true,
                    onPieToastOpen: () => console.log('Toast Opened'),
                    onPieToastClose: () => console.log('Toast Closed'),
                    onPieToastLeadingActionClick: () => console.log('Leading Action Clicked'),
                }}
                onPieToastProviderQueueUpdate={handleQueueUpdate}
            />

            <PieTag variant="information" style={{ marginTop: '16px' }}>
                Toast Queue Length: {queueLength}
            </PieTag>

            <div style={{ marginTop: '16px', display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
                <PieButton
                    onClick={() =>
                        toaster.create({
                            message: 'Low Priority Info',
                            variant: 'info',
                        })
                    }
                >
                    Trigger Info Toast (Low Priority)
                </PieButton>

                <PieButton
                    onClick={() =>
                        toaster.create({
                            message: 'Medium Priority Warning Toast',
                            variant: 'warning',
                        })
                    }
                >
                    Trigger Warning Toast (Medium Priority)
                </PieButton>

                <PieButton
                    onClick={() =>
                        toaster.create({
                            message: 'High Priority Error Toast',
                            variant: 'error',
                        })
                    }
                >
                    Trigger Error Toast (High Priority)
                </PieButton>

                <PieButton variant="secondary" onClick={() => toaster.clearAll()}>
                    Clear All Toasts
                </PieButton>
            </div>
        </NavigationLayout>
    );
}
