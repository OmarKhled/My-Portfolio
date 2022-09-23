import React from "react";
import styled from "styled-components";

import Firebase from "./icons/firebase.svg"
import Framer from "./icons/framer.svg"
import Md from "./icons/markdown.svg"
import Mdx from "./icons/mdx.svg"
import ReactIcon from "./icons/react.svg"
import Spring from "./icons/spring.svg"
import Three from "./icons/threejs.svg"
import Ts from "./icons/ts.svg"
import Webgl from "./icons/webgl.svg"
import Next from "./icons/next.svg"
import Vercel from "./icons/vercel.svg"


type icon = "firebase" | "framer" | "md" | "mdx" | "react" | "spring" | "threejs" | "ts" | "webgl" | "next" | "vercel"

const Icon = ({ icon }: { icon: icon }) => {
  const Icons = [
    { name: "firebase", component: Firebase },
    { name: "framer", component: Framer },
    { name: "md", component: Md },
    { name: "mdx", component: Mdx },
    { name: "react", component: ReactIcon },
    { name: "spring", component: Spring },
    { name: "threejs", component: Three },
    { name: "ts", component: Ts },
    { name: "webgl", component: Webgl },
    { name: "next", component: Next },
    { name: "vercel", component: Vercel },
  ]
  return <>
    {
      Icons.map(Icon => (Icon.name === icon ? <Icon.component key={icon} /> : <></>))
    }
  </>
}

const Wrapper = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  &>svg {
    width: 40px;
  }
`

export default Icon;
