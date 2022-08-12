import { NextPage } from "next";
import { createContext, useEffect, useState } from "react";

import { setColorMode } from "./ThemeProvider.helpers"

export type colorModeType = "dark" | "light";

type themeContextType = 
({ colorMode: "dark" | "light", setColorMode: (c: "dark" | "light") => void });

export const ThemeContext = createContext<themeContextType>({ colorMode: "light", setColorMode: () => () => {} });

const ThemeProvider: NextPage<{ children: React.ReactNode }> = ({children}) => {  
  const [colorMode, rawSetColorMode] = useState<colorModeType>("dark");
  
  useEffect(() => {
    const root = document.documentElement;
    rawSetColorMode(root.style.getPropertyValue("--color-mode") as colorModeType);
  }, []);

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode: setColorMode(rawSetColorMode) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
