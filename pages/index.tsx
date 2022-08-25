import Button from '@components/Button'
import Hero from '@components/Hero'
import Marquee from '@components/Marquee'
import ScrollComponent from '@components/PreviousWork'
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
      <section style={{ marginTop: "5rem" }}>
        <h4 style={{ textAlign: "center" }}>Technologies I use</h4>
        <Marquee />
      </section>
      <ScrollComponent />
    </>
  )
}


export default Home
