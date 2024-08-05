'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieModal } from '@justeattakeaway/pie-webc/react/modal.js';
import { useState } from "react";

export default function Modal() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <NavigationLayout title="Modal">
        <PieButton onClick={() => setIsModalOpen(true)}>Open Modal</PieButton>
        <PieModal
            isOpen={isModalOpen}
            heading="Modal Header"
            isDismissible
            hasBackButton
            leadingActionText="Leading action"
            onPieModalClose={() => setIsModalOpen(false)}
            onPieModalBack={() => setIsModalOpen(false)}
        >
            <p>Modal content</p>
        </PieModal>
        </NavigationLayout>
    );
}
