import { NextPage } from "next";
import React from "react";

const ThemeInitializer: NextPage<{ children: React.ReactNode }> = ({children}) => {  
  return (
    <>
      {children}
    </>
  );
}

export default ThemeInitializer;
