import type { NextPage } from 'next'
import Head from 'next/head'

import Hero from '@components/Hero'
import Marquee from '@components/Marquee'
import ScrollComponent from '@components/PreviousWork'
import ProjectsGrid from '@components/ProjectsGrid'
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
        <SectionTitle>Technologies I use</SectionTitle>
        <Marquee />
      </section>
      <ScrollComponent />

      <section style={{ marginTop: "5rem" }}>
        <SectionTitle>Selected Projects</SectionTitle>
        <ProjectsGrid />
      </section>
      <div style={{ height: "2000px" }}></div>

    </>
  )
}

const SectionTitle = styled.h4`
  text-align: center;
`


export default Home
