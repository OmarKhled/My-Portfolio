import { NextPage } from 'next'
import styled, { keyframes } from 'styled-components'

const MouseScroll: NextPage = ({ ...props }) => {
  return (
    <>
      <Wrapper x="0px" y="0px" viewBox="0 0 200 350" xmlSpace="preserve" {...props}>
      <St0 d="M100,9.83L100,9.83c50.31,0,91.09,40.78,91.09,91.09v121.06c0,50.31-40.78,91.09-91.09,91.09h0
        c-50.31,0-91.09-40.78-91.09-91.09V100.93C8.91,50.62,49.69,9.83,100,9.83z"/>
      <St1 className="st1" x1="100" y1="75.17" x2="100" y2="108.44"/>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.svg`
  --size: 5rem;
  width: var(--size);
  height: var(--size);
`
const St0 = styled.path`
  fill: var(--background);
  stroke:var(--textColor);
  stroke-width:20;
`
const wiggle = keyframes`
  0% {
    transform: translateY(0%);
    opacity: 0;
  }

  18% {
    transform: translateY(0%);
    opacity: 1;
  }

  100% {
    transform: translateY(40%);
    opacity: 0;
  }
`;
const St1 = styled.line`
  stroke:var(--textColor);
  stroke-width:25;
  stroke-linecap:round;
  will-change: opacity, transform;
  animation: ${wiggle} 1.6s ease infinite;
`

export default MouseScroll