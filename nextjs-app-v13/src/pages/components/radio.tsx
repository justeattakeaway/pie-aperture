import NavigationLayout from "@/layout/navigation";
import { PieRadio } from "@justeattakeaway/pie-webc/react/radio.js";
import { useState } from "react";

export default function Radio() {
    const [isRadioChecked, setIsRadioCheck] = useState(false);

    const handleRadioInput = () => {
        setIsRadioCheck(current => !current);
    };

    return (
        <NavigationLayout title="Radio">
            <PieRadio
                checked={isRadioChecked}
                value="value"
                onInput={handleRadioInput}>
                {`checked: ${isRadioChecked}`}
            </PieRadio>
        </NavigationLayout>
    );
}
