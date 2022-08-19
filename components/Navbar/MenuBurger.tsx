import { clamp } from "@components/GlobalStyles/GlobalStyles.helpers";
import { useState } from "react"
import { animated, useSpring } from "react-spring";
import styled from "styled-components"

const MenuBurger = ({ ...props }) => {
  const [open, setOpen] = useState<boolean>(false);
  const springConfig = { mass: 3, tension: 150, friction: 30 };
  const topRectStyles = useSpring({
    config: springConfig,
    transform: `rotate(${open ? "45deg" : "0deg"}) translate(${open ? "5px, -5px" : "0px, 0px"}) scale(${open ? "1.2, 1" : "1, 1"})`,
    "transform-origin": "top left"
  })
  const bottomRectStyles = useSpring({
    config: springConfig,
    transform: `rotate(${open ? "45deg" : "0deg"}) translate(${open ? "-3.5px, 3.5px" : "0px, 0px"}) scale(${open ? "1.2, 1" : "1, 1"})`,
    "transform-origin": "bottom right"
  })
  const centerRectStyles = useSpring({
    config: springConfig,
    transform: `rotate(${open ? "-45deg" : "0deg"}) scale(${open ? "0.9, 1" : "1, 1"})`,
    "transform-origin": "center"
  })
  return (
    <span onClick={() => setOpen(!open)} {...props}>
      <BurgeIcon viewBox="0 0 28 20.5">
        <g>
          <animated.rect style={topRectStyles} width="14" height="2.9" />
          <animated.rect style={centerRectStyles} width="28" height="2.9" y="9"/>
          <animated.rect style={bottomRectStyles} width="14" height="2.9" x="14" y="17.5"/>
        </g>
      </BurgeIcon>
    </span>
  )
}

const BurgeIcon = styled(animated.svg)`
  --size: ${clamp(28, 38)};
  width: var(--size);
  fill: var(--secondary);
  cursor: pointer;
  & rect {
    rx: 1.45;
  }
`

export default MenuBurger