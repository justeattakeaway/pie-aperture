'use client';

import NavigationLayout from "@/layout/navigation";
import { PieCheckbox } from "@justeattakeaway/pie-webc/react/checkbox.js";
import { useState } from "react";

export default function Checkbox() {
    const [isCheckboxChecked, setIsCheckboxCheck] = useState(false)

    const handleCheckboxChange = () => {
        setIsCheckboxCheck(current => !current);
    };

    return (
        <NavigationLayout title="Checkbox">
            <PieCheckbox
                label={`checked: ${isCheckboxChecked}`}
                checked={isCheckboxChecked}
                onChange={handleCheckboxChange}>
            </PieCheckbox>
        </NavigationLayout>
    );
}
