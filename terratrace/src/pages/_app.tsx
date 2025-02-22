import "@/styles/globals.css";
import type { AppProps } from "next/app";
import Head from 'next/head';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TerraTrace</title>
        <meta name="description" content="Revolutionizing carbon credit transactions with blockchain technology, real-time monitoring, and direct connections to verified environmental projects." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
