import NavigationLayout from "@/layout/navigation";
import { PieChip } from "@justeattakeaway/pie-chip/dist/react";
import { PieDivider } from "@justeattakeaway/pie-divider/dist/react";

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
