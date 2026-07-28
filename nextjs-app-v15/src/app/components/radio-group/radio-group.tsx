'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieRadio } from "@justeattakeaway/pie-webc/react/radio.js";
import { PieRadioGroup } from "@justeattakeaway/pie-webc/react/radio-group.js";
import { PieFormLabel } from "@justeattakeaway/pie-webc/react/form-label.js";
import { PieButton } from "@justeattakeaway/pie-webc/react/button.js";

import { useState } from "react";

export default function RadioGroup() {
    const [favouriteTakeaway, setFavouriteTakeaway] = useState('');


    const handleFavouriteTakeaway = (event: CustomEvent) => {
        const newFavourite = (event.target as HTMLInputElement).value;
        setFavouriteTakeaway(newFavourite);
    }

    return (
        <NavigationLayout title="Radio Group">
            <PieRadioGroup name="favouriteTakeaway" onChange={handleFavouriteTakeaway}>
                <PieFormLabel slot="label">Your favourite takeaway: { favouriteTakeaway }</PieFormLabel>
                <PieRadio value="chinese">Chinese</PieRadio>
                <PieRadio value="shawarma">Shawarma</PieRadio>
                <PieRadio value="pizza">Pizza</PieRadio>
            </PieRadioGroup>

            <br/>

            <PieRadioGroup isInline name="inlineFavouriteTakeaway" onChange={handleFavouriteTakeaway}>
                <PieFormLabel slot="label">Your favourite takeaway - inline radio: { favouriteTakeaway }</PieFormLabel>
                <PieRadio value="italian">Italian</PieRadio>
                <PieRadio value="tahi">Thai</PieRadio>
                <PieRadio value="burgers">Burgers</PieRadio>
            </PieRadioGroup>

            <br/>

            <PieButton>Some focusable element</PieButton>
        </NavigationLayout>
    );
}
