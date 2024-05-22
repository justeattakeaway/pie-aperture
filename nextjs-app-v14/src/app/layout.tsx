import type { Metadata } from "next";
import Head from "next/head";
import "@justeattakeaway/pie-css";
import "@/styles/main.scss";
import "@/styles/icons.scss";

export const metadata: Metadata = {
  title: "PIE Aperture",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <Head>
        <title>PIE Aperture</title>
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
        <link rel="icon" href="/favicon.ico"/>
        <link rel="preload" href="https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Regular-optimised.woff2"
              as="font" type="font/woff2"/>
        <link rel="preload" href="https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Bold-optimised.woff2"
              as="font" type="font/woff2"/>
    </Head>
    <body>
    {children}
    </body>
    </html>
  );
}
