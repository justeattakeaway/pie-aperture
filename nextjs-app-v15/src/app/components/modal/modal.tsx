'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieModal } from '@justeattakeaway/pie-webc/react/modal.js';
import { useState } from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

export default function Modal() {
    const [isModalOpen, setIsModalOpen] = useState(true);

    return (
        <NavigationLayout title="Modal">
        <PieButton onClick={() => setIsModalOpen(true)}>Open Modal</PieButton>
        <PieModal
            className="modal-overflow-visible"
            style={{ overflow: 'visible' }}
            isOpen={isModalOpen}
            heading="Modal Header"
            isDismissible
            hasBackButton
            leadingAction={{ text: 'Confirm' }}
            supportingAction={{ text: 'Cancel' }}
            onPieModalClose={() => setIsModalOpen(false)}
            onPieModalBack={() => setIsModalOpen(false)}
        >
            <p>Modal content</p>
            <div style={{ position: "relative" }}>
                <ReactDatePicker popperPlacement="top" monthsShown={2} />
            </div>
        </PieModal>
        </NavigationLayout>
    );
}
