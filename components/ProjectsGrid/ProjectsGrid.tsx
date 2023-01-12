import { NextPage } from "next";
import styled from "styled-components";

import projects from "@data/projects";
import Project from "@components/Project";
import Button from "@components/Button";
import Link from "next/link";

interface props {
  fullgrid?: boolean;
}

const ProjectsGrid: NextPage<props> = ({ fullgrid = false }) => {
  return (
    <div>
      <Wrapper>
        {projects.slice(0, fullgrid ? projects.length : 3).map((project) => (
          <Project key={project.name} {...project} />
        ))}
      </Wrapper>
      {!fullgrid && (
        <Link href="/previouswork">
          <Explore mode="secondary">Explore More</Explore>
        </Link>
      )}
    </div>
  );
};

const Wrapper = styled.div`
  display: grid;
  gap: 32px;
  grid-template-columns: repeat(auto-fill, minmax(min(24.375rem, 100%), 1fr));
  margin: 3rem 0 3rem 0;
`;
const Explore = styled(Button)`
  margin: auto;
`;

export default ProjectsGrid;
