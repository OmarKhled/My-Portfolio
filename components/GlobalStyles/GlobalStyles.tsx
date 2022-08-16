import COLORS, { DARK_THEME_COLORS } from "@constants/colors"
import createColorVariables from "@utils/createColorVariables"
import { createGlobalStyle } from "styled-components"
import { clamp } from "./GlobalStyles.helpers"

const GlobalStyles = createGlobalStyle`

  :root {
    ${createColorVariables(COLORS) + "\n" + createColorVariables(DARK_THEME_COLORS)}
  }

  *, *::before, *::after {
    box-sizing: border-box;
  }

  * {
    line-height: calc(1em + 0.5rem);
    margin: 0;
  }

  html, body {
    height: 100%;
    font-family: "Wotfard", Arial, Helvetica, sans-serif;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
    line-height: 0;
  }

  input, button, textarea, select {
    font: inherit;
  }

  #__next {
    width: 100%;
    height: 100%;
  }

  #root, #__next {
    isolation: isolate;
  }

  #__next {
    width: 100%;
    height: 100%;
  }
  
  /* Custom Typography Styles */
  h1, h2, h3, h4, h5, h6, p {
    min-height: 0vh;
    color: inherit;
  }

  h1 {
    font-weight: 700;
    font-size: ${clamp(54.39, 68.66)};
  }

  h2 {
    font-weight: 600;
    font-size: ${clamp(43.95, 54.93)}
  }

  h3 {
    font-weight: 600;
    font-size: ${clamp(35.16, 43.95)}
  }

  h4 {
    font-weight: 500;
    font-size: ${clamp(28.13, 35.16)}
  }

  h5 {
    font-weight: 500;
    font-size: ${clamp(22.50, 28.13)};
  }

  h6 {
    font-weight: 500;
    font-size: ${clamp(18.00, 22.50)};
  }

  p {
    font-weight: 400;
    font-size: ${clamp(16.00, 18.00)};
  }

  small {
    font-weight: 400;
    font-size: ${clamp(12.40, 16.40)};;
  }
`

export default GlobalStyles