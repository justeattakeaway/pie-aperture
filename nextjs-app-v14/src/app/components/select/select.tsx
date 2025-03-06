'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieSelect } from "@justeattakeaway/pie-webc/react/select.js";

export default function Select() {

    return (
        <NavigationLayout title="Select">
            <PieSelect></PieSelect>
        </NavigationLayout>
    );
}
