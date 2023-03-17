import type { NextPage } from "next";
import Head from "next/head";

import Hero from "@components/Hero";
import Marquee from "@components/Marquee";
import PreviousWork from "@components/PreviousWork";
import ProjectsGrid from "@components/ProjectsGrid";
import styled from "styled-components";
import Designs from "@components/Designs";
import Section from "@components/Section";
import Button from "@components/Button";
import StylizedLink from "@components/StylizedLink";
import UsedTechnologies from "@components/UsedTechnologies";
import Footer from "@components/Footer";
import Courses from "@components/Courses";

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title key={"title"}>Omar Khled</title>
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content="OmarKhled's Portfolio" />
        <meta
          name="description"
          content="Omar Khled - Creative Frontend Developer"
        />
        <meta property="og:url" content="https://omarkhled.me" />
        <meta
          property="og:image"
          content="https://omarkhled.me/images/ogg.png"
        />
      </Head>
      <Hero />
      <Section>
        <SectionTitle>Technologies I use</SectionTitle>
        <Marquee />
      </Section>
      <PreviousWork />
      <Section>
        <SectionTitle>Selected Projects</SectionTitle>
        <ProjectsGrid />
      </Section>
      <Section>
        <SectionTitle>Checkout Some of my courses</SectionTitle>
        <Courses />
      </Section>
      <Section>
        <Designs />
      </Section>
      <ApendixSection>
        <div>
          <SectionTitle>Contact Me</SectionTitle>
          <p>
            <StylizedLink color="primary" href="mailto: me@omarkhled.me">
              me@omarkhled.me
            </StylizedLink>
          </p>
        </div>
        <ResumeWrapper>
          <SectionTitle>Download My Full Resume</SectionTitle>
          <Button mode="secondary" as="a" href="/pdfs/resume.pdf">
            Get My Resume
          </Button>
        </ResumeWrapper>
      </ApendixSection>
      <Footer />
    </>
  );
};

const SectionTitle = styled.h4`
  text-align: center;
`;
const ApendixSection = styled(Section)`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
`;
const ResumeWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
`;

export default Home;
