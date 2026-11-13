'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieAvatar } from '@justeattakeaway/pie-webc/react/avatar.js';

export default function Avatar() {
    return (
        <NavigationLayout title="Avatar">
            <h1>Avatar Static Initials</h1>
            <PieAvatar label="Ada Lovelace" tag="div"></PieAvatar>
            <h1>Avatar Fallback</h1>
            <PieAvatar tag="div"></PieAvatar>
            <h1>Avatar with a broken image</h1>
            <PieAvatar src="broken.jpg" label="Ada Lovelace" tag="button"></PieAvatar>
        </NavigationLayout>
    );
}
