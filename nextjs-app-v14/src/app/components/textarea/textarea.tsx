'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieTextarea } from '@justeattakeaway/pie-webc/react/textarea.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';

export default function Textarea() {

    return (
        <NavigationLayout title="Textarea">
            <PieTextarea value=""/>

            <PieDivider />

            <PieTextarea
                value=""
                resize="manual"
            />
        </NavigationLayout>
    );
}
