'use client';

import NavigationLayout from "@/app/layout/navigation";
import { useState } from "react";
import { PieTextarea } from '@justeattakeaway/pie-webc/react/textarea.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { PieFormLabel } from '@justeattakeaway/pie-webc/react/form-label.js';

export default function Textarea() {
    const maxLength = 20;
    const [value, setValue] = useState('');
    const count = value.length;

    return (
        <NavigationLayout title="Textarea">
            <PieTextarea value="foo" />

            <PieDivider />

            <PieTextarea
                value="foo"
                resize="manual"
            />

            <PieDivider />

            <PieFormLabel trailing={`${count} / ${maxLength}`}>Label</PieFormLabel>
            <PieTextarea
                value={value}
                maxlength={maxLength}
                onInput={(e) => setValue((e.target as HTMLTextAreaElement).value)}
            />

        </NavigationLayout>
    );
}
