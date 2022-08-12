import createColorVariables from "@utils/createColorVariables";
import COLORS, {
  DARK_THEME_COLORS,
  LIGHT_THEME_COLORS,
} from "@constants/colors";
import { Dispatch, SetStateAction } from "react";
import { colorModeType } from "./ThemeProvider";

const setColorMode = (
  rawSetColorMode: Dispatch<SetStateAction<colorModeType>>
) => {
  return (value: "dark" | "light") => {
    const themingStyleTag = document.getElementById("theming-tag");
    const root = document.documentElement;
    window.localStorage.setItem("colorMode", value);

    root.style.setProperty("--color-mode", value);

    if (themingStyleTag) {
      themingStyleTag.innerHTML = `${
        ":root { \n" +
        createColorVariables(
          value === "dark" ? DARK_THEME_COLORS : LIGHT_THEME_COLORS
        ) +
        createColorVariables(COLORS) +
        "}"
      }`;
    }
    rawSetColorMode(value);
  };
};

export { setColorMode };
