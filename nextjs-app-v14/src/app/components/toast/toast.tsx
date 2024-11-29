'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieToast } from '@justeattakeaway/pie-webc/react/toast.js';

export default function Toast() {

   const leadingAction = {
    text: 'Undo'
   }

    return (
        <NavigationLayout title="Toast">
            <PieToast message="This is a message" isDismissible leadingAction={leadingAction} />
        </NavigationLayout>
    );
}
