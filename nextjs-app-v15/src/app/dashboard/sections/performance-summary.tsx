'use client';

import { PieCard } from '@justeattakeaway/pie-webc/react/card.js';
import { PieChip } from '@justeattakeaway/pie-webc/react/chip.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { PieIconWithBackground } from '@justeattakeaway/pie-webc/react/icon-with-background.js';
import { toaster } from '@justeattakeaway/pie-webc/components/toast-provider.js';
import { IconArrowDown } from '@justeattakeaway/pie-icons-webc/dist/react/IconArrowDown.js';
import { IconArrowUp } from '@justeattakeaway/pie-icons-webc/dist/react/IconArrowUp.js';
import { IconCoins } from '@justeattakeaway/pie-icons-webc/dist/react/IconCoins.js';
import { IconOffer } from '@justeattakeaway/pie-icons-webc/dist/react/IconOffer.js';
import { IconRefresh } from '@justeattakeaway/pie-icons-webc/dist/react/IconRefresh.js';
import { IconStarFilled } from '@justeattakeaway/pie-icons-webc/dist/react/IconStarFilled.js';
import { IconPie } from '@justeattakeaway/pie-icons-webc/dist/react/IconPie.js';
import { IconVegan } from '@justeattakeaway/pie-icons-webc/dist/react/IconVegan.js';
import { IconVegetarian } from '@justeattakeaway/pie-icons-webc/dist/react/IconVegetarian.js';
import { dietaryFilters } from '../state/dashboard-data';
import { useDashboard } from '../state/dashboard-context';
import styles from '../dashboard.module.scss';
import type { ReactNode } from 'react';

type Kpi = {
    id: string;
    label: string;
    value: string;
    trend: string;
    direction: 'up' | 'down';
    icon: ReactNode;
    shape: 'circle' | 'square';
};

const kpis: Kpi[] = [
    { id: 'orders', label: 'Pies sold today', value: '128', trend: '+12% vs yesterday', direction: 'up', icon: <IconPie />, shape: 'circle' },
    { id: 'revenue', label: 'Gross revenue', value: '£2,411', trend: '+8% vs yesterday', direction: 'up', icon: <IconCoins />, shape: 'circle' },
    { id: 'rating', label: 'Average rating', value: '4.7', trend: '−0.1 vs last week', direction: 'down', icon: <IconStarFilled />, shape: 'square' },
    { id: 'promos', label: 'Promo redemptions', value: '31', trend: '+21% vs last week', direction: 'up', icon: <IconOffer />, shape: 'square' },
];

const timeRanges: Array<{ id: 'today' | 'week' | 'month'; label: string }> = [
    { id: 'today', label: 'Today' },
    { id: 'week', label: 'This week' },
    { id: 'month', label: 'This month' },
];

const dietaryIcons: Record<string, ReactNode> = {
    vegan: <IconVegan slot="icon" />,
    vegetarian: <IconVegetarian slot="icon" />,
};

/**
 * "Today at a glance" — the KPI row plus the filters that scope it.
 *
 * Each KPI is a `pie-card` acting as a drill-down button, with a
 * `pie-icon-with-background` for its glyph. The three chip groups cover the
 * component's distinct behaviours as they naturally occur: `type="button"` for the
 * single-select reporting period, `type="checkbox"` for multi-select dietary
 * filters, and dismissible chips for the promotions currently running.
 *
 * `pie-chip` is controlled — it never mutates its own `isSelected` — so every
 * selection change is routed through the reducer.
 */
export default function PerformanceSummary () {
    const { state, dispatch } = useDashboard();
    const { filters } = state;

    const handleSync = () => {
        dispatch({ type: 'filters/setSyncing', isSyncing: true });
        window.setTimeout(() => {
            dispatch({ type: 'filters/setSyncing', isSyncing: false });
            toaster.create({
                message: 'Performance figures are up to date.',
                variant: 'success',
                isDismissible: true,
            });
        }, 1600);
    };

    return (
        <section className={styles.section} aria-labelledby="summary-heading">
            <div className={styles.sectionHeader}>
                <div>
                    <h2 id="summary-heading" className={`u-font-heading-m ${styles.sectionHeading}`}>Today at a glance</h2>
                    <p className={`u-font-body-s ${styles.sectionIntro}`}>
                        Trading performance for Aperture Pie Co. Figures refresh every five minutes.
                    </p>
                </div>

                {/*
                  * Single-select chip group. `type="button"` chips emit `click`, so the
                  * group is coordinated in the reducer and given `role="group"` for a11y.
                  */}
                <div className={styles.sectionActions} role="group" aria-label="Choose a reporting period">
                    {timeRanges.map(({ id, label }) => (
                        <PieChip
                            key={id}
                            type="button"
                            variant="outline"
                            data-test-id={`summary-range-${id}`}
                            isSelected={filters.timeRange === id}
                            onClick={() => dispatch({ type: 'filters/setTimeRange', timeRange: id })}
                        >
                            {label}
                        </PieChip>
                    ))}

                    {/* A chip that shows its own loading indicator while work is in flight. */}
                    <PieChip
                        type="button"
                        variant="ghost"
                        data-test-id="summary-sync-chip"
                        isLoading={filters.isSyncing}
                        aria={{ label: filters.isSyncing ? 'Syncing performance figures' : 'Sync performance figures' }}
                        onClick={handleSync}
                    >
                        <IconRefresh slot="icon" />
                        {filters.isSyncing ? 'Syncing…' : 'Sync'}
                    </PieChip>
                </div>
            </div>

            <div className={styles.kpiGrid}>
                {kpis.map((kpi, index) => (
                    <PieCard
                        key={kpi.id}
                        tag="button"
                        /* Rotate through the outline variant so both surfaces are covered. */
                        variant={index % 2 === 0 ? 'default' : 'outline'}
                        padding="e"
                        data-test-id={`summary-card-${kpi.id}`}
                        aria={{ label: `${kpi.label}: ${kpi.value}. ${kpi.trend}` }}
                        onClick={() => toaster.create({
                            message: `Drilling into ${kpi.label.toLowerCase()}.`,
                            variant: 'info',
                            isDismissible: true,
                        })}
                    >
                        <div className={styles.kpiCardBody}>
                            <div className={styles.kpiCardTop}>
                                <p className={`u-font-caption ${styles.kpiLabel}`}>{kpi.label}</p>
                                {/*
                                  * `pie-icon-with-background` sizes both the container and the
                                  * slotted icon, so the icon needs no size of its own.
                                  */}
                                <PieIconWithBackground shape={kpi.shape} size="medium">
                                    {kpi.icon}
                                </PieIconWithBackground>
                            </div>
                            <p className={`u-font-heading-l ${styles.kpiValue}`}>{kpi.value}</p>
                            <p
                                className={`u-font-caption-strong ${styles.kpiTrend} ${
                                    kpi.direction === 'up' ? styles.kpiTrendUp : styles.kpiTrendDown
                                }`}
                            >
                                {kpi.direction === 'up' ? <IconArrowUp size="xs" /> : <IconArrowDown size="xs" />}
                                {kpi.trend}
                            </p>
                        </div>
                    </PieCard>
                ))}
            </div>

            <PieDivider label="Menu filters" />

            <div className={styles.panel}>
                <h3 className={`u-font-heading-s ${styles.sectionHeading}`}>Dietary filters</h3>

                <div className={styles.row} role="group" aria-label="Filter the pie menu by dietary preference">
                    {dietaryFilters.map(({ id, label }) => (
                        <PieChip
                            key={id}
                            type="checkbox"
                            data-test-id={`summary-dietary-${id}`}
                            isSelected={Boolean(filters.dietaryLabels[id])}
                            onChange={() => dispatch({ type: 'filters/toggleDietaryLabel', id })}
                        >
                            {dietaryIcons[id]}
                            {label}
                        </PieChip>
                    ))}

                    <PieChip type="button" disabled data-test-id="summary-dietary-disabled">
                        Nut free (supplier audit pending)
                    </PieChip>
                </div>

                <PieDivider />

                <h3 className={`u-font-heading-s ${styles.sectionHeading}`}>Active promotions</h3>

                <div className={styles.row}>
                    {['20% off savoury pies', 'Free delivery over £25', 'Pie and mash Tuesdays']
                        .filter((promo) => !filters.dismissedTags.includes(promo))
                        .map((promo) => (
                            <PieChip
                                key={promo}
                                type="button"
                                variant="default"
                                isSelected
                                isDismissible
                                data-test-id={`summary-promo-${promo.slice(0, 6)}`}
                                aria={{ close: `Remove the ${promo} promotion` }}
                                onClose={() => dispatch({ type: 'filters/dismissTag', id: promo })}
                            >
                                {promo}
                            </PieChip>
                        ))}

                    {filters.dismissedTags.length > 0 && (
                        <PieChip
                            type="button"
                            variant="translucent"
                            data-test-id="summary-restore-promos"
                            onClick={() => dispatch({ type: 'filters/restoreTags' })}
                        >
                            Restore {filters.dismissedTags.length} removed
                        </PieChip>
                    )}
                </div>

            </div>
        </section>
    );
}
