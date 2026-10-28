'use client';

import { createContext, useContext, useMemo, useReducer, type Dispatch, type ReactNode } from 'react';
import { orders } from './dashboard-data';
import type { DashboardAction, DashboardState } from './dashboard-types';

/**
 * State for the whole dashboard lives in a single reducer behind a client-side
 * context provider. This is the idiomatic React 19 / Next 15 App Router shape for
 * page-level state that many sibling components need to read and write, and it
 * keeps every controlled PIE component (chips, accordions, modals, toasts, form
 * fields) reading from one source of truth.
 *
 * When this page is ported to Nuxt the same slices should map onto a `reactive()`
 * store exposed through a composable.
 */

export const initialDashboardState: DashboardState = {
    consent: {
        isBannerOpen: true,
        preferences: { functional: true, analytical: false, personalized: false },
        lastDecision: null,
    },
    notices: {
        isServiceNoticeOpen: true,
        isPayoutNoticeOpen: true,
        isKitchenNoticeOpen: true,
    },
    filters: {
        dietaryLabels: { vegan: false, vegetarian: true, spicy: false, offers: false },
        timeRange: 'today',
        dismissedTags: [],
        isSyncing: false,
        searchTerm: '',
    },
    orders: {
        rows: orders,
        selectedOrderId: null,
        isRefreshing: false,
        pendingRowIds: [],
        isPaused: false,
    },
    channels: {
        email: true,
        push: true,
        sms: false,
    },
    payouts: {
        day: 'monday',
    },
    fulfilment: {
        deliveryMode: 'standard',
        extras: ['cutlery'],
    },
    menuForm: {
        itemName: '',
        price: '',
        prepTime: '15',
        description: '',
        category: '',
        dietary: [],
        availability: 'all',
        isFeatured: false,
        acceptsSubstitutions: true,
        isSubmitting: false,
        errors: {},
        submittedPayload: null,
    },
    overlays: {
        isOrderModalOpen: false,
        isPublishModalOpen: false,
        isPublishing: false,
    },
    ui: {
        openFaqId: null,
        isReportLoading: false,
    },
};

/** Adds `value` to `list` if missing, removes it if present. */
function toggleInList (list: string[], value: string): string[] {
    return list.includes(value)
        ? list.filter((entry) => entry !== value)
        : [...list, value];
}

export function dashboardReducer (state: DashboardState, action: DashboardAction): DashboardState {
    switch (action.type) {
        case 'consent/acceptAll':
            return {
                ...state,
                consent: {
                    isBannerOpen: false,
                    preferences: { functional: true, analytical: true, personalized: true },
                    lastDecision: 'Accepted all cookies',
                },
            };

        case 'consent/necessaryOnly':
            return {
                ...state,
                consent: {
                    isBannerOpen: false,
                    preferences: { functional: false, analytical: false, personalized: false },
                    lastDecision: 'Accepted necessary cookies only',
                },
            };

        case 'consent/managePrefs':
            return {
                ...state,
                consent: { ...state.consent, lastDecision: 'Opened cookie preferences' },
            };

        case 'consent/prefsSaved':
            return {
                ...state,
                consent: {
                    isBannerOpen: false,
                    preferences: action.preferences,
                    lastDecision: 'Saved custom cookie preferences',
                },
            };

        case 'notices/close':
            return {
                ...state,
                notices: { ...state.notices, [action.notice]: false },
            };

        case 'notices/reopenAll':
            return {
                ...state,
                notices: {
                    isServiceNoticeOpen: true,
                    isPayoutNoticeOpen: true,
                    isKitchenNoticeOpen: true,
                },
            };

        case 'filters/toggleDietaryLabel':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    dietaryLabels: {
                        ...state.filters.dietaryLabels,
                        [action.id]: !state.filters.dietaryLabels[action.id],
                    },
                },
            };

        case 'filters/setTimeRange':
            return {
                ...state,
                filters: { ...state.filters, timeRange: action.timeRange },
            };

        case 'filters/dismissTag':
            return {
                ...state,
                filters: {
                    ...state.filters,
                    dismissedTags: toggleInList(state.filters.dismissedTags, action.id),
                },
            };

        case 'filters/restoreTags':
            return {
                ...state,
                filters: { ...state.filters, dismissedTags: [] },
            };

        case 'filters/setSyncing':
            return {
                ...state,
                filters: { ...state.filters, isSyncing: action.isSyncing },
            };

        case 'filters/setSearchTerm':
            return {
                ...state,
                filters: { ...state.filters, searchTerm: action.searchTerm },
            };

        case 'orders/select':
            return {
                ...state,
                orders: { ...state.orders, selectedOrderId: action.id },
            };

        case 'orders/setStatus':
            return {
                ...state,
                orders: {
                    ...state.orders,
                    rows: state.orders.rows.map((order) => (
                        order.id === action.id ? { ...order, status: action.status } : order
                    )),
                },
            };

        case 'orders/setRefreshing':
            return {
                ...state,
                orders: { ...state.orders, isRefreshing: action.isRefreshing },
            };

        case 'orders/setRowPending':
            return {
                ...state,
                orders: {
                    ...state.orders,
                    pendingRowIds: action.isPending
                        ? Array.from(new Set([...state.orders.pendingRowIds, action.id]))
                        : state.orders.pendingRowIds.filter((id) => id !== action.id),
                },
            };

        case 'orders/setPaused':
            return {
                ...state,
                orders: { ...state.orders, isPaused: action.isPaused },
            };

        case 'payouts/setDay':
            return {
                ...state,
                payouts: { ...state.payouts, day: action.day },
            };

        case 'channels/toggle':
            return {
                ...state,
                channels: { ...state.channels, [action.channel]: !state.channels[action.channel] },
            };

        case 'fulfilment/setDeliveryMode':
            return {
                ...state,
                fulfilment: { ...state.fulfilment, deliveryMode: action.deliveryMode },
            };

        case 'fulfilment/toggleExtra':
            return {
                ...state,
                fulfilment: {
                    ...state.fulfilment,
                    extras: toggleInList(state.fulfilment.extras, action.value),
                },
            };

        case 'menuForm/setField':
            return {
                ...state,
                menuForm: { ...state.menuForm, [action.field]: action.value },
            };

        case 'menuForm/toggleDietary':
            return {
                ...state,
                menuForm: {
                    ...state.menuForm,
                    dietary: toggleInList(state.menuForm.dietary, action.value),
                },
            };

        case 'menuForm/setAvailability':
            return {
                ...state,
                menuForm: { ...state.menuForm, availability: action.availability },
            };

        case 'menuForm/toggleFeatured':
            return {
                ...state,
                menuForm: { ...state.menuForm, isFeatured: !state.menuForm.isFeatured },
            };

        case 'menuForm/toggleSubstitutions':
            return {
                ...state,
                menuForm: { ...state.menuForm, acceptsSubstitutions: !state.menuForm.acceptsSubstitutions },
            };

        case 'menuForm/setErrors':
            return {
                ...state,
                menuForm: { ...state.menuForm, errors: action.errors },
            };

        case 'menuForm/setSubmitting':
            return {
                ...state,
                menuForm: { ...state.menuForm, isSubmitting: action.isSubmitting },
            };

        case 'menuForm/submitted':
            return {
                ...state,
                menuForm: {
                    ...state.menuForm,
                    isSubmitting: false,
                    errors: {},
                    submittedPayload: action.payload,
                },
            };

        case 'menuForm/reset':
            return {
                ...state,
                menuForm: { ...initialDashboardState.menuForm },
            };

        case 'overlays/setOrderModal':
            return {
                ...state,
                overlays: { ...state.overlays, isOrderModalOpen: action.isOpen },
            };

        case 'overlays/setPublishModal':
            return {
                ...state,
                overlays: { ...state.overlays, isPublishModalOpen: action.isOpen },
            };

        case 'overlays/setPublishing':
            return {
                ...state,
                overlays: { ...state.overlays, isPublishing: action.isPublishing },
            };

        case 'ui/setOpenFaq':
            return {
                ...state,
                ui: { ...state.ui, openFaqId: action.id },
            };

        case 'ui/setReportLoading':
            return {
                ...state,
                ui: { ...state.ui, isReportLoading: action.isLoading },
            };

        default:
            return state;
    }
}

type DashboardContextValue = {
    state: DashboardState;
    dispatch: Dispatch<DashboardAction>;
};

const DashboardContext = createContext<DashboardContextValue | null>(null);

export function DashboardProvider ({ children }: { children: ReactNode }) {
    const [state, dispatch] = useReducer(dashboardReducer, initialDashboardState);
    const value = useMemo(() => ({ state, dispatch }), [state]);

    return (
        <DashboardContext.Provider value={value}>
            {children}
        </DashboardContext.Provider>
    );
}

export function useDashboard (): DashboardContextValue {
    const context = useContext(DashboardContext);

    if (!context) {
        throw new Error('useDashboard must be used inside a DashboardProvider');
    }

    return context;
}
