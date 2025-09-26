'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';
import '@/styles/tag.scss';
import styles from './custom-tag-styles.module.css';
import { IconOfferFilled } from "@justeattakeaway/pie-icons-webc/dist/react/IconOfferFilled";


export default function CustomTag() {
    const customTag1Classes = `${styles['custom-style']} ${styles['custom-1']}`.trim();
    const customTagContainerClasses = `${styles.customTagContainerDark} c-tag-container`.trim();

    return (
        <NavigationLayout title="Custom Tag">
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
