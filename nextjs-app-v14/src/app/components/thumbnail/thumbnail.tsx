'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieThumbnail } from '@justeattakeaway/pie-webc/react/thumbnail.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';

export default function Thumbnail() {
    const props = {
        src: 'https://www.pie.design/assets/img/jet-logo-narrow.svg',
        alt: 'JET logo',
    }

    return (
        <NavigationLayout title="Thumbnail">
            <h3>Default</h3>
            <PieThumbnail {...props} />
            <PieDivider />
            <h3>Outline</h3>
            <PieThumbnail variant="outline" {...props} />
        </NavigationLayout>
    );
}
