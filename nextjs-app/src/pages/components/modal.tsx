import { PieButton, PieModal } from "@justeattakeaway/pie-webc/dist/react"
import { useState } from "react";

export default function Modal() {
    const [isModalOpen, setIsModalOpen] = useState(false);

    return (
        <>
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
        </>
    );
}
