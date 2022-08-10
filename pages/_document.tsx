import { NextPage } from 'next';
import Document, { DocumentContext, Head, Html, Main, NextScript } from 'next/document'
import { ServerStyleSheet } from 'styled-components'

const MyDocument: NextPage = ({ styles }: any) => {
  return (
    <Html>
      <Head>
        {styles}
      </Head>
      <body>
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