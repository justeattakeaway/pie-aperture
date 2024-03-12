import { PieButton, PieModal } from "@justeattakeaway/pie-webc/dist/react"

export default function Modal() {
    return (
        <>
        <PieButton>Hello</PieButton>
        <PieModal
            isOpen
            heading="Modal Header"
            isDismissible
            hasBackButton
        >
            <p>Modal</p>
        </PieModal>
        </>
    );
}
