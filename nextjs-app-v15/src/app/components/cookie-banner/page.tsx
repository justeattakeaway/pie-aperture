import CookieBanner from './cookie-banner';
import { type Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Cookie Banner',
}

export default function CookieBannerComponent() {
    return <CookieBanner/>;
}
