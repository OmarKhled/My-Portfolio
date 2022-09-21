import { NextPage } from "next";
import { useState } from "react"
import styled, { keyframes } from "styled-components";
import Icon from "@components/Icon";
import Button from "@components/Button";

const Icons = () => (
  <>
    <MarqueeElement><Icon icon="react" /></MarqueeElement>
    <MarqueeElement ><Icon icon="next" /></MarqueeElement>
    <MarqueeElement><Icon icon="spring" /></MarqueeElement>
    <MarqueeElement><Icon icon="mdx" /></MarqueeElement>
    <MarqueeElement><Icon icon="ts" /></MarqueeElement>
    <MarqueeElement><Icon icon="md" /></MarqueeElement>
    <MarqueeElement><Icon icon="threejs" /></MarqueeElement>
    <MarqueeElement><Icon icon="webgl" /></MarqueeElement>
    <MarqueeElement><Icon icon="vercel" /></MarqueeElement>
    <MarqueeElement><Icon icon="framer" /></MarqueeElement>
    <MarqueeElement><Icon icon="firebase" /></MarqueeElement>
  </>
);

const Marquee: NextPage = () => {
  const [animation, setAnimation] = useState(true)
  return (
    <>
      <Wrapper>
        <MarqueeContent anim={animation}>
          <Icons />
        </MarqueeContent>
        <MarqueeContent aria-hidden="true" anim={animation}>
          <Icons />
        </MarqueeContent>
      </Wrapper>
    </>
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
const MarqueeContent = styled.ul<{ anim: boolean }>`
  padding: 0;
  list-style: none;
  flex-shrink: 0;
  display: flex;
  justify-content: space-around;
  min-width: 100%;
  gap: var(--gap);
  animation: ${ p => p.anim ? scroll : ""} 25s linear infinite;
`

const MarqueeElement = styled.li`
  /* background-color: #4a455f0; */
  padding: 2rem 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & svg {
    opacity: 1;
    /* width: var(--size);
    height: var(--size); */
    filter: brightness(115%);
  }
`

export default Marquee;
