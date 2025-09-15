'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieThumbnail } from '@justeattakeaway/pie-webc/react/thumbnail.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';

export default function Thumbnail() {
    const props = {
        src: 'https://webc.pie.design/static/images/pie-logo.svg',
        alt: 'The PIE design system logo',
    }

    const invalidImageProps = {
        src: 'invalid-url.com',
        alt: 'Invalid image url',
    }

    const invalidImageWithCustomPlaceholderProps = {
        ...invalidImageProps,
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
            <PieThumbnail variant="outline" {...props} />
            <PieDivider />
            <h3>Default Placeholder</h3>
            <PieThumbnail  {...invalidImageProps} />
            <PieDivider />
            <h3>Custom Placeholder</h3>
            <PieThumbnail  {...invalidImageWithCustomPlaceholderProps} />
        </NavigationLayout>
    );
}
