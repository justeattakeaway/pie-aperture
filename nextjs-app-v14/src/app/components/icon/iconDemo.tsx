'use client';

import NavigationLayout from "@/app/layout/navigation";
import { IconPhone } from '@justeattakeaway/pie-icons-webc/dist/react/IconPhone.js';
import { IconPhoneLarge } from '@justeattakeaway/pie-icons-webc/dist/react/IconPhoneLarge.js';

export default function IconDemo() {
    return (
        <NavigationLayout title="Icon">
            <IconPhone />
            <IconPhoneLarge />
        </NavigationLayout>
    );
}
