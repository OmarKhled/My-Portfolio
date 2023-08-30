import Link from "next/link";
import React from "react";
import styled from "styled-components";

interface props {
  name: string;
  avatarImg: string;
  description: string;
  link: string;
}

const Course = ({ name, avatarImg, description, link }: props) => {
  return (
    <Link href={link} passHref>
      <Wrapper href={link}>
        <Logo src={avatarImg} />
        <Title>{name}</Title>
        <Description>{description}</Description>
      </Wrapper>
    </Link>
  );
};

const Title = styled.h5`
  will-change: box-shadow;
  transition: box-shadow 300ms ease;
  width: fit-content;
  line-height: initial;
  margin-bottom: 0.5rem;
`;
const Wrapper = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: min(100%, 25rem);
  cursor: pointer;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      ${Title} {
        box-shadow: 0px 3px 0px var(--textColor);
      }
    }
  }
  text-decoration: none;
  color: var(--textColor);
`;
const Logo = styled.img`
  width: max(65%, 10rem);
  margin-bottom: 0.8rem;
`;
const Description = styled.p`
  color: var(--grey-250);
`;

export default Course;
