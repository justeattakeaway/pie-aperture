'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieTag, variants } from '@justeattakeaway/pie-webc/react/tag.js';
import { IconFingerprint } from "@justeattakeaway/pie-icons-webc/dist/react/IconFingerprint.js";
import '@/styles/tag.scss';

export default function Tag() {
    return (
        <NavigationLayout title="Tag">
            <h2>Non-interactive</h2>

            <h3>Default</h3>
            <div className="c-tag-container">
                {variants.map((variant) => (
                    <PieTag
                        key={variant}
                        variant={variant}>
                        {variant}
                    </PieTag>
                ))}

                {variants.map((variant) => (
                    <PieTag
                        key={variant}
                        variant={variant}>
                        <IconFingerprint slot="icon" />
                        {variant}
                    </PieTag>
                ))}
            </div>

            <h3>Strong</h3>

            <div className="c-tag-container">
                {variants.map((variant) => (
                    <PieTag
                        key={variant}
                        variant={variant}
                        isStrong>
                        {variant}
                    </PieTag>
                ))}

                {variants.map((variant) => (
                    <PieTag
                        key={variant}
                        variant={variant}
                        isStrong>
                        <IconFingerprint slot="icon" />
                        {variant}
                    </PieTag>
                ))}
            </div>
        </NavigationLayout>
    );
}
