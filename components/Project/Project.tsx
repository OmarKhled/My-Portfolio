import { clamp } from "@components/GlobalStyles/GlobalStyles.helpers";
import COLORS from "@constants/colors";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import getTextColor from "./Poject.helpers";

const Project: NextPage<{ 
  link?: string,
  name?: string,
  avatarImg?: string,
  client?: string,
  year?: string | number,
  backgroundColor?: string
}> = ({ 
  link = "https://ieeenu.com", 
  name = "IEEE NU Website", 
  avatarImg= "/images/projects/avatar/ieeenu.webp", 
  client = "IEEE NU", 
  year = "2022",
  backgroundColor= COLORS.goldenYellow.default
}) => {
  return (
    <Wrapper backgroundColor={backgroundColor}>
      <Title backgroundColor={backgroundColor}><Link href={link} passHref ><TitleLink target={"_blank"}>{name}</TitleLink></Link></Title>
      <Metadata>
        <Client>{client}</Client>
        <Year>{year}</Year>
      </Metadata>
      <Avatar src={avatarImg} />
    </Wrapper>
  );
}

const TitleLink = styled.a`
  color: inherit;
  text-decoration: none;
  will-change: box-shadow;
  transition: box-shadow 300ms ease;
`
const Wrapper = styled.div<{ backgroundColor: string }>`
  --padding: ${clamp(22, 45)};
  background-color: ${(p) => p.backgroundColor};
  border-radius: ${clamp(15, 25)};
  padding: var(--padding) var(--padding) 0 var(--padding);
  overflow: hidden;
  position: relative;
  max-width: 29.375rem;
  width: fit-content;
  @media (hover: hover) and (pointer: fine) { 
    &:hover {
      cursor: pointer;
      ${TitleLink} {
        box-shadow: 0px 3px 0px ${(p) => getTextColor(p.backgroundColor)};
      }
    }
  }
`
const Metadata = styled.div`
  @media (hover: hover) and (pointer: fine) { 
    margin-top: 0.2rem;
  }
  display: flex;
`
const Title = styled.h5<{ backgroundColor: string }>`
  color: ${(p) => getTextColor(p.backgroundColor)};
`
const Muted = styled.p`
  color: var(--grey-350);
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
  --width: calc(100% + var(--padding) * 2);
  display: block;
  width: var(--width);
  max-width: var(--width);
  margin-left: calc(var(--padding)*-1);
`

export default Project;
