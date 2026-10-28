'use client';

import NextLink from 'next/link';
import { PieCheckbox } from '@justeattakeaway/pie-webc/react/checkbox.js';
import { PieCheckboxGroup } from '@justeattakeaway/pie-webc/react/checkbox-group.js';
import { PieFormLabel } from '@justeattakeaway/pie-webc/react/form-label.js';
import { PieList } from '@justeattakeaway/pie-webc/react/list.js';
import { PieListItem } from '@justeattakeaway/pie-webc/react/list-item.js';
import { PieRadio } from '@justeattakeaway/pie-webc/react/radio.js';
import { PieRadioGroup } from '@justeattakeaway/pie-webc/react/radio-group.js';
import { PieSwitch } from '@justeattakeaway/pie-webc/react/switch.js';
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';
import { PieThumbnail } from '@justeattakeaway/pie-webc/react/thumbnail.js';
import { toaster } from '@justeattakeaway/pie-webc/components/toast-provider.js';
import { IconCheck } from '@justeattakeaway/pie-icons-webc/dist/react/IconCheck.js';
import { IconChevronRight } from '@justeattakeaway/pie-icons-webc/dist/react/IconChevronRight.js';
import { IconClock } from '@justeattakeaway/pie-icons-webc/dist/react/IconClock.js';
import { IconCreditCard } from '@justeattakeaway/pie-icons-webc/dist/react/IconCreditCard.js';
import { IconList } from '@justeattakeaway/pie-icons-webc/dist/react/IconList.js';
import { menuItems } from '../state/dashboard-data';
import { useDashboard } from '../state/dashboard-context';
import type { DashboardState } from '../state/dashboard-types';
import styles from '../dashboard.module.scss';

const deliveryModes: Array<{
    value: DashboardState['fulfilment']['deliveryMode'];
    primaryText: string;
    secondaryText: string;
    metaText: string;
}> = [
    { value: 'standard', primaryText: 'Standard delivery', secondaryText: 'Couriers assigned automatically', metaText: 'Included' },
    { value: 'express', primaryText: 'Express delivery', secondaryText: 'Priority courier assignment', metaText: '+£0.40 per order' },
    { value: 'scheduled', primaryText: 'Scheduled only', secondaryText: 'Customers pick a delivery slot', metaText: 'Included' },
];

const extras = [
    { value: 'cutlery', primaryText: 'Offer cutlery', secondaryText: 'Customers opt in at checkout', metaText: 'Free' },
    { value: 'napkins', primaryText: 'Include napkins', secondaryText: 'Added to every bag' },
    { value: 'boxes', primaryText: 'Insulated pie boxes', secondaryText: 'Keeps pies hot for up to 40 minutes', metaText: '£0.15 each' },
];

/**
 * Operations navigation and settings, built entirely from `pie-list`.
 *
 * Covers every `interactionType` the component supports:
 *
 * - `"none"` — static rows with media, meta text, trailing tags and icons.
 * - `"link"` — stretched-anchor rows, using both a raw `<a>` and `next/link`.
 * - `"button"` — rows that render their own button and emit `click`.
 * - `"switch"` — independent toggles inside a `pie-list`.
 * - `"radio"` / `"checkbox"` — selectable rows, which per the docs live inside a
 *   `pie-radio-group` / `pie-checkbox-group` rather than a `pie-list`.
 *
 * Every `pie-list` gets an accessible name, `hasDivider` is set on all but the last
 * row, and no ARIA is applied to the items themselves — `pie-list-item` derives the
 * naming of its slotted controls from `primaryText` / `secondaryText` / `metaText`.
 */
export default function OperationsLists () {
    const { state, dispatch } = useDashboard();

    return (
        <section className={styles.section} aria-labelledby="operations-heading">
            <div className={styles.sectionHeader}>
                <div>
                    <h2 id="operations-heading" className={`u-font-heading-m ${styles.sectionHeading}`}>Operations</h2>
                    <p className={`u-font-body-s ${styles.sectionIntro}`}>
                        Navigation, actions and settings expressed as PIE lists.
                    </p>
                </div>
            </div>

            <div className={styles.splitGrid}>
                <div className={`${styles.panel} ${styles.panelFlush}`}>
                    <div className={styles.panelHeader}>
                        <h3 id="operations-nav-heading" className={`u-font-heading-s ${styles.sectionHeading}`}>Manage your bakery</h3>
                        <p className={`u-font-caption ${styles.subHeading}`}>Link rows — the whole row is one anchor</p>
                    </div>

                    <PieList aria-labelledby="operations-nav-heading" data-test-id="operations-nav-list">
                        {/*
                          * `isBold` + `aria-current="page"` marks the active row. The slotted
                          * anchor stays empty so the item can name it from its own text.
                          */}
                        <PieListItem
                            interactionType="link"
                            isBold
                            hasDivider
                            primaryText="Live orders"
                            secondaryText="Accept, print and track today’s orders"
                            data-test-id="operations-nav-orders"
                        >
                            <NextLink slot="link" href="/dashboard" aria-current="page" />
                            <IconCheck slot="trailing" />
                        </PieListItem>
                        <PieListItem
                            interactionType="link"
                            hasDivider
                            primaryText="Pie menu"
                            secondaryText="Edit pies, prices and photos"
                            metaText="42 items"
                        >
                            <NextLink slot="link" href="/components/list" />
                        </PieListItem>
                        <PieListItem
                            interactionType="link"
                            hasDivider
                            primaryText="Opening hours"
                            secondaryText="Set your weekly schedule"
                        >
                            {/* A raw anchor works identically to the framework link component. */}
                            <a slot="link" href="#availability" />
                            <IconClock slot="trailing" />
                        </PieListItem>
                        <PieListItem
                            interactionType="link"
                            primaryText="Payouts"
                            secondaryText="Invoices, remittances and bank details"
                        >
                            <a slot="link" href="#orders-heading" />
                            <IconCreditCard slot="trailing" />
                        </PieListItem>
                    </PieList>
                </div>

                <div className={`${styles.panel} ${styles.panelFlush}`}>
                    <div className={styles.panelHeader}>
                        <h3 id="operations-actions-heading" className={`u-font-heading-s ${styles.sectionHeading}`}>Quick actions</h3>
                        <p className={`u-font-caption ${styles.subHeading}`}>Button rows — in-page actions, not navigation</p>
                    </div>

                    <PieList aria-labelledby="operations-actions-heading" data-test-id="operations-actions-list">
                        {/*
                          * Pausing raises the persistent `pie-toast` in DashboardOverlays,
                          * which stays on screen until orders are resumed.
                          */}
                        <PieListItem
                            interactionType="button"
                            hasDivider
                            primaryText={state.orders.isPaused ? 'Resume new orders' : 'Pause new orders'}
                            secondaryText="Stops customers placing orders until you resume"
                            metaText={state.orders.isPaused ? 'Paused' : undefined}
                            data-test-id="operations-action-pause"
                            onClick={() => dispatch({ type: 'orders/setPaused', isPaused: !state.orders.isPaused })}
                        />
                        <PieListItem
                            interactionType="button"
                            hasDivider
                            primaryText="Reprint the last order docket"
                            secondaryText="Sends order #4821 to the kitchen printer"
                            metaText="#4821"
                            onClick={() => toaster.create({
                                message: 'Order #4821 reprinted.',
                                variant: 'success',
                                isDismissible: true,
                            })}
                        />
                        {/*
                          * When a button row opens a popup, tell the item so it can forward
                          * `aria-haspopup` to the button it renders internally.
                          */}
                        <PieListItem
                            interactionType="button"
                            hasDivider
                            primaryText="Publish pie menu changes"
                            secondaryText="Opens a confirmation dialog"
                            aria={{ button: { haspopup: 'dialog' } }}
                            data-test-id="operations-action-publish"
                            onClick={() => dispatch({ type: 'overlays/setPublishModal', isOpen: true })}
                        />
                        <PieListItem
                            interactionType="button"
                            disabled
                            primaryText="Close the bakery for today"
                            secondaryText="Only available to account owners"
                            onClick={() => toaster.create({ message: 'This should never fire.', variant: 'error' })}
                        />
                    </PieList>
                </div>
            </div>

            <div className={styles.splitGrid} id="availability">
                <div className={`${styles.panel} ${styles.panelFlush}`}>
                    <div className={styles.panelHeader}>
                        <h3 id="operations-channels-heading" className={`u-font-heading-s ${styles.sectionHeading}`}>Notification channels</h3>
                        <p className={`u-font-caption ${styles.subHeading}`}>
                            Switch rows — independent toggles, so they sit in a <code>pie-list</code>
                        </p>
                    </div>

                    <PieList aria-labelledby="operations-channels-heading" data-test-id="operations-channels-list">
                        <PieListItem
                            interactionType="switch"
                            hasDivider
                            primaryText="Email"
                            secondaryText="Order confirmations and receipts"
                        >
                            <PieSwitch
                                slot="trailing"
                                name="channelEmail"
                                checked={state.channels.email}
                                onChange={() => dispatch({ type: 'channels/toggle', channel: 'email' })}
                            />
                        </PieListItem>
                        <PieListItem
                            interactionType="switch"
                            hasDivider
                            primaryText="Push notifications"
                            secondaryText="New order alerts on the bakery tablet"
                        >
                            <PieSwitch
                                slot="trailing"
                                name="channelPush"
                                checked={state.channels.push}
                                onChange={() => dispatch({ type: 'channels/toggle', channel: 'push' })}
                            />
                        </PieListItem>
                        {/* A disabled row needs `disabled` on both the item and the control. */}
                        <PieListItem
                            interactionType="switch"
                            disabled
                            primaryText="SMS"
                            secondaryText="Requires a verified mobile number"
                        >
                            <PieSwitch slot="trailing" name="channelSms" disabled checked={state.channels.sms} />
                        </PieListItem>
                    </PieList>
                </div>

                <div className={styles.panel}>
                    <div>
                        <h3 className={`u-font-heading-s ${styles.sectionHeading}`}>Fulfilment</h3>
                        <p className={`u-font-caption ${styles.subHeading}`}>
                            Selectable list rows live inside a radio or checkbox group
                        </p>
                    </div>

                    {/*
                      * Controlled radio group: `name` and `value` live on the group, so the
                      * individual radios only need their `value`.
                      */}
                    <PieRadioGroup
                        name="deliveryMode"
                        value={state.fulfilment.deliveryMode}
                        assistiveText="Applies to every order placed from today onwards."
                        data-test-id="operations-delivery-mode"
                        onChange={(event: CustomEvent) => dispatch({
                            type: 'fulfilment/setDeliveryMode',
                            deliveryMode: (event.target as HTMLInputElement).value as DashboardState['fulfilment']['deliveryMode'],
                        })}
                    >
                        <PieFormLabel slot="label">Delivery mode</PieFormLabel>
                        {deliveryModes.map((mode, index) => (
                            <PieListItem
                                key={mode.value}
                                interactionType="radio"
                                hasDivider={index < deliveryModes.length - 1}
                                primaryText={mode.primaryText}
                                secondaryText={mode.secondaryText}
                                metaText={mode.metaText}
                            >
                                <PieRadio slot="leading" value={mode.value} />
                            </PieListItem>
                        ))}
                    </PieRadioGroup>

                    <PieCheckboxGroup
                        name="fulfilmentExtras"
                        assistiveText="Extras are added to the bag when the customer opts in."
                        data-test-id="operations-extras"
                    >
                        <PieFormLabel slot="label">Packaging extras</PieFormLabel>
                        {extras.map((extra, index) => (
                            <PieListItem
                                key={extra.value}
                                interactionType="checkbox"
                                hasDivider={index < extras.length - 1}
                                primaryText={extra.primaryText}
                                secondaryText={extra.secondaryText}
                                metaText={extra.metaText}
                            >
                                <PieCheckbox
                                    slot="leading"
                                    name={extra.value}
                                    value={extra.value}
                                    checked={state.fulfilment.extras.includes(extra.value)}
                                    onChange={() => dispatch({ type: 'fulfilment/toggleExtra', value: extra.value })}
                                />
                            </PieListItem>
                        ))}
                    </PieCheckboxGroup>
                </div>
            </div>

            <div className={`${styles.panel} ${styles.panelFlush}`}>
                <div className={styles.panelHeader}>
                    <h3 id="operations-menu-heading" className={`u-font-heading-s ${styles.sectionHeading}`}>Popular pies</h3>
                    <p className={`u-font-caption ${styles.subHeading}`}>
                        Static rows with media. <code>hasMedia</code> is required whenever a thumbnail is
                        slotted, and a slotted <code>pie-thumbnail</code> must use size 40.
                    </p>
                </div>

                <PieList aria-labelledby="operations-menu-heading" data-test-id="operations-menu-list">
                    {menuItems.map((item, index) => (
                        <PieListItem
                            key={item.id}
                            hasMedia
                            hasDivider={index < menuItems.length - 1}
                            primaryText={item.name}
                            secondaryText={item.description}
                        >
                            <PieThumbnail slot="leading" size={40} src={item.imageSrc} alt="" />
                            <PieTag slot="trailing" variant={item.isAvailable ? 'success' : 'error'} size="small">
                                {item.isAvailable ? item.price : 'Sold out'}
                            </PieTag>
                        </PieListItem>
                    ))}
                </PieList>

                <div className={styles.panelHeader}>
                    <h3 id="operations-compact-heading" className={`u-font-heading-s ${styles.sectionHeading}`}>Compact rows</h3>
                    <p className={`u-font-caption ${styles.subHeading}`}>
                        <code>isCompact</code> is single-line only, so it is never combined with
                        secondary text or media.
                    </p>
                </div>

                <PieList aria-labelledby="operations-compact-heading" data-test-id="operations-compact-list">
                    <PieListItem isCompact hasDivider primaryText="Tax settings">
                        <IconChevronRight slot="trailing" />
                    </PieListItem>
                    <PieListItem isCompact hasDivider primaryText="Integrations" metaText="3 connected" />
                    <PieListItem isCompact isBold primaryText="Audit log">
                        <IconList slot="trailing" />
                    </PieListItem>
                </PieList>
            </div>
        </section>
    );
}
