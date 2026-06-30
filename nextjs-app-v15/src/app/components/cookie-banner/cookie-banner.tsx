'use client';

import NavigationLayout from "@/app/layout/navigation";
import { PieCookieBanner } from '@justeattakeaway/pie-webc/react/cookie-banner.js';

type CookieBannerProps = {
    variant?: string;
};

export default function CookieBanner({ variant }: CookieBannerProps) {
    const personalizedLabel = variant === 'personalized-label' ? 'Custom personalized label' : undefined;
    const personalizedDescription = variant === 'personalized-description'
        ? 'Read our <a href="https://example.com/privacy">privacy policy</a> for more info.'
        : undefined;

    return (
        <NavigationLayout title="Cookie Banner">
            <PieCookieBanner
                defaultPreferences={{ functional: true, personalized: true, analytical: true }}
                language="da"
                country="dk"
                hasPrimaryActionsOnly
                cookieTechnologiesLink="https://justeattakeaway.com"
                cookieStatementLink="https://justeattakeaway.com"
                personalizedLabel={personalizedLabel}
                personalizedDescription={personalizedDescription}
            />
        </NavigationLayout>
    );
}
