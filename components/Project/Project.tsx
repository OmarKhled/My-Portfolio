import { clamp } from "@components/GlobalStyles/GlobalStyles.helpers";
import COLORS from "@constants/colors";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const Project = () => {
  return (
    <Wrapper>
      <Title><Link href="https://ieeenu.com" passHref ><TitleLink target={"_blank"}>IEEE NU Website</TitleLink></Link></Title>
      <Metadata>
        <Client>IEEE NU</Client>
        <Year>2022</Year>
      </Metadata>
      <Avatar src="/images/projects/avatar/ieeenu.webp" />
    </Wrapper>
  );
}

// Convert the max width to dynamic value refrenced by the MAX_WIDTH Variable and the inherited gap custom css property
const Wrapper = styled.div`
  --padding: ${clamp(22, 45)};
  background-color: ${COLORS.royalBlue[450]};
  color: #fff;
  border-radius: ${clamp(15, 25)};
  padding: var(--padding) var(--padding) 0 var(--padding);
  overflow: hidden;
  position: relative;
  /* max-width: 29.375rem; */
  width: fit-content;
`
const Metadata = styled.div`
  @media (hover: hover) and (pointer: fine) { 
    margin-top: 0.2rem;
  }
  display: flex;
`
const TitleLink = styled.a`
  color: inherit;
  text-decoration: none;
  will-change: box-shadow;
  transition: box-shadow 300ms ease;
  @media (hover: hover) and (pointer: fine) { 
    &:hover {
      box-shadow: 0px 3px 0px white;
    }
  }
`
const Title = styled.h5`

`
const Muted = styled.p`
  color: var(--grey-150);
  font-weight: 600;
`
const Client = styled(Muted)`
  &::after {
    content: "•";
    margin: 0 0.4rem 0 0.4rem;
  }
`
const Year = styled(Muted)``
const Avatar = styled.img`
  display: block;
  width: calc(100% + var(--padding) * 2);
  max-width: 38rem;
  margin-left: calc(var(--padding)*-1);
`

export default Project;
