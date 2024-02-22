import { PieDivider } from "@justeattakeaway/pie-divider/dist/react"
import { PieLink } from "@justeattakeaway/pie-link/dist/react";
import { useRouter } from "next/router";
import Head from 'next/head'; 

export default function NavigationLayout({ children, title = '' }) {

    const router = useRouter();
    const isHomePage = router.pathname === '/';

    return (
      <>
        <Head>
            { isHomePage && <title>PIE Aperture</title>}
          {!isHomePage && <title>PIE Aperture | NextJS | { title }</title>}
        </Head>
        <h1>NextJS - PIE { title } </h1>
        { !isHomePage && <PieLink onClick={() => router.push('/')} tag="button">Back to home</PieLink>}
        { !isHomePage && <PieDivider/>}
        { children }
        { !isHomePage && <PieDivider/>}
      </>
    );
  }
  