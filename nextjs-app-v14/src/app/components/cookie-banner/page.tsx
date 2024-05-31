import  CookieBanner  from './cookie-banner';
import { Metadata } from 'next'

export const metadata: Metadata = {
    title: 'Cookie Banner',
}

export default function CookieBannerComponent() {
    return <CookieBanner/>;
}
