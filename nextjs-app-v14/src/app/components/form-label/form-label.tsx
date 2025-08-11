'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieFormLabel } from '@justeattakeaway/pie-webc/react/form-label.js';

export default function FormLabel() {
    return (
        <NavigationLayout title="Form Label">
        <PieFormLabel optional="Optional" trailing="X out of X">Label</PieFormLabel>
        </NavigationLayout>
    );
}
