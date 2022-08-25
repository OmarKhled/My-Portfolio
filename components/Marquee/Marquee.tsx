import { NextPage } from "next";
import styled, { keyframes } from "styled-components";
import { FaReact, FaChrome } from "react-icons/fa"
import { SiTypescript } from "react-icons/si"
import { TbBrandNextjs } from "react-icons/tb"

const Marquee: NextPage = () => {
  return (
    <Wrapper>
      <MarqueeContent>
        <MarqueeElement><FaReact /></MarqueeElement>
        <MarqueeElement><FaChrome /></MarqueeElement>
        <MarqueeElement><SiTypescript /></MarqueeElement>
        <MarqueeElement><TbBrandNextjs /></MarqueeElement>
        <MarqueeElement><FaChrome /></MarqueeElement>
        <MarqueeElement><SiTypescript /></MarqueeElement>
        <MarqueeElement><TbBrandNextjs /></MarqueeElement>
      </MarqueeContent>
      <MarqueeContent aria-hidden="true">
        <MarqueeElement><FaReact /></MarqueeElement>
        <MarqueeElement><FaChrome /></MarqueeElement>
        <MarqueeElement><SiTypescript /></MarqueeElement>
        <MarqueeElement><TbBrandNextjs /></MarqueeElement>
        <MarqueeElement><FaChrome /></MarqueeElement>
        <MarqueeElement><SiTypescript /></MarqueeElement>
        <MarqueeElement><TbBrandNextjs /></MarqueeElement>
      </MarqueeContent>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  --gap: 1rem;
  display: flex;
  overflow: hidden;
  user-select: none;
  gap: var(--gap);
  margin-top: 1rem;
  padding: 1rem;
  padding-bottom: 5rem;
  mask-image: linear-gradient(
    var(--mask-direction, to right),
    hsl(0 0% 0% / 0),
    hsl(0 0% 0% / 1) 20%,
    hsl(0 0% 0% / 1) 80%,
    hsl(0 0% 0% / 0)
  );
  max-width: 900px;
  margin: auto;
`
const scroll = keyframes`
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(calc(-100% - var(--gap)));
  }
`
const MarqueeContent = styled.ul`
  padding: 0;
  list-style: none;
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  min-width: 100%;
  gap: var(--gap);
  animation: ${scroll} 45s linear infinite;
`

const MarqueeElement = styled.div`
  /* background-color: #4a455f47; */
  padding: 2rem 4rem;
  /* border-radius: 8px; */
  /* box-shadow: 0 0 7px 1px var(--background-300); */
  --size: 3rem;
  & svg {
    opacity: 0.7;
    width: var(--size);
    height: var(--size);
  }
`

export default Marquee;
