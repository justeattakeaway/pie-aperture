'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieRadio } from "@justeattakeaway/pie-webc/react/radio.js";
import { PieRadioGroup } from "@justeattakeaway/pie-webc/react/radio-group.js";
import { PieFormLabel } from "@justeattakeaway/pie-webc/react/form-label.js";

import { useState } from "react";

export default function RadioGroup() {
    const [favouriteTakeaway, setFavouriteTakeaway] = useState('');


    const handleFavouriteTakeaway = (event: InputEvent) => {
        const newFavourite = (event.target as HTMLInputElement).value;
        setFavouriteTakeaway(newFavourite);
    }

    return (
        <NavigationLayout title="Radio Group">
            <PieRadioGroup name="favouriteTakeaway" onChange={handleFavouriteTakeaway as any}>
                <PieFormLabel slot="label">Your favourite takeaway: { favouriteTakeaway }</PieFormLabel>
                <PieRadio value="chinese">Chinese</PieRadio>
                <PieRadio data-test-id="shawarma" value="shawarma">Shawarma</PieRadio>
            </PieRadioGroup>
        </NavigationLayout>
    );
}
