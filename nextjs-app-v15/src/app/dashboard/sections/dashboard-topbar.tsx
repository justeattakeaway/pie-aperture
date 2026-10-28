'use client';

import { PieAvatar } from '@justeattakeaway/pie-webc/react/avatar.js';
import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { PieIconButton } from '@justeattakeaway/pie-webc/react/icon-button.js';
import { PieTag } from '@justeattakeaway/pie-webc/react/tag.js';
import { PieTextInput } from '@justeattakeaway/pie-webc/react/text-input.js';
import { toaster } from '@justeattakeaway/pie-webc/components/toast-provider.js';
import { IconHelpCircle } from '@justeattakeaway/pie-icons-webc/dist/react/IconHelpCircle.js';
import { IconLogOut } from '@justeattakeaway/pie-icons-webc/dist/react/IconLogOut.js';
import { IconNotification } from '@justeattakeaway/pie-icons-webc/dist/react/IconNotification.js';
import { IconSearch } from '@justeattakeaway/pie-icons-webc/dist/react/IconSearch.js';
import { IconSettings } from '@justeattakeaway/pie-icons-webc/dist/react/IconSettings.js';
import { useDashboard } from '../state/dashboard-context';
import styles from '../dashboard.module.scss';

/**
 * Sticky application bar.
 *
 * Components exercised: `pie-avatar` (initials + image + `tag="button"`),
 * `pie-text-input` (search variant with a leading icon), `pie-icon-button`
 * (several variants, sizes and a loading state), `pie-tag` (icon-only) and a
 * vertical `pie-divider`.
 */
export default function DashboardTopbar () {
    const { state, dispatch } = useDashboard();
    const openOrderCount = state.orders.rows.filter((order) => order.status === 'new').length;

    return (
        <header className={styles.topbar}>
            <div className={styles.topbarInner}>
                <div className={styles.topbarIdentity}>
                    {/*
                      * Image avatar. `pie-avatar` renders the image with an empty `alt` and
                      * hides the wrapper from assistive technology, so this is decorative —
                      * the accessible bakery name comes from the heading beside it.
                      */}
                    <PieAvatar
                        tag="div"
                        src="/logo.png"
                        data-test-id="dashboard-avatar-image"
                    />
                    <div>
                        <h1 className={`u-font-heading-s ${styles.topbarTitle}`}>PIE Hub</h1>
                        <p className={`u-font-caption ${styles.topbarMeta}`}>Aperture Pie Co. &middot; Unit 12, Crustwell Trading Estate</p>
                    </div>
                </div>

                <div className={styles.topbarSearch}>
                    {/*
                      * A search field with no visible label, so `aria-label` is supplied
                      * directly on the input as the text input docs require.
                      */}
                    <PieTextInput
                        type="text"
                        size="small"
                        name="dashboardSearch"
                        inputmode="search"
                        autocomplete="off"
                        placeholder="Search orders or pies"
                        aria-label="Search orders or pies"
                        data-test-id="dashboard-search"
                        value={state.filters.searchTerm}
                        onInput={(event: InputEvent) => dispatch({
                            type: 'filters/setSearchTerm',
                            searchTerm: (event.target as HTMLInputElement).value,
                        })}
                    >
                        <IconSearch slot="leadingIcon" />
                    </PieTextInput>
                </div>

                <div className={styles.topbarActions}>
                    {/*
                      * `hasLeadingIcon` is required whenever a tag pairs an icon with text.
                      * The count is rendered as text rather than using `isIconOnly`, because
                      * `pie-tag` exposes no accessible-name API of its own.
                      */}
                    <PieTag
                        variant="information"
                        isStrong
                        hasLeadingIcon
                        data-test-id="dashboard-open-order-tag"
                    >
                        <IconNotification slot="icon" />
                        {openOrderCount} new
                    </PieTag>

                    <PieIconButton
                        variant="ghost-secondary"
                        size="small"
                        data-test-id="dashboard-notifications-button"
                        aria={{ label: 'Reopen all dismissed notifications' }}
                        onClick={() => dispatch({ type: 'notices/reopenAll' })}
                    >
                        <IconNotification />
                    </PieIconButton>

                    <PieIconButton
                        variant="ghost-secondary"
                        size="small"
                        data-test-id="dashboard-help-button"
                        aria={{ label: 'Open help', haspopup: 'dialog' }}
                        onClick={() => toaster.create({
                            message: 'Help centre opens in a real application.',
                            variant: 'neutral',
                            isDismissible: true,
                        })}
                    >
                        <IconHelpCircle />
                    </PieIconButton>

                    {/*
                      * `isLoading` is driven from the order refresh flag so the icon button's
                      * loading treatment is visible while the pretend fetch runs.
                      */}
                    <PieIconButton
                        variant="secondary"
                        size="small"
                        isLoading={state.orders.isRefreshing}
                        data-test-id="dashboard-settings-button"
                        aria={{ label: 'Open dashboard settings' }}
                        onClick={() => toaster.create({
                            message: 'Settings saved.',
                            variant: 'success',
                            isDismissible: true,
                        })}
                    >
                        <IconSettings />
                    </PieIconButton>

                    <div className={styles.topbarDivider}>
                        <PieDivider orientation="vertical" />
                    </div>

                    {/*
                      * Interactive avatar: with no `src`, `pie-avatar` derives initials from
                      * `label` and exposes them to screen readers, which names the button.
                      */}
                    <PieAvatar
                        tag="button"
                        label="Sam Colley"
                        data-test-id="dashboard-avatar-initials"
                        onClick={() => toaster.create({
                            message: 'Account menus are out of scope for this prototype.',
                            variant: 'info',
                            isDismissible: true,
                        })}
                    />

                    {/* No `src` and no `label`, so the avatar falls back to its user icon. */}
                    <PieAvatar
                        tag="div"
                        data-test-id="dashboard-avatar-fallback"
                    />

                    <PieIconButton
                        variant="ghost"
                        size="small"
                        data-test-id="dashboard-signout-button"
                        aria={{ label: 'Sign out' }}
                        onClick={() => toaster.create({
                            message: 'You would be signed out here.',
                            variant: 'warning',
                            isDismissible: true,
                        })}
                    >
                        <IconLogOut />
                    </PieIconButton>
                </div>
            </div>
        </header>
    );
}
