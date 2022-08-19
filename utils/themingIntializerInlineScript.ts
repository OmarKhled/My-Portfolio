import {
  THEMING_TAG_ID,
  COLORMODE_VAR_KEY,
  COLORMODE_STORAGE_KEY,
} from "@constants/constants";
import COLORS, {
  DARK_THEME_COLORS,
  LIGHT_THEME_COLORS,
} from "@constants/colors";
import createColorVariables from "@utils/createColorVariables";

const codeToRunOnClient = `
  const root = document.documentElement
  const getColorMode = () => {
    let color;
    if(window.localStorage.getItem("${COLORMODE_STORAGE_KEY}") != undefined) {
      color = window.localStorage.getItem("${COLORMODE_STORAGE_KEY}");
    } else if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
      color = "dark";
    } else {
      color = "light";
    }
    return color;
  }

  const setColorMode = () => {
    let initalColorMode = getColorMode();

    window.localStorage.setItem("${COLORMODE_STORAGE_KEY}", initalColorMode);
    root.style.setProperty("${COLORMODE_VAR_KEY}", initalColorMode);

    let themingStyleTag = document.getElementById("${THEMING_TAG_ID}");
    if (themingStyleTag) {
      themingStyleTag.remove();
    }
    themingStyleTag = document.createElement("style");

    themingStyleTag.setAttribute("id", "${THEMING_TAG_ID}");
    if (initalColorMode === "dark") {
      themingStyleTag.innerHTML = \`${
        ":root { \n" +
        createColorVariables(DARK_THEME_COLORS) +
        createColorVariables(COLORS) +
        "}"
      }\`
    } else if (initalColorMode === "light") {
      themingStyleTag.innerHTML = \`${
        ":root { \n" +
        createColorVariables(LIGHT_THEME_COLORS) +
        createColorVariables(COLORS) +
        "}"
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
      window.localStorage.setItem("${COLORMODE_STORAGE_KEY}", color);
      root.style.setProperty("${COLORMODE_VAR_KEY}", color);
      setColorMode()
  });

  setColorMode();
`;

export default codeToRunOnClient;
