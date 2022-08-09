import { createGlobalStyle } from "styled-components"
import { createColorVariables } from "./GlobalStyles.helpers"

import COLORS from "@constants/colors"

const GlobalStyles = createGlobalStyle`
  :root {
    ${createColorVariables(COLORS)}
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    margin: 0;
  }

  html, body {
    height: 100%;
    font-family: "Wotfard";
  }

  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }

  input, button, textarea, select {
    font: inherit;
  }

  #root, #__next {
    isolation: isolate;
  }
  
  /* Custom Typography Styles */
  h1, h2, h3, h4, h5, h6, p {
    min-height: 0vh;
    color: inherit;
  }

  h1 {
    font-weight: 700;
    font-size: clamp(calc(54.93 / 16 * 1rem), calc(5vw + 1rem) ,calc(68.66 / 16 * 1rem));
  }

  h2 {
    font-weight: 600;
    font-size: clamp(calc(43.95 / 16 * 1rem), calc(5vw + 1rem), calc(54.93 / 16 * 1rem));
  }

  h3 {
    font-weight: 600;
    font-size: clamp(calc(35.16 / 16 * 1rem), calc(4vw + 1rem), calc(43.95 / 16 * 1rem));
  }

  h4 {
    font-weight: 500;
    font-size: clamp(calc(28.13 / 16 * 1rem), calc(2vw + 1rem), calc(35.16 / 16 * 1rem));
  }

  h5 {
    font-weight: 500;
    font-size: clamp(calc(22.50 / 16 * 1rem), calc(2vw + 1rem), calc(28.13 / 16 * 1rem));
  }

  h6 {
    font-weight: 500;
    font-size: clamp(calc(18 / 16 * 1rem), calc(1vw + 1rem), calc(22.5 / 16 * 1rem));
  }

  p {
    font-weight: 400;
    font-size: clamp(calc(16 / 16 * 1rem), calc(2vw), calc(18 / 16 * 1rem));
  }

  small {
    font-weight: 400;
    font-size: clamp(calc(12.40 / 16 * 1rem), calc(2vw), calc(14.40 / 16 * 1rem));
  }
`

export default GlobalStyles