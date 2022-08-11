import { DARK_THEME_COLORS, LIGHT_THEME_COLORS } from "@constants/colors";
import { createColorVariables } from "@components/GlobalStyles/GlobalStyles.helpers";

const codeToRunOnClient = `
  const root = document.documentElement
  const getColorMode = () => {
    let color;
    if(window.localStorage.getItem("colorMode") != undefined) {
      color = window.localStorage.getItem("colorMode");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      color = "dark";
    } else {
      color = "light";
    }
    return color;
  }

  const setColorMode = () => {
    let initalColorMode = getColorMode();

    window.localStorage.setItem("colorMode", initalColorMode);
    root.style.setProperty("--color-mode", initalColorMode);

    const themingStyleTag = document.createElement("style")
    if (initalColorMode === "dark") {
      themingStyleTag.innerHTML = \`${
        ":root { \n" + createColorVariables(DARK_THEME_COLORS) + "}"
      }\`
    } else if (initalColorMode === "light") {
      themingStyleTag.innerHTML = \`${
        ":root { \n" + createColorVariables(LIGHT_THEME_COLORS) + "}"
      }\`
    }
    document.head.appendChild(themingStyleTag)
  };

  window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",
    e => {
      let color;
      if (e.matches) {
        color = "dark";
      } else {
        color = "light"
      }
      window.localStorage.setItem("colorMode", color);
      root.style.setProperty("--color-mode", color);
      setColorMode()
  });

  setColorMode();
`;

export default codeToRunOnClient;
