'use client';

import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieDataTableBody } from '@justeattakeaway/pie-webc/react/data-table-body.js';
import { PieDataTableCell } from '@justeattakeaway/pie-webc/react/data-table-cell.js';
import { PieDataTableContents } from '@justeattakeaway/pie-webc/react/data-table-contents.js';
import { PieDataTableHead } from '@justeattakeaway/pie-webc/react/data-table-head.js';
import { PieDataTableHeadCell } from '@justeattakeaway/pie-webc/react/data-table-head-cell.js';
import { PieDataTableRow } from '@justeattakeaway/pie-webc/react/data-table-row.js';
import { PieIconButton } from '@justeattakeaway/pie-webc/react/icon-button.js';
import { PieSpinner } from '@justeattakeaway/pie-webc/react/spinner.js';
import { PieTabs } from '@justeattakeaway/pie-webc/react/tabs.js';
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';
import { toaster } from '@justeattakeaway/pie-webc/components/toast-provider.js';
import { IconCheck } from '@justeattakeaway/pie-icons-webc/dist/react/IconCheck.js';
import { IconClose } from '@justeattakeaway/pie-icons-webc/dist/react/IconClose.js';
import { IconDownload } from '@justeattakeaway/pie-icons-webc/dist/react/IconDownload.js';
import { IconMoreVertical } from '@justeattakeaway/pie-icons-webc/dist/react/IconMoreVertical.js';
import { IconPrinter } from '@justeattakeaway/pie-icons-webc/dist/react/IconPrinter.js';
import { IconRefresh } from '@justeattakeaway/pie-icons-webc/dist/react/IconRefresh.js';
import { statusLabel, statusTagVariant } from '../state/dashboard-data';
import { useDashboard } from '../state/dashboard-context';
import styles from '../dashboard.module.scss';

/**
 * The live order queue.
 *
 * The table is built from the composed `pie-data-table-*` sub-components rather
 * than the `columns` + `data` form, because each row needs real components in its
 * cells — a status `pie-tag` and four `pie-icon-button` actions. (The simpler
 * data-driven form is used for the payout tables, where every cell is a value.)
 */
export default function LiveOrders () {
    const { state, dispatch } = useDashboard();
    const { orders } = state;

    const handleRefresh = () => {
        dispatch({ type: 'orders/setRefreshing', isRefreshing: true });
        window.setTimeout(() => dispatch({ type: 'orders/setRefreshing', isRefreshing: false }), 1400);
    };

    const handleRowAction = (id: string, message: string) => {
        dispatch({ type: 'orders/setRowPending', id, isPending: true });
        window.setTimeout(() => {
            dispatch({ type: 'orders/setRowPending', id, isPending: false });
            toaster.create({ message, variant: 'success', isDismissible: true });
        }, 900);
    };

    const openOrder = (id: string) => {
        dispatch({ type: 'orders/select', id });
        dispatch({ type: 'overlays/setOrderModal', isOpen: true });
    };

    return (
        <section className={styles.section} aria-labelledby="orders-heading">
            <div className={styles.sectionHeader}>
                <div>
                    <h2 id="orders-heading" className={`u-font-heading-m ${styles.sectionHeading}`}>Live orders</h2>
                    <p className={`u-font-body-s ${styles.sectionIntro}`}>
                        Accept, print and track everything in the oven right now.
                    </p>
                </div>
                <div className={styles.sectionActions}>
                    <PieButton
                        type="button"
                        variant="secondary"
                        size="small-productive"
                        isLoading={orders.isRefreshing}
                        data-test-id="orders-refresh"
                        onClick={handleRefresh}
                    >
                        <IconRefresh slot="icon" />
                        Refresh
                    </PieButton>
                    {/* `tag="a"` + `download` turns the button into a file download. */}
                    <PieButton
                        tag="a"
                        href="/logo.png"
                        download="aperture-orders-export.png"
                        variant="outline"
                        size="small-productive"
                        iconPlacement="trailing"
                        data-test-id="orders-export"
                    >
                        Export
                        <IconDownload slot="icon" />
                    </PieButton>
                </div>
            </div>

            <div className={styles.panel}>
                {/*
                  * `pie-tabs` belongs here — this is where the All / In the oven / Ready
                  * filter strip goes. The component is still an unimplemented placeholder
                  * in pie-webc 0.11.6 (no props, slots or events; it renders scaffolding
                  * text), so it is mounted in its correct position rather than faked with
                  * something else. Swap the real tabs in when the component lands.
                  */}
                <div className={styles.tabsPlaceholder}>
                    <PieTabs data-test-id="orders-tabs" />
                    <p className="u-font-caption">
                        Order status tabs — awaiting <code>pie-tabs</code>, which is not
                        implemented yet.
                    </p>
                </div>

                <div className={styles.tableScroll}>
                    <PieDataTableContents data-test-id="orders-table">
                        <PieDataTableHead>
                            <PieDataTableRow>
                                <PieDataTableHeadCell>Order</PieDataTableHeadCell>
                                <PieDataTableHeadCell>Customer</PieDataTableHeadCell>
                                <PieDataTableHeadCell textAlign="center">Channel</PieDataTableHeadCell>
                                <PieDataTableHeadCell textAlign="right">Items</PieDataTableHeadCell>
                                <PieDataTableHeadCell textAlign="right">Total</PieDataTableHeadCell>
                                <PieDataTableHeadCell textAlign="center">Status</PieDataTableHeadCell>
                                {/* Hidden from view but still announced as the actions column. */}
                                <PieDataTableHeadCell textAlign="right">Actions</PieDataTableHeadCell>
                            </PieDataTableRow>
                        </PieDataTableHead>
                        <PieDataTableBody>
                            {orders.rows.map((order) => (
                                <PieDataTableRow
                                    key={order.id}
                                    isSelected={orders.selectedOrderId === order.id}
                                    data-test-id={`orders-row-${order.id}`}
                                >
                                    <PieDataTableCell>
                                        <span className="u-font-body-strong-s">{order.reference}</span>
                                    </PieDataTableCell>
                                    <PieDataTableCell>
                                        <span className={styles.orderTableCustomer}>
                                            <span className="u-font-body-s">{order.customer}</span>
                                            <span className="u-font-caption">Placed {order.placedAt}</span>
                                        </span>
                                    </PieDataTableCell>
                                    <PieDataTableCell textAlign="center">
                                        <PieTag variant="neutral" size="small">{order.channel}</PieTag>
                                    </PieDataTableCell>
                                    <PieDataTableCell textAlign="right">{order.items}</PieDataTableCell>
                                    <PieDataTableCell textAlign="right">
                                        <span className="u-font-body-strong-s">{order.total}</span>
                                    </PieDataTableCell>
                                    <PieDataTableCell textAlign="center">
                                        <PieTag variant={statusTagVariant[order.status]} size="small" isStrong>
                                            {statusLabel[order.status]}
                                        </PieTag>
                                    </PieDataTableCell>
                                    <PieDataTableCell textAlign="right">
                                        <span className={styles.orderTableActions}>
                                            <PieIconButton
                                                variant="ghost-secondary"
                                                size="xsmall"
                                                aria={{ label: `Print order ${order.reference}` }}
                                                onClick={() => handleRowAction(order.id, `Order ${order.reference} sent to the printer.`)}
                                                isLoading={orders.pendingRowIds.includes(order.id)}
                                            >
                                                <IconPrinter />
                                            </PieIconButton>
                                            <PieIconButton
                                                variant="ghost-secondary"
                                                size="xsmall"
                                                disabled={order.status === 'cancelled' || order.status === 'collected'}
                                                aria={{ label: `Mark order ${order.reference} as ready` }}
                                                onClick={() => dispatch({ type: 'orders/setStatus', id: order.id, status: 'ready' })}
                                            >
                                                <IconCheck />
                                            </PieIconButton>
                                            <PieIconButton
                                                variant="ghost-secondary"
                                                size="xsmall"
                                                disabled={order.status === 'cancelled'}
                                                aria={{ label: `Cancel order ${order.reference}` }}
                                                onClick={() => dispatch({ type: 'orders/setStatus', id: order.id, status: 'cancelled' })}
                                            >
                                                <IconClose />
                                            </PieIconButton>
                                            <PieIconButton
                                                variant="secondary"
                                                size="xsmall"
                                                aria={{
                                                    label: `Open details for order ${order.reference}`,
                                                    haspopup: 'dialog',
                                                    expanded: state.overlays.isOrderModalOpen && orders.selectedOrderId === order.id,
                                                }}
                                                data-test-id={`orders-open-${order.id}`}
                                                onClick={() => openOrder(order.id)}
                                            >
                                                <IconMoreVertical />
                                            </PieIconButton>
                                        </span>
                                    </PieDataTableCell>
                                </PieDataTableRow>
                            ))}
                        </PieDataTableBody>
                    </PieDataTableContents>
                </div>

                {orders.isRefreshing && (
                    <div className={styles.spinnerRow} aria-live="polite">
                        <PieSpinner size="small" variant="brand" aria={{ label: 'Refreshing live orders' }} />
                        <span className="u-font-body-s">Fetching the latest orders…</span>
                    </div>
                )}
            </div>

        </section>
    );
}
