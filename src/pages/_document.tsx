import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@800&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width" />
        <link rel="shortcut icon" href="/images/favicon-32x32.png" />
        <meta
          name="description"
          content="Listen to my Advice? Random Advice Generator App is here to advice you."
        />
        <meta
          name="keywords"
          content="Advice, Advice Generator, Advice Generator, Advice Generator App, Advices, Get Advice"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
