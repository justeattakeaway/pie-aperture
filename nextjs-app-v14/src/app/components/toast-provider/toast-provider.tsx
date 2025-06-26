'use client';

import { useState } from 'react';
import NavigationLayout from '@/app/layout/navigation';
import { PieToastProvider } from '@justeattakeaway/pie-webc/react/toast-provider.js';
import { toaster, positions, ToastProviderProps } from '@justeattakeaway/pie-webc/components/toast-provider.js';
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';
import { PieChip } from '@justeattakeaway/pie-webc/react/chip.js';

export default function ToastProviderPage() {
    const [queueLength, setQueueLength] = useState(0);
    const [selectedPosition, setSelectedPosition] = useState<ToastProviderProps['position']>('default');

    const handleQueueUpdate = (event: CustomEvent) => {
        setQueueLength(event.detail.length);
    };

    return (
        <NavigationLayout title="Toast Provider">
            <PieToastProvider
                position={selectedPosition}
                options={{
                    isDismissible: true,
                    onPieToastOpen: () => console.log('Toast Opened'),
                    onPieToastClose: () => console.log('Toast Closed'),
                    onPieToastLeadingActionClick: () => console.log('Leading Action Clicked'),
                }}
                onPieToastProviderQueueUpdate={handleQueueUpdate}
            />

            <PieTag
                data-test-id="toast-queue-length"
                variant="information"
                style={{ marginTop: 'var(--dt-spacing-d)' }}>
                Toast Queue Length: {queueLength}
            </PieTag>

            <div style={{ marginTop: 'var(--dt-spacing-d)', display: 'flex', alignItems: 'center', gap: 'var(--dt-spacing-d)', flexWrap: 'wrap' }}>
                <h3>Position:</h3>
                {positions.map((position) => (
                    <PieChip
                        key={position}
                        isSelected={selectedPosition === position}
                        onClick={() => setSelectedPosition(position)}>
                        {position}
                    </PieChip>
                ))}
            </div>

            <div style={{ marginTop: 'var(--dt-spacing-d)', display: 'flex', gap: 'var(--dt-spacing-d)', flexWrap: 'wrap' }}>
                <PieButton
                    data-test-id="info-toast-btn"
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
                    data-test-id="warning-toast-btn"
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
                    data-test-id="error-toast-btn"
                    onClick={() =>
                        toaster.create({
                            message: 'High Priority Error Toast',
                            variant: 'error',
                        })
                    }
                >
                    Trigger Error Toast (High Priority)
                </PieButton>

                <PieButton
                    data-test-id="clear-toasts-btn"
                    variant="secondary"
                    onClick={() => toaster.clearAll()}>
                    Clear All Toasts
                </PieButton>
            </div>
        </NavigationLayout>
    );
}
