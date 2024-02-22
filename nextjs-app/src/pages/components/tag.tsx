import NavigationLayout from "@/layout/navigation";
import { PieTag } from "@justeattakeaway/pie-tag/dist/react";

export default function Tag() {
    return (
        <NavigationLayout title="Tag">
        <PieTag variant="brand" size="large">Label</PieTag>
        </NavigationLayout>
    );
}
