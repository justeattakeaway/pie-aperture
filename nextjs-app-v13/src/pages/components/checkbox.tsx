import NavigationLayout from "@/layout/navigation";
import { PieCheckbox } from "@justeattakeaway/pie-checkbox/dist/react";
import { useState } from "react";

export default function Checkbox() {
    const [isCheckboxChecked, setIsCheckboxCheck] = useState(false)

    const handleCheckboxChange = () => {
    setIsCheckboxCheck(current => !current);
      console.log(isCheckboxChecked);
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
