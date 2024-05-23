'use client';

import NavigationLayout from "@/layout/navigation";
import { PieLink } from '@justeattakeaway/pie-webc/react/link.js';

export default function Link() {
    return (
        <NavigationLayout title="Link">
        <PieLink href="https://pie.design" target="_blank">Visit pie.design</PieLink>
        </NavigationLayout>
    );
}
