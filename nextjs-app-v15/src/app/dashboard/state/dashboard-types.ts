/**
 * Types for PIE Hub, a fictional back-office for an artisan pie bakery.
 *
 * The dashboard exists to exercise every component exposed by `pie-webc`, so the
 * shape below is deliberately broad: it holds a slice of state for each family of
 * interactive PIE components (controlled chips/accordions, form fields, list
 * selections, overlays and consent).
 */

export type OrderStatus = 'new' | 'preparing' | 'ready' | 'collected' | 'cancelled';

export type Order = {
    id: string;
    reference: string;
    customer: string;
    items: number;
    total: string;
    channel: 'Delivery' | 'Collection';
    placedAt: string;
    status: OrderStatus;
    note?: string;
};

export type MenuItemRow = {
    id: string;
    name: string;
    description: string;
    price: string;
    imageSrc: string;
    dietary: Array<'vegan' | 'vegetarian' | 'spicy'>;
    isAvailable: boolean;
};

export type CookiePreferences = {
    functional: boolean;
    analytical: boolean;
    personalized: boolean;
};

export type MenuFormErrors = {
    itemName?: string;
    price?: string;
    description?: string;
    category?: string;
};

export type MenuForm = {
    itemName: string;
    price: string;
    prepTime: string;
    description: string;
    category: string;
    /** Values of the checked `pie-checkbox` elements inside the dietary checkbox group. */
    dietary: string[];
    /** Selected `pie-radio-group` value for where the item is offered. */
    availability: 'all' | 'delivery' | 'collection';
    isFeatured: boolean;
    acceptsSubstitutions: boolean;
    isSubmitting: boolean;
    errors: MenuFormErrors;
    submittedPayload: string | null;
};

export type DashboardState = {
    consent: {
        isBannerOpen: boolean;
        preferences: CookiePreferences;
        lastDecision: string | null;
    };
    notices: {
        isServiceNoticeOpen: boolean;
        isPayoutNoticeOpen: boolean;
        isKitchenNoticeOpen: boolean;
    };
    filters: {
        /** `pie-chip` (`type="checkbox"`) selections, keyed by chip id. */
        dietaryLabels: Record<string, boolean>;
        /** `pie-chip` (`type="button"`) single-select group. */
        timeRange: 'today' | 'week' | 'month';
        /** Chips the user has dismissed via the chip `close` event. */
        dismissedTags: string[];
        /** Set while the "Sync" chip shows its loading indicator. */
        isSyncing: boolean;
        searchTerm: string;
    };
    orders: {
        rows: Order[];
        selectedOrderId: string | null;
        isRefreshing: boolean;
        /** Ids of orders whose row-level icon button is showing a loading state. */
        pendingRowIds: string[];
        /**
         * When paused, a persistent `pie-toast` stays on screen offering to resume.
         * This is why that toast is a standalone `pie-toast` rather than a queued one:
         * it reflects ongoing state, not a transient confirmation.
         */
        isPaused: boolean;
    };
    channels: {
        email: boolean;
        push: boolean;
        sms: boolean;
    };
    payouts: {
        /** Selected payout day, chosen from native radios styled by `pie-css`. */
        day: 'monday' | 'wednesday' | 'friday';
    };
    fulfilment: {
        /** Single-select list built from `pie-list-item` inside a `pie-radio-group`. */
        deliveryMode: 'standard' | 'express' | 'scheduled';
        /** Multi-select list built from `pie-list-item` inside a `pie-checkbox-group`. */
        extras: string[];
    };
    menuForm: MenuForm;
    overlays: {
        /** `pie-modal` used for the order detail drawer. */
        isOrderModalOpen: boolean;
        /** `pie-modal` used for the "publish menu" confirmation. */
        isPublishModalOpen: boolean;
        isPublishing: boolean;
    };
    ui: {
        /** Id of the single open `pie-accordion` panel, or `null` when all are closed. */
        openFaqId: string | null;
        /** Drives the report button's loading state. */
        isReportLoading: boolean;
    };
};

export type DashboardAction =
    | { type: 'consent/acceptAll' }
    | { type: 'consent/necessaryOnly' }
    | { type: 'consent/managePrefs' }
    | { type: 'consent/prefsSaved'; preferences: CookiePreferences }
    | { type: 'notices/close'; notice: keyof DashboardState['notices'] }
    | { type: 'notices/reopenAll' }
    | { type: 'filters/toggleDietaryLabel'; id: string }
    | { type: 'filters/setTimeRange'; timeRange: DashboardState['filters']['timeRange'] }
    | { type: 'filters/dismissTag'; id: string }
    | { type: 'filters/restoreTags' }
    | { type: 'filters/setSyncing'; isSyncing: boolean }
    | { type: 'filters/setSearchTerm'; searchTerm: string }
    | { type: 'orders/select'; id: string | null }
    | { type: 'orders/setStatus'; id: string; status: OrderStatus }
    | { type: 'orders/setRefreshing'; isRefreshing: boolean }
    | { type: 'orders/setRowPending'; id: string; isPending: boolean }
    | { type: 'orders/setPaused'; isPaused: boolean }
    | { type: 'payouts/setDay'; day: DashboardState['payouts']['day'] }
    | { type: 'channels/toggle'; channel: keyof DashboardState['channels'] }
    | { type: 'fulfilment/setDeliveryMode'; deliveryMode: DashboardState['fulfilment']['deliveryMode'] }
    | { type: 'fulfilment/toggleExtra'; value: string }
    | { type: 'menuForm/setField'; field: 'itemName' | 'price' | 'prepTime' | 'description' | 'category'; value: string }
    | { type: 'menuForm/toggleDietary'; value: string }
    | { type: 'menuForm/setAvailability'; availability: MenuForm['availability'] }
    | { type: 'menuForm/toggleFeatured' }
    | { type: 'menuForm/toggleSubstitutions' }
    | { type: 'menuForm/setErrors'; errors: MenuFormErrors }
    | { type: 'menuForm/setSubmitting'; isSubmitting: boolean }
    | { type: 'menuForm/submitted'; payload: string }
    | { type: 'menuForm/reset' }
    | { type: 'overlays/setOrderModal'; isOpen: boolean }
    | { type: 'overlays/setPublishModal'; isOpen: boolean }
    | { type: 'overlays/setPublishing'; isPublishing: boolean }
    | { type: 'ui/setOpenFaq'; id: string | null }
    | { type: 'ui/setReportLoading'; isLoading: boolean };
