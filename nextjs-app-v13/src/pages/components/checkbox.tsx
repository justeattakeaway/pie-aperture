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
                checked={isCheckboxChecked}
                onChange={handleCheckboxChange}>
                {`checked: ${isCheckboxChecked}`}
            </PieCheckbox>
        </NavigationLayout>
    );
}
