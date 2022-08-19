import { NextPage } from 'next';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

import codeToRunOnClient from '@utils/themingIntializerInlineScript';

const MyDocument: NextPage = ({ styles }: any) => {
  return (
    <Html lang='en'>
      <Head>
        {styles}
      </Head>
      <body>
        <script dangerouslySetInnerHTML={{__html: codeToRunOnClient}}></script>
        <div id='mobile-nav-portal'></div>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

interface Context extends DocumentContext {}


MyDocument.getInitialProps = async (ctx: Context) => {
  const sheet = new ServerStyleSheet()
  const originalRenderPage = ctx.renderPage
  try {
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) =>
          sheet.collectStyles(<App {...props} />),
      })

    const initialProps = await Document.getInitialProps(ctx)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          {sheet.getStyleElement()}
        </>
      ),
    }
  } finally {
    sheet.seal()
  }
}

export default MyDocument;