'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieTextInput } from '@justeattakeaway/pie-webc/react/text-input.js';
import { useState } from "react";

export default function TextInput() {
    const [controlledPieInputValue, setControlledPieInputValue] = useState('')
    const [controlledNativeInputValue, setControlledNativeInputValue] = useState('')

    const onPieInput =  (e: Event) => {
        const value = (e.target as HTMLInputElement).value;
        if (value.length <= 5) {
            setControlledPieInputValue(value)
        }

    }

    const onNativeInput =  (e: Event) => {
        const value = (e.target as HTMLInputElement).value;
        if (value.length <= 5) {
            setControlledNativeInputValue(value)
        }

    }
    
    return (
        <NavigationLayout title="Text Input">

            <p>The following input elements are controlled using state and the onInput event. The onInput logic updates the state only if the input length is 5 characters or fewer.
                <br />
                <br />
            Notice that in the native input, users are prevented from typing beyond the limit because the displayed value strictly follows the state. However, in the PieTextInput component, users can continue typing even when the state is not updated, meaning it does not fully respect the controlled value prop.</p>

            <h1>Native input</h1>
            <input value={controlledNativeInputValue} onInput={onNativeInput as any} /> 
            
            <h1>PieTextInput</h1>
            <PieTextInput value={controlledPieInputValue} onInput={onPieInput as any}></PieTextInput>

        </NavigationLayout>
    );
}
