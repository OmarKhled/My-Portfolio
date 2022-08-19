import { COLORMODE_VAR_KEY } from "@constants/constants";
import { NextPage } from "next";
import { createContext, useEffect, useState } from "react";

import { setColorMode } from "./ThemeProvider.helpers"

export type colorModeType = "dark" | "light" | undefined;

type themeContextType = 
({ colorMode: colorModeType, setColorMode: (c: "dark" | "light") => void });

export const ThemeContext = createContext<themeContextType>({ colorMode: undefined, setColorMode: () => () => {} });

const ThemeProvider: NextPage<{ children: React.ReactNode }> = ({children}) => {  
  const [colorMode, rawSetColorMode] = useState<colorModeType>(undefined);
  
  useEffect(() => {
    const root = document.documentElement;
    rawSetColorMode(root.style.getPropertyValue(COLORMODE_VAR_KEY) as colorModeType);

    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",
    e => {
      let color: colorModeType;
      if (e.matches) {
        color = "dark";
      } else {
        color = "light"
      }
      rawSetColorMode(color);
    });
  }, []);

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode: setColorMode(rawSetColorMode) }}>
      {children}
    </ThemeContext.Provider>
  );
}



export default ThemeProvider;
