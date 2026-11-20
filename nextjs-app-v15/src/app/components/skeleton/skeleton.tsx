'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieSkeleton } from '@justeattakeaway/pie-webc/react/skeleton.js';

export default function Skeleton() {
    return (
        <NavigationLayout title="Skeleton">
        <PieSkeleton/>
        </NavigationLayout>
    );
}
