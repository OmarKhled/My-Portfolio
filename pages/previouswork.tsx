import { NextPage } from "next";
import Head from "next/head";
import React from "react";
import styled from "styled-components";
import ProjectsGrid from "@components/ProjectsGrid";

const PreviousWork: NextPage = () => {
  return (
    <>
      <Head>
        <title key="title">Omar Khled - Previous Work</title>
      </Head>
      <Section>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsGrid fullgrid />
      </Section>
    </>
  );
};

const Section = styled.section`
  margin: 5rem 0;
  padding-bottom: 5rem;
`;
const SectionTitle = styled.h4`
  text-align: center;
`;

export default PreviousWork;
