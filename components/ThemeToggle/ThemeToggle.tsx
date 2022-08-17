import { useContext } from "react";
import styled from 'styled-components'

import { ThemeContext } from "@components/ThemeProvider";
import { animated, useSpring } from "react-spring";

const ThemeToggle = () => {
  const {colorMode, setColorMode} = useContext(ThemeContext);

  const springConfig = { mass: 4, tension: 250, friction: 35 };
  const moonMaskStyles = useSpring({
    config: springConfig,
    transform: `translateX(${ colorMode == "dark" ? "-6px" : "0px" })`,
  });
  const sunArrayStyles = useSpring({
    config: springConfig,
    transform: `rotate(${ colorMode == "dark" ? "80deg" : "0deg" }) scale(${ colorMode == "dark" ? "0.7" : "1" })`,
    opacity: `${ colorMode == "dark" ? "0" : "1" }`,
  });

  const sunStyles = useSpring({
    config: {...springConfig, duration: 300},
    to: [
      { transform: `rotate(${ colorMode == "dark" ? "-15deg" : "0deg" })` },
      { transform: `rotate(2deg)` },
      { transform: `rotate(${ colorMode == "dark" ? "-3deg" : "0deg" })` },
      { transform: `rotate(0deg)` },
    ],
    from: { transform: `rotate(0deg)` },
  });

  // If js is disabled from the browser, this component won't be rendered
  if(!colorMode) {
    return null;
  }
  return (
    <>
    <ThemeToggleIcon 
      aria-hidden="true" 
      width="24" 
      height="24"
      viewBox="0 0 24 24" 
      onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}
    >
        {/* The Moon Mask */}
        <mask id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <animated.circle style={moonMaskStyles} cx="24" cy="10" r="6" fill="black" />
        </mask>
        {/* The sun */}
        <Circle style={sunStyles} className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" />
        {/* The sun arrays */}
        <Group style={sunArrayStyles}>
          <circle cx="12" cy="3" r="1.4" />
          <circle cx="3" cy="12" r="1.4" />
          <circle cx="21" cy="12" r="1.4" />
          <circle cx="12" cy="21" r="1.4" />
          <circle cx="5.6" cy="5.6" r="1.4" />
          <circle cx="18.3" cy="5.6" r="1.4" />
          <circle cx="18.3" cy="18.3" r="1.4" />
          <circle cx="5.6" cy="18.3" r="1.4" />
        </Group>
      </ThemeToggleIcon>
    </>
  );
}

const ThemeToggleIcon = styled.svg`
  color: var(--grey);
  width: 10rem;
  height: 10rem;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
  }
`
const Circle = styled(animated.circle)`
  fill: var(--grey);
  transform-origin: center;
`
const Group = styled(animated.g)`
  fill: var(--grey);
  transform-origin: center;
`

export default ThemeToggle;
