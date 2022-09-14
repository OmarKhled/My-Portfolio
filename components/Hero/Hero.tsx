import Button from "@components/Button";
import { clamp } from "@components/GlobalStyles/GlobalStyles.helpers";
import { NextPage } from "next";
import styled from "styled-components";
import MouseScroll from "./MouseScrollIcon";

const Hero: NextPage = () => {
  return (
    <Wrapper>
      <Title>I Develop Things for the Web<Dot>.</Dot></Title>
      <Muted>Build • Develop • Ship</Muted>
      <Button as="a" href="#" mode="primary">Get to know me more</Button>
      <MouseScrollIcon />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: auto;
  margin-top: ${clamp(60, 144)};
  width: fit-content;
  gap: 2rem;
  padding: 2rem 0;
`
const Title = styled.h1`
  max-width: min(600px, 100%);
  text-align: center;
  margin: 0 auto;
`
const Dot = styled.span`
  color: var(--secondary);
  transition: color 400ms ease;
`
const Muted = styled.h6`
  color: var(--grey);
  font-weight: 700;
`
const MouseScrollIcon = styled(MouseScroll)`
  --size: ${clamp(60, 80)};
  margin-top: ${clamp(60, 130)};
  /* margin-top: auto; */
`


export default Hero;