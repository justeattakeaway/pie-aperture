'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieTag, variants } from '@justeattakeaway/pie-webc/react/tag.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import '@/styles/tag.scss';
import styles from './tag-styles.module.css';
import { IconOfferFilled } from "@justeattakeaway/pie-icons-webc/dist/react/IconOfferFilled";


export default function Tag() {
    const customTag1Classes = `${styles['custom-style']} ${styles['custom-1']}`.trim();
    const customTagContainerClasses = `${styles.customTagContainerDark} c-tag-container`.trim();

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
            </div>

            <PieDivider></PieDivider>

            <h2>Interactive</h2>

            <h3>Default</h3>

            <div className="c-tag-container">
                {variants.map((variant) => (
                    <PieTag
                        isInteractive
                        key={variant}
                        variant={variant}>
                        {variant}
                    </PieTag>
                ))}
            </div>

            <h3>Strong</h3>

            <div className="c-tag-container">
                {variants.map((variant) => (
                    <PieTag
                        isInteractive
                        isStrong
                        key={variant}
                        variant={variant}>
                        {variant}
                    </PieTag>
                ))}
            </div>

            <h2>Customised Tag using CSS parts</h2>
            <div className={customTagContainerClasses}>
            <PieTag className={customTag1Classes}>
                <IconOfferFilled slot="icon"></IconOfferFilled>
                Label
            </PieTag>
            </div>
        </NavigationLayout>
    );
}
