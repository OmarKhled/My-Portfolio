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
      <ThemeProvider>
        <GlobalStyles />
        <Navbar />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeProvider>
    </>
  );
}

const Wrapper = styled.div`
  color: var(--textColor, white);
  background-color: var(--background, red);
  height: 100%;
  width: 100%;
  padding: 1rem;
`

export default MyApp
