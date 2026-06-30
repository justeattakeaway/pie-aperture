'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieAccordion } from '@justeattakeaway/pie-webc/react/accordion.js';
import { IconPie } from '@justeattakeaway/pie-icons-webc/dist/react/IconPie';
import { IconRocketShip } from '@justeattakeaway/pie-icons-webc/dist/react/IconRocketShip';
import { useState } from "react";

export default function Accordion() {
    const [isFirstOpen, setIsFirstOpen] = useState(true);
    const [isSecondOpen, setIsSecondOpen] = useState(false);

    const handleFirstToggle = (event: CustomEvent<{ isOpen: boolean }>) => {
        setIsFirstOpen(!event.detail.isOpen);
    };

    const handleSecondToggle = (event: CustomEvent<{ isOpen: boolean }>) => {
        setIsSecondOpen(!event.detail.isOpen);
    };

    return (
        <NavigationLayout title="Accordion">
            <PieAccordion
                headingLabel="What is PIE?"
                isOpen={isFirstOpen}
                onPieAccordionToggle={handleFirstToggle}
            >
                <IconPie slot="icon" size="m" />
                PIE is the design system used across Just Eat Takeaway products. It provides a consistent set of components and styles.
            </PieAccordion>

            <PieAccordion
                headingLabel="How do I get started?"
                secondaryLabel="Installation and setup guide"
                isOpen={isSecondOpen}
                onPieAccordionToggle={handleSecondToggle}
                isDividerHidden={true}
            >
                <IconRocketShip slot="icon" size="m" />
                Install the pie-webc package and import the components you need. See the documentation for more details.
            </PieAccordion>
        </NavigationLayout>
    );
}
