import type { AppProps } from 'next/app'
import Head from 'next/head';
import styled from 'styled-components';

import GlobalStyles from '@components/GlobalStyles';
import Navbar from '@components/Navbar';
import ThemeInitializer from '@components/ThemeInitializer';
import "@styles/fonts.scss"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title key={'title'}>Omar Khaled</title>
      </Head>
      <ThemeInitializer>
        <GlobalStyles />
        <Navbar />
        <Wrapper>
          <Component {...pageProps} />
        </Wrapper>
      </ThemeInitializer>
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
