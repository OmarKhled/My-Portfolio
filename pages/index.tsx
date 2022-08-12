import ThemeToggle from '@components/ThemeToggle'
import type { NextPage } from 'next'
import Head from 'next/head'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title key={"title"}>Omar Khled</title>
        <meta name="description" content="Omar Khled - Creative Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Hello World!</h1>
      <ThemeToggle />
      </>
  )
}

export default Home
