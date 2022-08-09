import type { AppProps } from 'next/app'
import Head from 'next/head';

import GlobalStyles from '../components/GlobalStyles';

import "../styles/fonts.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title key={'title'}>Omar Khaled</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  );
}

export default MyApp
