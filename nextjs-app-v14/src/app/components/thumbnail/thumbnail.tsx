'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieThumbnail } from '@justeattakeaway/pie-webc/react/thumbnail.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';

export default function Thumbnail() {
    const props = {
        src: 'https://www.pie.design/assets/img/jet-logo-narrow.svg',
        alt: 'JET logo',
    }

    const invalidSrcWithPlaceholderProps = {
        src: 'https://www.pie.design/assets/img/invalid-thumbnail-aperture.svg',
        placeholder: {
            src: 'https://www.pie.design/assets/img/404_narrow.png',
            alt: 'Thumbnail placeholder image',
        }
    }

    return (
        <NavigationLayout title="Thumbnail">
            <h3>Default</h3>
            <PieThumbnail {...props} />
            <PieDivider />
            <h3>Outline</h3>
            <PieThumbnail disabled variant="outline" {...props} />
            <h3>Placeholder</h3>
            <PieThumbnail  {...invalidSrcWithPlaceholderProps} />
        </NavigationLayout>
    );
}
