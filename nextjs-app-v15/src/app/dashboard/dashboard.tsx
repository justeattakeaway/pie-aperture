'use client';

import { useRouter } from 'next/navigation';
import { PieBreadcrumb } from '@justeattakeaway/pie-webc/react/breadcrumb.js';
import { PieBreadcrumbItem } from '@justeattakeaway/pie-webc/react/breadcrumb-item.js';
import { PieLink } from '@justeattakeaway/pie-webc/react/link.js';
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';
import { IconArrowLeft } from '@justeattakeaway/pie-icons-webc/dist/react/IconArrowLeft.js';
import ConsentBanner from './sections/consent-banner';
import DashboardFooter from './sections/dashboard-footer';
import DashboardOverlays from './sections/dashboard-overlays';
import DashboardTopbar from './sections/dashboard-topbar';
import InsightsPanel from './sections/insights-panel';
import LiveOrders from './sections/live-orders';
import MenuEditor from './sections/menu-editor';
import OperationsLists from './sections/operations-lists';
import Payouts from './sections/payouts';
import PerformanceSummary from './sections/performance-summary';
import SystemNotices from './sections/system-notices';
import { DashboardProvider } from './state/dashboard-context';
import styles from './dashboard.module.scss';

/**
 * PIE Hub - a fictional back-office for an artisan pie bakery.
 *
 * Every component exported by `@justeattakeaway/pie-webc` appears somewhere on this
 * page, but always in a role the section actually needs — there is no variant
 * gallery. Not every prop combination is covered, and that is deliberate: showing a
 * component doing a real job is more useful here than enumerating its options.
 *
 * Structure:
 *
 * - `DashboardProvider` — a `useReducer` store shared through context, which every
 *   controlled PIE component reads from and dispatches into.
 * - `DashboardOverlays` — the modals, the standalone toast and both toast providers,
 *   mounted once at the root so any section can raise a toast via `toaster`.
 * - One component per dashboard section, each documenting what it covers.
 *
 * The `js-dashboard-page` class is a plain global hook (not a CSS-module class) that
 * lets `main.scss` opt this route out of the narrow content column the component
 * demo pages use.
 */
export default function Dashboard () {
    const router = useRouter();

    return (
        <DashboardProvider>
            <div className={`js-dashboard-page ${styles.dashboard}`} data-test-id="dashboard-page">
                <ConsentBanner />
                <DashboardTopbar />

                <div className={styles.shell}>
                    <div className={styles.breadcrumbRow}>
                        {/*
                          * The last breadcrumb item has no `href`, which marks it as the
                          * current page.
                          */}
                        <PieBreadcrumb aria={{ label: 'Dashboard breadcrumb' }} data-test-id="dashboard-breadcrumb">
                            <PieBreadcrumbItem href="/">Aperture</PieBreadcrumbItem>
                            <PieBreadcrumbItem href="/components/list">Components</PieBreadcrumbItem>
                            <PieBreadcrumbItem>PIE Hub</PieBreadcrumbItem>
                        </PieBreadcrumb>

                        <div className={styles.row}>
                            <PieTag variant="brand-03" isStrong size="small">Prototype</PieTag>
                            {/*
                              * `tag="button"` routes through the Next.js router, matching the
                              * navigation pattern used by the rest of this app.
                              */}
                            <PieLink
                                tag="button"
                                type="button"
                                size="small"
                                isStandalone
                                iconPlacement="leading"
                                data-test-id="dashboard-back-link"
                                onClick={() => router.push('/')}
                            >
                                <IconArrowLeft slot="icon" />
                                Back to Aperture home
                            </PieLink>
                        </div>
                    </div>

                    <SystemNotices />
                    <PerformanceSummary />
                    <LiveOrders />
                    <OperationsLists />
                    <MenuEditor />
                    <Payouts />
                    <InsightsPanel />
                </div>

                <DashboardFooter />
                <DashboardOverlays />
            </div>
        </DashboardProvider>
    );
}
