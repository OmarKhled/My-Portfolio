import { clamp } from "@components/GlobalStyles/GlobalStyles.helpers";
import { NextPage } from "next";
import { animated, useSpring } from "react-spring";
import styled from "styled-components"

interface props {
  open: boolean,
  setOpen: (v: boolean) => void
}
const MenuBurger: NextPage<props> = ({ open, setOpen, ...props }) => {
  const springConfig = { mass: 3, tension: 150, friction: 30 };
  const topRectStyles = useSpring({
    config: springConfig,
    transform: `rotate(${open ? "45deg" : "0deg"}) translate(${open ? "5px, -5px" : "0px, 0px"}) scale(${open ? "1.2, 1" : "1, 1"})`,
    "transformOrigin": "top left"
  })
  const bottomRectStyles = useSpring({
    config: springConfig,
    transform: `rotate(${open ? "45deg" : "0deg"}) translate(${open ? "-3.5px, 3.5px" : "0px, 0px"}) scale(${open ? "1.2, 1" : "1, 1"})`,
    "transformOrigin": "bottom right"
  })
  const centerRectStyles = useSpring({
    config: springConfig,
    transform: `rotate(${open ? "-45deg" : "0deg"}) scale(${open ? "0.9, 1" : "1, 1"})`,
    "transformOrigin": "center"
  })
  return (
    <Wrapper aria-label="nav-menu-button" aria-haspopup="true" aria-expanded={open} onClick={() => setOpen(!open)} {...props}>
      <BurgeIcon viewBox="0 0 28 20.5">
        <g>
          <animated.rect style={topRectStyles} width="14" rx="1.45" height="2.9" />
          <animated.rect style={centerRectStyles} width="28" rx="1.45" height="2.9" y="9"/>
          <animated.rect style={bottomRectStyles} width="14" rx="1.45" height="2.9" x="14" y="17.5"/>
        </g>
      </BurgeIcon>
    </Wrapper>
  )
}
const Wrapper = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  line-height: 0;
  cursor: pointer;
`

const BurgeIcon = styled(animated.svg)`
  --size: ${clamp(28, 38)};
  width: var(--size);
  fill: var(--secondary);
  transition: fill 400ms ease;
  cursor: pointer;
  position: relative;
  z-index: 2;
`

export default MenuBurger