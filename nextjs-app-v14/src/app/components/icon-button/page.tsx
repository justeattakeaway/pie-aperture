'use client';

import NavigationLayout from "@/layout/navigation";
import { PieIconButton } from '@justeattakeaway/pie-webc/react/icon-button.js';
import { IconClose } from '@justeattakeaway/pie-icons-webc/dist/react/IconClose.js';

export default function IconButton() {
    return (
        <NavigationLayout title="Icon Button">
        <PieIconButton onClick={() => console.log("clicked")}>
            <IconClose></IconClose>
        </PieIconButton>
        </NavigationLayout>
    );
}
