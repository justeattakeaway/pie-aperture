import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preload" href="https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Regular-optimised.woff2" as="font" type="font/woff2" />
        <link rel="preload" href="https://d30v2pzvrfyzpo.cloudfront.net/fonts/JETSansDigital-Bold-optimised.woff2" as="font" type="font/woff2" />    
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
