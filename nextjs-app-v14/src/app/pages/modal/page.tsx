'use client';

import NavigationLayout from "@/layout/navigation";
import { PieButton } from "@justeattakeaway/pie-button/dist/react"
import { PieModal } from "@justeattakeaway/pie-modal/dist/react";
import { useState } from "react";

export default function Modal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <NavigationLayout title="Modal">
        <PieButton onClick={() => setIsModalOpen(true)}>Open Modal</PieButton>
        <PieModal
            isOpen={isModalOpen}
            heading="Modal Header"
            isDismissible
            hasBackButton
            onPieModalClose={() => setIsModalOpen(false)}
            onPieModalBack={() => setIsModalOpen(false)}
        >
            <p>Modal</p>
        </PieModal>
        </NavigationLayout>
    );
}
