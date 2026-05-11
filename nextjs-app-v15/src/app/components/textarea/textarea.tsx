'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieTextarea } from '@justeattakeaway/pie-webc/react/textarea.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';

export default function Textarea() {

    return (
        <NavigationLayout title="Textarea">
            <h3>Default</h3>
            <PieTextarea value="foo"/>

            <PieDivider />

            <h3>Resize: manual</h3>
            <PieTextarea
                value="foo"
                resize="manual"
            />

            <PieDivider />

            <h3>Maxlength: 4</h3>
            <PieTextarea
                value="foo"
                maxlength={4}
            />
        </NavigationLayout>
    );
}
