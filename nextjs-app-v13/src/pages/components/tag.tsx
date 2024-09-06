import NavigationLayout from '@/layout/navigation';
import { PieTag, variants } from '@justeattakeaway/pie-webc/react/tag.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import styles from '../../styles/tag.module.scss';

export default function Tag() {
    return (
        <NavigationLayout title="Tag">
        <h2>Non-interactive</h2>

            <h3>Default</h3>
            <div className={styles.cTagContainer}>
                {variants.map((variant) => (
                    <PieTag
                        key={variant}
                        variant={variant}>
                        {variant}
                    </PieTag>
                ))}
            </div>

            <h3>Strong</h3>

            <div className={styles.cTagContainer}>
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

            <div className={styles.cTagContainer}>
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

            <div className={styles.cTagContainer}>
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
        </NavigationLayout>
    );
}
