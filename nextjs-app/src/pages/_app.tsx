import type { AppProps } from "next/app";
import Head from "next/head";
import "@justeattakeaway/pie-css";
import "@/styles/main.scss";
import "@/styles/icons.scss";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>PIE Aperture</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}
