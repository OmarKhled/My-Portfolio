import type { NextPage } from 'next'
import Head from 'next/head'

import ThemeToggle from '@components/ThemeToggle'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title key={"title"}>Omar Khled</title>
        <meta name="description" content="Omar Khled - Creative Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ThemeToggle />
    </>
  )
}

export default Home
