'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieSpinner } from '@justeattakeaway/pie-webc/react/spinner.js';

export default function Spinner() {
    return (
        <NavigationLayout title="Spinner">
        <PieSpinner/>
        </NavigationLayout>
    );
}
