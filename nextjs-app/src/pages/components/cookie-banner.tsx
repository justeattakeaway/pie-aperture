import NavigationLayout from "@/layout/navigation";
import { PieCookieBanner } from '@justeattakeaway/pie-webc/react/cookie-banner.js';
// TODO: Remove this comment as soon as we provide the TS declaration for locales
// @ts-ignore: missing declaration for locales
import locales from "@justeattakeaway/pie-cookie-banner/locales"

export default function CookieBanner() {
    return (
        <NavigationLayout title="Cookie Banner">
        <PieCookieBanner
            defaultPreferences={{functional: true, personalized: true, analytical: true}}
            locale={locales.daDK}
            hasPrimaryActionsOnly
            cookieTechnologiesLink="https://justeattakeaway.com"
            cookieStatementLink="https://justeattakeaway.com" />
        </NavigationLayout>
    );
}
