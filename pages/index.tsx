import Button from '@components/Button'
import Hero from '@components/Hero'
import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title key={"title"}>Omar Khled</title>
        <meta name="description" content="Omar Khled - Creative Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Hero />
    </>
  )
}


export default Home
