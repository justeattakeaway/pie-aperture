'use client';

import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieDataTable } from '@justeattakeaway/pie-webc/react/data-table.js';
import { PieDataTableHeader } from '@justeattakeaway/pie-webc/react/data-table-header.js';
import { PieFormLabel } from '@justeattakeaway/pie-webc/react/form-label.js';
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';
import { toaster } from '@justeattakeaway/pie-webc/components/toast-provider.js';
import { payoutColumns, payoutRows, payoutTotals } from '../state/dashboard-data';
import { useDashboard } from '../state/dashboard-context';
import type { DashboardState } from '../state/dashboard-types';
import styles from '../dashboard.module.scss';

// The CSS-only radio export from pie-css, used for the card-style picker below.
import '@justeattakeaway/pie-css/dist/components/radio.css';

const payoutDays: Array<{
    value: DashboardState['payouts']['day'];
    label: string;
    cutOff: string;
    arrives: string;
}> = [
    { value: 'monday', label: 'Monday', cutOff: 'Sunday 23:59', arrives: 'Wednesday' },
    { value: 'wednesday', label: 'Wednesday', cutOff: 'Tuesday 23:59', arrives: 'Friday' },
    { value: 'friday', label: 'Friday', cutOff: 'Thursday 23:59', arrives: 'Tuesday' },
];

/**
 * Payouts.
 *
 * `pie-data-table` is used in its data-driven form here — `columns` + `data` +
 * `additionalRows` for the totals — because every cell is a plain value. The
 * scheduled-payouts table below it has no rows, so it renders its default slot as
 * an empty state.
 *
 * The payout-day picker uses the `c-radio` CSS-only export rather than `pie-radio`.
 * That is the case the pie-css docs call out for it: each option is a card with its
 * own layout and supporting detail, which is more than `pie-radio` is built for.
 */
export default function Payouts () {
    const { state, dispatch } = useDashboard();

    return (
        <section className={styles.section} aria-labelledby="payouts-heading">
            <div className={styles.sectionHeader}>
                <div>
                    <h2 id="payouts-heading" className={`u-font-heading-m ${styles.sectionHeading}`}>Payouts</h2>
                    <p className={`u-font-body-s ${styles.sectionIntro}`}>
                        Completed trading weeks, and when your next payment is due.
                    </p>
                </div>
            </div>

            <div className={styles.tableScroll}>
                <PieDataTable
                    columns={payoutColumns}
                    data={payoutRows}
                    additionalRows={payoutTotals}
                    data-test-id="payouts-table"
                >
                    <PieDataTableHeader
                        slot="table-header"
                        heading="Payout history"
                        subHeading="The last four completed trading weeks"
                    >
                        <PieButton slot="action-button" type="button" variant="secondary" size="xsmall">
                            Download CSV
                        </PieButton>
                        <PieButton slot="action-button" type="button" variant="secondary" size="xsmall">
                            Email to accountant
                        </PieButton>
                    </PieDataTableHeader>
                </PieDataTable>
            </div>

            <PieDataTable columns={payoutColumns} data={[]} data-test-id="payouts-table-empty">
                <PieDataTableHeader
                    slot="table-header"
                    heading="Scheduled payouts"
                    subHeading="Nothing scheduled for the current week"
                />
                <div className={styles.tableEmptyState}>
                    <p className="u-font-body-s">
                        This week is still in progress. Your next payout will appear here once it
                        closes on Sunday night.
                    </p>
                    <PieButton
                        type="button"
                        variant="ghost"
                        size="small-productive"
                        onClick={() => toaster.create({
                            message: 'We will email you when the payout is confirmed.',
                            variant: 'success',
                            isDismissible: true,
                        })}
                    >
                        Notify me when it lands
                    </PieButton>
                </div>
            </PieDataTable>

            <div className={styles.panel}>
                <fieldset className={styles.fieldset}>
                    <legend className={styles.legend}>
                        <PieFormLabel>Payout day</PieFormLabel>
                    </legend>
                    <p className={`u-font-caption ${styles.subHeading}`}>
                        Changing this takes effect from the next trading week.
                    </p>

                    <div className={styles.payoutDayGrid}>
                        {payoutDays.map((day) => (
                            <label
                                key={day.value}
                                className={styles.payoutDayCard}
                                data-selected={state.payouts.day === day.value}
                            >
                                <span className={styles.payoutDayTop}>
                                    <input
                                        type="radio"
                                        className="c-radio"
                                        name="payoutDay"
                                        value={day.value}
                                        checked={state.payouts.day === day.value}
                                        onChange={() => dispatch({ type: 'payouts/setDay', day: day.value })}
                                    />
                                    <span className="u-font-body-strong-s">{day.label}</span>
                                    {state.payouts.day === day.value && (
                                        <PieTag variant="success" size="small" isStrong>Current</PieTag>
                                    )}
                                </span>
                                <span className="u-font-caption">Orders up to {day.cutOff}</span>
                                <span className="u-font-caption">Cleared funds by {day.arrives}</span>
                            </label>
                        ))}
                    </div>
                </fieldset>
            </div>
        </section>
    );
}
