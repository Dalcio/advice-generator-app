import { AppProps } from 'next/app';

import Head from 'next/head';
import globalStyles from 'theme/globalStyles';

export default function App(props: AppProps) {
  const { Component, pageProps } = props;

  globalStyles();

  return (
    <>
      <Head>
        <title>Advice Generator App</title>
      </Head>
      <Component {...pageProps} />
    </>
  );
}
