import { createGlobalStyle } from "styled-components"
import { colorVariables } from "./GlobalStyles.helpers"

const GlobalStyles = createGlobalStyle`
  :root {
    ${colorVariables}
  }
  body {
    font-family: "Wotfard";
  }
`

export default GlobalStyles