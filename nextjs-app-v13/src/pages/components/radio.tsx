import NavigationLayout from "@/layout/navigation";
import { PieRadio } from "@justeattakeaway/pie-webc/react/radio.js";
import { useState } from "react";

export default function Radio() {
    const [isRadioChecked, setIsRadioCheck] = useState(false);

    const handleRadioChange = () => {
        setIsRadioCheck(current => !current);
        console.log(isRadioChecked);
    };

    return (
        <NavigationLayout title="Radio">
            <PieRadio
                checked={isRadioChecked}
                value="value"
                onChange={handleRadioChange}>
                {`checked: ${isRadioChecked}`}
            </PieRadio>
        </NavigationLayout>
    );
}
