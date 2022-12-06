import { clamp } from "@components/GlobalStyles/GlobalStyles.helpers";
import COLORS from "@constants/colors";
import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styled from "styled-components";
import getAppropiateColor from "./Poject.helpers";

const Project: NextPage<{
  link?: string;
  name?: string;
  avatarImg?: string;
  client?: string;
  year?: string | number;
  backgroundColor?: string;
}> = ({
  link = "/projects/ieee-nu",
  name = "IEEE NU Website",
  avatarImg = "/images/projects/avatar/ieeenu.webp",
  client = "IEEE NU",
  year = "2022",
  backgroundColor = COLORS.royalBlue.default,
}) => {
  return (
    <Link href={link} passHref>
      <Wrapper
        target={link.includes("//") ? "_blank" : "_self"}
        backgroundColor={backgroundColor}
      >
        <Title>{name}</Title>
        <Metadata>
          <Client>{client}</Client>
          <Year>{year}</Year>
        </Metadata>
        <Avatar src={avatarImg} alt={`${name} avatar`} />
      </Wrapper>
    </Link>
  );
};

const Title = styled.h5`
  color: var(--titleColor);
  will-change: box-shadow;
  transition: box-shadow 300ms ease;
  width: fit-content;
  line-height: initial;
`;
const Wrapper = styled.a<{ backgroundColor: string }>`
  --bg: ${(p) => p.backgroundColor};
  --titleColor: ${(p) => getAppropiateColor(p.backgroundColor, "primary")};
  --mutedColor: ${(p) => getAppropiateColor(p.backgroundColor, "secondary")};
  --padding: ${clamp(22, 45)};

  display: block;
  background-color: var(--bg);
  border-radius: ${clamp(15, 25)};
  padding: var(--padding) var(--padding) 0 var(--padding);
  overflow: hidden;
  position: relative;
  text-decoration: none;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      cursor: pointer;
      ${Title} {
        box-shadow: 0px 3px 0px var(--titleColor);
      }
    }
  }
`;
const Metadata = styled.div`
  @media (hover: hover) and (pointer: fine) {
    margin-top: 0.3rem;
  }
  display: flex;
`;
const Muted = styled.p`
  color: var(--mutedColor);
  font-weight: 600;
`;
const Client = styled(Muted)`
  &::after {
    content: "•";
    margin: 0 0.4rem 0 0.4rem;
  }
`;
const Year = styled(Muted)``;
const Avatar = styled.img`
  --width: calc(100% + var(--padding) * 2);
  display: block;
  width: var(--width);
  max-width: var(--width);
  margin-left: calc(var(--padding) * -1);
`;

export default Project;
