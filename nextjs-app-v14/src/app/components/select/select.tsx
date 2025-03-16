'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieSelect } from "@justeattakeaway/pie-webc/react/select.js";
import { PieOption } from "@justeattakeaway/pie-webc/react/option.js";
import { PieOptionGroup } from "@justeattakeaway/pie-webc/react/option-group.js";


export default function Select() {
    return (
        <NavigationLayout title="Select">
            <PieSelect>
                <PieOptionGroup>Animals</PieOptionGroup>
                <PieOption>Cat</PieOption>
            </PieSelect>
        </NavigationLayout>
    );
}
