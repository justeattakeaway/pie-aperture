'use client';

import { PieButton } from '@justeattakeaway/pie-webc/react/button.js';
import { PieNotification } from '@justeattakeaway/pie-webc/react/notification.js';
import { toaster } from '@justeattakeaway/pie-webc/components/toast-provider.js';
import { IconMoped } from '@justeattakeaway/pie-icons-webc/dist/react/IconMoped.js';
import { IconPlusCircle } from '@justeattakeaway/pie-icons-webc/dist/react/IconPlusCircle.js';
import { useDashboard } from '../state/dashboard-context';
import styles from '../dashboard.module.scss';

/**
 * Three `pie-notification` instances covering the component's main shapes:
 *
 * 1. A `full-width` warning with **prop-based** actions (one of which is a link).
 * 2. An `inline-content` success notification with **slotted** `pie-button` actions
 *    and a custom `icon` slot — note the docs forbid mixing props and slots for the
 *    same action, so these two examples stay separate.
 * 3. A `compact` info notification with `hasStackedActions` and no icon.
 */
export default function SystemNotices () {
    const { state, dispatch } = useDashboard();

    return (
        <div className={styles.noticeStack}>
            <PieNotification
                data-test-id="notice-service"
                variant="warning"
                position="full-width"
                heading="Courier availability is reduced"
                headingLevel="h2"
                isDismissible
                hasStackedActions
                isOpen={state.notices.isServiceNoticeOpen}
                leadingAction={{
                    text: 'View courier status',
                    href: 'https://status.piehub.example',
                    target: '_blank',
                    rel: 'noopener noreferrer',
                    size: 'small-productive',
                }}
                supportingAction={{
                    text: 'Download incident report',
                    href: '/logo.png',
                    download: 'delivery-incident-report.png',
                    size: 'small-productive',
                }}
                aria={{ close: 'Dismiss the courier availability notice' }}
                onPieNotificationClose={() => dispatch({ type: 'notices/close', notice: 'isServiceNoticeOpen' })}
                onPieNotificationLeadingActionClick={() => toaster.create({
                    message: 'Opening the courier status page.',
                    variant: 'info',
                })}
            >
                Heavy rain across the region means delivery estimates are running roughly
                12 minutes longer than usual. Collection orders are unaffected.
            </PieNotification>

            <PieNotification
                data-test-id="notice-payout"
                variant="success"
                position="inline-content"
                heading="Your weekly payout has been sent"
                headingLevel="h3"
                isDismissible
                isOpen={state.notices.isPayoutNoticeOpen}
                aria={{ close: 'Dismiss the payout notice' }}
                onPieNotificationClose={() => dispatch({ type: 'notices/close', notice: 'isPayoutNoticeOpen' })}
            >
                <IconMoped slot="icon" />
                £7,055.53 is on its way to the account ending 4417. It should clear within
                two working days.
                {/*
                  * Slotted actions: only `pie-button` is supported here, and the
                  * `pie-notification-*-action-click` events are not emitted for slotted
                  * actions, so the handlers live on the buttons themselves.
                  */}
                <PieButton
                    slot="leadingAction"
                    type="button"
                    variant="primary"
                    size="small-productive"
                    onClick={() => toaster.create({
                        message: 'Remittance advice downloaded.',
                        variant: 'success',
                        isDismissible: true,
                    })}
                >
                    <IconPlusCircle slot="icon" />
                    Get remittance advice
                </PieButton>
                <PieButton
                    slot="supportingAction"
                    type="button"
                    variant="ghost"
                    size="small-productive"
                    onClick={() => dispatch({ type: 'notices/close', notice: 'isPayoutNoticeOpen' })}
                >
                    Dismiss
                </PieButton>
            </PieNotification>

            <PieNotification
                data-test-id="notice-kitchen"
                variant="info"
                position="inline-content"
                size="small"
                isCompact
                hideIcon
                isDismissible
                heading="Bakery printer is offline"
                headingLevel="h3"
                isOpen={state.notices.isKitchenNoticeOpen}
                leadingAction={{ text: 'Reconnect', size: 'xsmall' }}
                supportingAction={{ text: 'Ignore', size: 'xsmall' }}
                aria={{ close: 'Dismiss the printer notice' }}
                onPieNotificationClose={() => dispatch({ type: 'notices/close', notice: 'isKitchenNoticeOpen' })}
                onPieNotificationLeadingActionClick={() => toaster.create({
                    message: 'Reconnecting to the bakery printer…',
                    variant: 'neutral',
                })}
                onPieNotificationSupportingActionClick={() => dispatch({ type: 'notices/close', notice: 'isKitchenNoticeOpen' })}
            >
                New order dockets will not print until the printer is back online.
            </PieNotification>
        </div>
    );
}
