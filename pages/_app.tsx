import type { AppProps } from 'next/app'
import Head from 'next/head';
import styled from 'styled-components';

import GlobalStyles from '@components/GlobalStyles';
import Navbar from '@components/Navbar';
import ThemeProvider from '@components/ThemeProvider';
import "@styles/fonts.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title key={'title'}>Omar Khaled</title>
      </Head>
      <GlobalStyles />
      <ThemeProvider>
        <Navbar />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  margin: 0 auto;
  isolation: isolate;
  z-index: 0;
  @media (prefers-reduced-motion: reduce) {
    transition: none !important;
  }
`

export default MyApp
