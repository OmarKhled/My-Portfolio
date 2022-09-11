import { NextPage } from "next";
import React from "react";
import styled from "styled-components";

import projects from '@data/projects'
import Project from '@components/Project'

const ProjectsGrid: NextPage = () => {
  return (
    <Wrapper>
      {
        projects.map((project) => (
          <Project key={project.name} {...project} />
        ))
      }
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns:
      repeat(
        auto-fill,
        minmax(min(24.375rem, 100%), 1fr)
      );
  margin-top: 2rem;
`

export default ProjectsGrid;
