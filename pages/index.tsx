import Hero from '@components/Hero'
import Marquee from '@components/Marquee'
import ScrollComponent from '@components/PreviousWork'
import Project from '@components/Project'
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

      <section style={{ marginTop: "5rem" }}>
        <h4 style={{ textAlign: "center", marginBottom: "3rem" }}>Selected Projects</h4>
        <ProjectsWrapper>
          <Project />

        </ProjectsWrapper>
      </section>
      <div style={{ height: "2000px" }}></div>

    </>
  )
}

const ProjectsWrapper = styled.div`
  /* display: grid;
  gap: 16px;
  grid-template-columns:
    repeat(auto-fill, 26.375rem); */
`


export default Home
