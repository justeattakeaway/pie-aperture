'use client';

import { PieCookieBanner } from '@justeattakeaway/pie-webc/react/cookie-banner.js';
import { useDashboard } from '../state/dashboard-context';
import type { CookiePreferences } from '../state/dashboard-types';

/**
 * `pie-cookie-banner` only owns the consent UI — storing the decision is the
 * consuming application's job, so every event is reduced into dashboard state and
 * the banner is unmounted once a decision has been made.
 */
export default function ConsentBanner () {
    const { state, dispatch } = useDashboard();

    if (!state.consent.isBannerOpen) {
        return null;
    }

    return (
        <PieCookieBanner
            data-test-id="dashboard-cookie-banner"
            country="gb"
            language="en"
            hasPrimaryActionsOnly
            defaultPreferences={state.consent.preferences}
            cookieStatementLink="https://piehub.example/cookie-statement"
            cookieTechnologiesLink="https://piehub.example/cookie-technologies"
            personalizedLabel="Personalised bakery insights"
            /*
             * Plain text only, deliberately.
             *
             * `personalizedDescription` is documented as accepting `<a>` / `<pie-link>`
             * markup, but that path is not SSR-safe in pie-cookie-banner 1.x: its
             * sanitiser strips every tag when `typeof window === 'undefined'` and runs
             * DOMPurify on the client, so the two renders differ and Lit hydration
             * throws "Unexpected TemplateResult rendered to part" — which aborts
             * hydration and leaves the banner's buttons dead.
             *
             * Plain text passes through both branches unchanged, so it hydrates
             * cleanly. Restore the link once the component is fixed upstream.
             */
            personalizedDescription="Lets us tailor the reports on this dashboard, based on how you use it."
            onPieCookieBannerAcceptAll={() => dispatch({ type: 'consent/acceptAll' })}
            onPieCookieBannerNecessaryOnly={() => dispatch({ type: 'consent/necessaryOnly' })}
            onPieCookieBannerManagePrefs={() => dispatch({ type: 'consent/managePrefs' })}
            onPieCookieBannerPrefsSaved={(event: CustomEvent) => dispatch({
                type: 'consent/prefsSaved',
                preferences: event.detail as CookiePreferences,
            })}
        />
    );
}
