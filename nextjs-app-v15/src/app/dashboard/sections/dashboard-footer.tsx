'use client';

import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { PieLink } from '@justeattakeaway/pie-webc/react/link.js';
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';
import { IconArrowRight } from '@justeattakeaway/pie-icons-webc/dist/react/IconArrowRight.js';
import { useDashboard } from '../state/dashboard-context';
import styles from '../dashboard.module.scss';

/**
 * Page footer. Reports the cookie decision recorded in state, which is how a real
 * application would confirm it had persisted the choice `pie-cookie-banner` emitted.
 */
export default function DashboardFooter () {
    const { state } = useDashboard();
    const { consent } = state;

    return (
        <footer className={styles.footer}>
            <PieDivider />

            <div className={styles.footerLinks}>
                <PieLink href="https://pie.design" isStandalone iconPlacement="trailing" target="_blank" rel="noopener noreferrer">
                    <IconArrowRight slot="icon" />
                    PIE design documentation
                </PieLink>
                <PieLink href="https://webc.pie.design" isStandalone iconPlacement="trailing" target="_blank" rel="noopener noreferrer">
                    <IconArrowRight slot="icon" />
                    PIE web components
                </PieLink>
                <PieLink href="https://piehub.example/cookie-statement" isStandalone size="small" target="_blank" rel="noopener noreferrer">
                    Cookie statement
                </PieLink>
            </div>

            <div className={styles.row} data-test-id="dashboard-consent-summary">
                <span className="u-font-caption">Cookie consent:</span>
                {consent.lastDecision ? (
                    <PieTag variant="success" size="small" isStrong>{consent.lastDecision}</PieTag>
                ) : (
                    <PieTag variant="warning" size="small">Awaiting a decision</PieTag>
                )}
            </div>

            <p className={`u-font-caption ${styles.footerNote}`}>
                A prototype dashboard for PIE Aperture. Every component exported by{' '}
                <code>@justeattakeaway/pie-webc</code> appears on this page.
            </p>
        </footer>
    );
}
