import createColorVariables from "@utils/createColorVariables";
import COLORS, {
  DARK_THEME_COLORS,
  LIGHT_THEME_COLORS,
} from "@constants/colors";
import { Dispatch, SetStateAction } from "react";
import { colorModeType } from "./ThemeProvider";
import {
  COLORMODE_STORAGE_KEY,
  COLORMODE_VAR_KEY,
  THEMING_TAG_ID,
} from "@constants/constants";

const setColorMode = (
  rawSetColorMode: Dispatch<SetStateAction<colorModeType>>
) => {
  return (value: "dark" | "light") => {
    const themingStyleTag = document.getElementById(THEMING_TAG_ID);
    const root = document.documentElement;
    window.localStorage.setItem(COLORMODE_STORAGE_KEY, value);

    root.style.setProperty(COLORMODE_VAR_KEY, value);

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
