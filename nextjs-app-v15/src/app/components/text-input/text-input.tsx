'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieTextInput } from '@justeattakeaway/pie-webc/react/text-input.js';
import { IconPhone } from '@justeattakeaway/pie-icons-webc/dist/react/IconPhone.js';

export default function TextInput() {
    return (
        <NavigationLayout title="Text Input">
            <PieTextInput value="foo">
                <IconPhone slot="leadingIcon"></IconPhone>
            </PieTextInput>
        </NavigationLayout>
    );
}
