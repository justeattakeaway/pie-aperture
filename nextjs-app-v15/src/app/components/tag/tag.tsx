'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieTag, variants } from '@justeattakeaway/pie-webc/react/tag.js';
import { IconFingerprint } from "@justeattakeaway/pie-icons-webc/dist/react/IconFingerprint.js";
import '@/styles/tag.scss';

export default function Tag() {
    return (
        <NavigationLayout title="Tag">
            <h2>Default</h2>
            <div className="c-tag-container">
                {variants.map((variant) => (
                    <PieTag
                        key={variant}
                        variant={variant}
                        hasLeadingIcon>
                        <IconFingerprint slot="icon" />
                        {variant}
                    </PieTag>
                ))}

                {variants.map((variant) => (
                    <PieTag
                        key={variant}
                        variant={variant}
                        isIconOnly>
                        <IconFingerprint slot="icon" />
                    </PieTag>
                ))}

                {variants.map((variant) => (
                    <PieTag
                        key={variant}
                        variant={variant}>
                        {variant}
                    </PieTag>
                ))}
            </div>

            <h2>Strong</h2>

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
                        isStrong
                        hasLeadingIcon>
                        <IconFingerprint slot="icon" />
                        {variant}
                    </PieTag>
                ))}

                {variants.map((variant) => (
                    <PieTag
                        key={variant}
                        variant={variant}
                        isIconOnly>
                        <IconFingerprint slot="icon" />
                    </PieTag>
                ))}
            </div>
        </NavigationLayout>
    );
}
