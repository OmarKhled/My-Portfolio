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
    rawSetColorMode(root.style.getPropertyValue("--color-mode") as colorModeType);
  }, []);

  return (
    <ThemeContext.Provider value={{ colorMode, setColorMode: setColorMode(rawSetColorMode) }}>
      {children}
    </ThemeContext.Provider>
  );
}

export default ThemeProvider;
