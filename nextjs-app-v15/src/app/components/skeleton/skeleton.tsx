'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieSkeleton } from '@justeattakeaway/pie-webc/react/skeleton.js';

export default function Skeleton() {
    return (
        <NavigationLayout title="Skeleton">
        <div>
            <PieSkeleton variant="circle" height="40px" />
            <PieSkeleton variant="text" height="font-body-l" lines={3} />
            <PieSkeleton variant="star" stars={5} />
        </div>
        </NavigationLayout>
    );
}
