import { PieDivider } from '@justeattakeaway/pie-webc/react/divider.js';
import { PieLink } from '@justeattakeaway/pie-webc/react/link.js';
import { useRouter } from "next/router";
import Head from 'next/head';
import { type ReactNode } from "react";

interface NavigationLayoutProps {
  children: ReactNode;
  title: string;
}

export default function NavigationLayout({ children, title }: NavigationLayoutProps) {

    const router = useRouter();
    const isHomePage = router.pathname === '/';
    const headTitle =  isHomePage ? "PIE Aperture" : `PIE Aperture | NextJS | ${ title }`;

    return (
      <>
        <Head><title>{headTitle}</title></Head>

        <h1>NextJS 13 - PIE { title }</h1>

        {!isHomePage &&
            <>
                <PieLink onClick={() => router.push('/')} tag="button">Back to home</PieLink>

                <PieDivider/>
            </>
        }

        { children }

        {!isHomePage && <PieDivider/>}
      </>
    );
  }
