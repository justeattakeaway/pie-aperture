'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieChip } from '@justeattakeaway/pie-webc/react/chip.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';

export default function Chip() {
    return (
        <NavigationLayout title="Chip">
        <PieChip>PIE Chip</PieChip>
        <PieDivider/>
        <PieChip variant="outline">PIE Chip</PieChip>
        <PieDivider/>
        <PieChip variant="ghost">PIE Chip</PieChip>
        </NavigationLayout>
    );
}
