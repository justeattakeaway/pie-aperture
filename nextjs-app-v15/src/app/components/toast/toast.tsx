'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieToast } from '@justeattakeaway/pie-webc/react/toast.js';

export default function Toast() {

    return (
        <NavigationLayout title="Toast">
            <PieToast message="This is a message" isDismissible />
        </NavigationLayout>
    );
}
