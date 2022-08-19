import { useContext } from "react";
import styled from 'styled-components'

import { ThemeContext } from "@components/ThemeProvider";
import { animated, useSpring } from "react-spring";

const ThemeToggle = ({ ...props }) => {
  const {colorMode, setColorMode} = useContext(ThemeContext);

  const springConfig = { mass: 4, tension: 250, friction: 35 };
  const moonMaskStyles = useSpring({
    config: springConfig,
    transform: `translateX(${ colorMode == "light" ? "-6px" : "0px" })`,
  });
  const sunArrayStyles = useSpring({
    config: springConfig,
    transform: `rotate(${ colorMode == "light" ? "80deg" : "0deg" }) scale(${ colorMode == "light" ? "0.7" : "1" })`,
    opacity: `${ colorMode == "light" ? "0" : "1" }`,
  });

  const sunStyles = useSpring({
    config: {...springConfig, duration: 300},
    to: [
      { transform: `rotate(${ colorMode == "light" ? "-20deg" : "0deg" }) scale(${ colorMode == "light" ? "1.5" : "1" })` },
      { transform: `rotate(5deg) scale(${ colorMode == "light" ? "1.5" : "1" })` },
      { transform: `rotate(${ colorMode == "light" ? "-8deg" : "0deg" }) scale(${ colorMode == "light" ? "1.5" : "1" })` },
      { transform: `rotate(0deg) scale(${ colorMode == "light" ? "1.5" : "1" })` },
    ],
    from: { transform: `rotate(0deg) scale(${ colorMode == "light" ? "1.5" : "1" })` },
  });

  // If js is disabled from the browser, this component won't be rendered
  if(!colorMode) {
    return null;
  }
  return (
    // The span element is to increase the tapable area using ::after pesodu element
    // Replaced Elements like svgs can't have pesodu elements so we are using span to wrap it
    // Tapable are increase: https://courses.joshwcomeau.com/css-for-js/09-little-big-details/06-mobile-ux
    <Wrapper {...props} aria-label="theme-toggle-button" onClick={() => setColorMode(colorMode === "dark" ? "light" : "dark")}>
      <ThemeToggleIcon 
        aria-hidden="true" 
        width="24" 
        height="24"
        viewBox="0 0 24 24" 
      >
          {/* The Moon Mask */}
          <mask id="moonmask">
            <rect x="0" y="0" width="100%" height="100%" fill="white" />
            <animated.circle style={moonMaskStyles} cx="24" cy="10" r="6" fill="black" />
          </mask>
          {/* The sun */}
          <Circle style={sunStyles} className="sun" cx="12" cy="12" r="6" mask="url(#moonmask)" />
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
    </Wrapper>
  );
}
const Wrapper = styled.button`
  background: none;
  border: none;
  padding: 0;
  margin: 0;
  line-height: 0;
  cursor: pointer;
`
const ThemeToggleIcon = styled.svg`
  /* --size: 2rem; */
  fill: var(--grey);
  transition: fill 500ms ease, stroke 500ms ease;
  width: var(--size);
  height: var(--size);
  cursor: pointer;
`
const Circle = styled(animated.circle)`
  transform-origin: center;
`
const Group = styled(animated.g)`
  transform-origin: center;
`

export default ThemeToggle;
