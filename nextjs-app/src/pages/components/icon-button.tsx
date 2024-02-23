import NavigationLayout from "@/layout/navigation";
import { PieIconButton } from "@justeattakeaway/pie-icon-button/dist/react"
import "@justeattakeaway/pie-icons-webc/dist/react/IconClose";

export default function IconButton() {
    return (
        <NavigationLayout title="Icon Button">
        <PieIconButton>
            <IconClose></IconClose>
        </PieIconButton>
        </NavigationLayout>
    );
}
