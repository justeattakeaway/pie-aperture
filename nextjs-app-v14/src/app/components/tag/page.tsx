'use client';

import NavigationLayout from "@/layout/navigation";
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';

export default function Tag() {
    return (
        <NavigationLayout title="Tag">
        <PieTag variant="brand" size="large">Label</PieTag>
        </NavigationLayout>
    );
}
