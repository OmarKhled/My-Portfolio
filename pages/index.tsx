import Hero from '@components/Hero'
import Marquee from '@components/Marquee'
import ScrollComponent from '@components/PreviousWork'
import Project from '@components/Project'
import COLORS from '@constants/colors'
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
          <Project backgroundColor={COLORS.goldenYellow.default}/>
          <Project backgroundColor={COLORS.hotPink.default}/>
          <Project backgroundColor={COLORS.butterflyBlue.default}/>
          <Project backgroundColor={COLORS.violetEggplant.default}/>
          <Project backgroundColor={COLORS.spunPearl.default}/>
          <Project backgroundColor={COLORS.blackRock.default}/>

        </ProjectsWrapper>
      </section>
      <div style={{ height: "2000px" }}></div>

    </>
  )
}

const ProjectsWrapper = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns:
      repeat(auto-fill, minmax(23.375rem, 1fr));
`


export default Home
