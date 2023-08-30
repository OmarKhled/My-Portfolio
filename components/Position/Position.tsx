import React from "react";
import styled from "styled-components";

interface props {
  name: string;
  avatarImg: string;
  description: string;
  interval: string;
  link: string;
}

const Position = ({ name, avatarImg, description, link, interval }: props) => {
  return (
    <Wrapper href={link} target="_blank">
      <Logo src={avatarImg} />
      <Title>{name}</Title>
      <DetailsWrapper>
        <Description>{description}</Description>
        {/* <Separator>•</Separator> */}
        <Interval>{interval}</Interval>
      </DetailsWrapper>
    </Wrapper>
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
  width: max(45%, 10rem);
  margin-bottom: 0.8rem;
`;
const DetailsWrapper = styled.div`
  display: flex;
  color: var(--grey-250);
  gap: 0.2rem 0.5rem;
  justify-content: center;
  @media (max-width: 400px) {
    flex-direction: column;
  }
  /* flex-wrap: wrap; */
`;
const Description = styled.p`
  &::after {
    content: "•";
    margin-left: 0.5rem;
    @media (max-width: 400px) {
      content: "";
      margin: 0;
    }
  }
`;
const Interval = styled.p``;

export default Position;
