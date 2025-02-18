'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieCookieBanner } from '@justeattakeaway/pie-webc/react/cookie-banner.js';

export default function CookieBanner() {
    return (
        <NavigationLayout title="Cookie Banner">
        <PieCookieBanner
            defaultPreferences={{functional: true, personalized: true, analytical: true}}
            language="da"
            country="dk"
            hasPrimaryActionsOnly
            cookieTechnologiesLink="https://justeattakeaway.com"
            cookieStatementLink="https://justeattakeaway.com" />
        </NavigationLayout>
    );
}
