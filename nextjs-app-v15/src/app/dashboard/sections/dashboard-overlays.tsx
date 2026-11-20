'use client';

import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { PieList } from '@justeattakeaway/pie-webc/react/list.js';
import { PieListItem } from '@justeattakeaway/pie-webc/react/list-item.js';
import { PieModal } from '@justeattakeaway/pie-webc/react/modal.js';
import { PieSwitch } from '@justeattakeaway/pie-webc/react/switch.js';
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';
import { PieThumbnail } from '@justeattakeaway/pie-webc/react/thumbnail.js';
import { PieToast } from '@justeattakeaway/pie-webc/react/toast.js';
import { PieToastProvider } from '@justeattakeaway/pie-webc/react/toast-provider.js';
import { toaster } from '@justeattakeaway/pie-webc/components/toast-provider.js';
import { IconCheck } from '@justeattakeaway/pie-icons-webc/dist/react/IconCheck.js';
import { statusLabel, statusTagVariant } from '../state/dashboard-data';
import { useDashboard } from '../state/dashboard-context';
import styles from '../dashboard.module.scss';

/**
 * Overlays: two `pie-modal` instances, a standalone `pie-toast` and two
 * `pie-toast-provider` instances.
 *
 * The order modal uses the `image` slot (`imageSlotMode="image"`), the
 * `headerContent` slot and a custom `footer` slot. The publish modal instead uses
 * the `leadingAction` / `supportingAction` props, `illustration` image mode and a
 * pinned footer, plus its own scoped toast provider — providers each maintain an
 * independent queue, and `providerId` targets a specific one.
 */
export default function DashboardOverlays () {
    const { state, dispatch } = useDashboard();
    const selectedOrder = state.orders.rows.find((order) => order.id === state.orders.selectedOrderId);

    return (
        <>
            {/* Page-level toast provider. All `toaster.create()` calls land here. */}
            <PieToastProvider
                id="dashboard-toasts"
                position="bottom-right"
                data-test-id="dashboard-toast-provider"
                options={{ isDismissible: true, duration: 4000 }}
            />

            {/*
              * A standalone `pie-toast` rather than one queued through `toaster`, because
              * this reflects ongoing state instead of a transient confirmation: while new
              * orders are paused the message must stay put, so `duration={null}` disables
              * auto-dismiss and the toast is tied directly to `orders.isPaused`.
              */}
            <PieToast
                isOpen={state.orders.isPaused}
                variant="warning"
                isStrong
                isDismissible
                duration={null}
                data-test-id="orders-paused-toast"
                message="New orders are paused. Customers cannot order until you resume."
                leadingAction={{ text: 'Resume orders', ariaLabel: 'Resume taking new orders' }}
                aria={{ close: 'Hide the paused-orders message' }}
                onPieToastClose={() => dispatch({ type: 'orders/setPaused', isPaused: false })}
                onPieToastLeadingActionClick={() => {
                    dispatch({ type: 'orders/setPaused', isPaused: false });
                    toaster.create({
                        message: 'Taking new orders again.',
                        variant: 'success',
                        isDismissible: true,
                    });
                }}
            />

            {/* ------------------------------------------------- order detail modal -- */}
            <PieModal
                isOpen={state.overlays.isOrderModalOpen}
                heading={selectedOrder ? `Order ${selectedOrder.reference}` : 'Order'}
                headingLevel="h2"
                isHeadingEmphasised
                size="medium"
                position="center"
                isDismissible
                hasBackButton
                isFooterPinned={false}
                isFullWidthBelowMid
                imageSlotMode="image"
                imageSlotAspectRatio="small"
                data-test-id="dashboard-order-modal"
                aria={{ close: 'Close the order details', back: 'Go back to live orders' }}
                onPieModalClose={() => dispatch({ type: 'overlays/setOrderModal', isOpen: false })}
                onPieModalBack={() => dispatch({ type: 'overlays/setOrderModal', isOpen: false })}
            >
                {/* Slot order is: image, header, default content, footer. */}
                <PieThumbnail
                    slot="image"
                    src="/logo.png"
                    alt=""
                    size={128}
                    aspectRatio="16by9"
                    backgroundColor="subtle"
                />

                <div slot="headerContent" className={styles.row}>
                    {selectedOrder && (
                        <PieTag variant={statusTagVariant[selectedOrder.status]} isStrong>
                            {statusLabel[selectedOrder.status]}
                        </PieTag>
                    )}
                    <PieTag variant="neutral" size="small">{selectedOrder?.channel}</PieTag>
                    <PieTag variant="outline" size="small">Placed {selectedOrder?.placedAt}</PieTag>
                </div>

                {selectedOrder && (
                    <div className={styles.stackTight}>
                        <PieList aria-label={`Details for order ${selectedOrder.reference}`}>
                            <PieListItem hasDivider primaryText="Customer" metaText={selectedOrder.customer} />
                            <PieListItem hasDivider primaryText="Items" metaText={String(selectedOrder.items)} />
                            <PieListItem hasDivider primaryText="Order total" metaText={selectedOrder.total} isBold />
                            <PieListItem
                                primaryText="Customer note"
                                secondaryText={selectedOrder.note ?? 'No note left for this order.'}
                            />
                        </PieList>

                        <PieDivider label="Bakery" />

                        <PieList aria-label="Bakery toggles for this order">
                            <PieListItem
                                interactionType="switch"
                                hasDivider
                                primaryText="Priority bake"
                                secondaryText="Move this order to the front of the oven queue"
                            >
                                <PieSwitch slot="trailing" name="priorityPrep" />
                            </PieListItem>
                            <PieListItem
                                interactionType="switch"
                                primaryText="Notify the customer on delay"
                                secondaryText="Sends a push notification if the bake runs over"
                            >
                                <PieSwitch slot="trailing" name="notifyOnDelay" checked />
                            </PieListItem>
                        </PieList>
                    </div>
                )}

                {/*
                  * Custom footer slot instead of the action props, so the footer can hold
                  * arbitrary content alongside the buttons.
                  */}
                <div slot="footer" className={styles.formFooter}>
                    <span className={`u-font-caption ${styles.formStatus}`}>
                        Changes apply immediately.
                    </span>
                    <PieButton
                        type="button"
                        variant="ghost"
                        size="small-productive"
                        onClick={() => dispatch({ type: 'overlays/setOrderModal', isOpen: false })}
                    >
                        Close
                    </PieButton>
                    <PieButton
                        type="button"
                        variant="primary"
                        size="small-productive"
                        onClick={() => {
                            if (selectedOrder) {
                                dispatch({ type: 'orders/setStatus', id: selectedOrder.id, status: 'ready' });
                            }
                            dispatch({ type: 'overlays/setOrderModal', isOpen: false });
                            toaster.create({
                                message: `Order ${selectedOrder?.reference} marked as ready.`,
                                variant: 'success',
                                isDismissible: true,
                            });
                        }}
                    >
                        <IconCheck slot="icon" />
                        Mark as ready
                    </PieButton>
                </div>
            </PieModal>

            {/* ------------------------------------------------ publish menu modal --- */}
            <PieModal
                isOpen={state.overlays.isPublishModalOpen}
                heading="Publish pie menu changes?"
                headingLevel="h2"
                size="small"
                position="top"
                isDismissible
                hasStackedActions
                isLoading={state.overlays.isPublishing}
                backgroundColor="brand-03-subtle"
                imageSlotMode="illustration"
                data-test-id="dashboard-publish-modal"
                leadingAction={{ text: 'Publish now', variant: 'primary' }}
                supportingAction={{ text: 'Keep editing', variant: 'ghost' }}
                returnFocusAfterCloseSelector="[data-test-id='operations-action-publish']"
                aria={{
                    close: 'Close the publish confirmation',
                    loading: 'Publishing your menu changes',
                }}
                onPieModalClose={() => dispatch({ type: 'overlays/setPublishModal', isOpen: false })}
                onPieModalSupportingActionClick={() => dispatch({ type: 'overlays/setPublishModal', isOpen: false })}
                onPieModalLeadingActionClick={() => {
                    dispatch({ type: 'overlays/setPublishing', isPublishing: true });
                    window.setTimeout(() => {
                        dispatch({ type: 'overlays/setPublishing', isPublishing: false });
                        dispatch({ type: 'overlays/setPublishModal', isOpen: false });
                        toaster.create({
                            message: 'Pie menu published to all shop fronts.',
                            variant: 'success',
                            isDismissible: true,
                            providerId: 'dashboard-toasts',
                        });
                    }, 1500);
                }}
            >
                <PieThumbnail slot="image" src="/logo.png" alt="" size={96} hasPadding backgroundColor="subtle" />

                <p className="u-font-body-s">
                    Your three draft pies will go live on every shop front within five minutes.
                    Customers with the menu already open will see the update on their next refresh.
                </p>

                {/*
                  * A second toast provider, scoped to the modal. Each provider keeps its
                  * own queue, so confirmations raised while the dialog is open appear over
                  * it rather than behind it.
                  */}
                <PieToastProvider id="publish-modal-toasts" position="bottom-center" />
            </PieModal>
        </>
    );
}
