import type { Metadata } from "next";
import Head from "next/head";
import "@justeattakeaway/pie-css";
import "@justeattakeaway/pie-css/dist/helpers/typography.css";
import "@/styles/main.scss";
import NavigationHeader from "@/components/navigation-header";

export const metadata: Metadata = {
  title: {
    template: 'PIE Aperture | NextJS | %s',
    default: 'PIE Aperture',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preload" href="https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Regular-optimised.woff2"
              as="font" type="font/woff2"/>
        <link rel="preload" href="https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Bold-optimised.woff2"
              as="font" type="font/woff2"/>
    </Head>
    <body>
    <NavigationHeader />
    {children}
    </body>
    </html>
  );
}
