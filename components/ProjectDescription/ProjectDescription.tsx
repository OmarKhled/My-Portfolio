import React from "react";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";

import BrowserHeader from "@components/BrowserHeader";
import IconWrapper from "@components/IconWrapper";

interface props {
  name: string;
  githubLink: string;
  previewImg: string;
  link: string;
}

const ProjectDescription = ({ name, githubLink, previewImg, link }: props) => {
  return (
    <>
      <Title>{name}</Title>
      <ProjectLinks>
        {githubLink && (
          <IconWrapper as="a" href={githubLink} target="_blank">
            <AiFillGithub />
          </IconWrapper>
        )}
        {link && (
          <IconWrapper as="a" href={link} target="_blank">
            <BiLink />
          </IconWrapper>
        )}
      </ProjectLinks>
      <br />
      <PreviewWrapper>
        <BrowserHeader link={link.split("//")[1]} />
        <PreviewImage src={previewImg} alt={name} />
      </PreviewWrapper>
    </>
  );
};

const Title = styled.h2`
  text-align: center;
`;
const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const PreviewWrapper = styled.div`
  /* max-width: 1100px; */
  margin: 0 auto 3rem auto;
`;
const PreviewImage = styled.img`
  width: 100%;
  border: hsl(200, 1%, 40%) solid 1px;
  border-top: none;
`;
export default ProjectDescription;
