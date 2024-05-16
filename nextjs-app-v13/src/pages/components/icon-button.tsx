import NavigationLayout from "@/layout/navigation";
import { PieIconButton } from "@justeattakeaway/pie-icon-button/dist/react"
import { IconClose } from "@justeattakeaway/pie-icons-webc/dist/react/IconClose";

export default function IconButton() {
    return (
        <NavigationLayout title="Icon Button">
        <PieIconButton onClick={() => console.log("clicked")}>
            <IconClose></IconClose>
        </PieIconButton>
        </NavigationLayout>
    );
}
