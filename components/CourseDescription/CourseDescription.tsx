import { clamp } from "@components/GlobalStyles/GlobalStyles.helpers";
import React from "react";
import styled from "styled-components";

interface props {
  name: string;
  githubLink: string;
  previewImg: string;
  link: string;
}

const CourseDescription = ({ name, previewImg }: props) => {
  return (
    <>
      <PreviewWrapper img={previewImg}></PreviewWrapper>
      <Title>{name}</Title>
    </>
  );
};

const Title = styled.h3`
  text-align: left;
  margin-bottom: 1rem;
`;
const PreviewWrapper = styled.div<{ img: string }>`
  max-width: 1100px;
  margin: 0 auto 2rem auto;
  aspect-ratio: 16/9;
  @supports not (aspect-ratio: 16/9) {
    &::before {
      float: left;
      padding-top: 56.25%;
      content: "";
    }

    &::after {
      display: block;
      content: "";
      clear: both;
    }
  }
  background-image: url(${(p) => p.img});
  background-size: cover;
  background-position: top;
  border-radius: ${clamp(15, 25)};
`;
export default CourseDescription;
