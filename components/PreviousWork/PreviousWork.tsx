import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import { useScroll } from "framer-motion";
import styled from "styled-components";

import { QUERIES } from "@constants/breakpoints";
import Details from "./Details";
import ScrollComponent from "./ScrollComponent";

const PreviousWork: NextPage = () => {
  const ref = useRef(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] })
  const [y, setY] = useState(0);

  useEffect(() => {
    scrollYProgress.onChange((latest) => {
      console.log("element scroll: ", latest);
      setY(latest);
    })
  }, [scrollYProgress]);
  return (
    <>
      <Wrapper ref={ref}>
        <FirstColumn>
          <Details />
        </FirstColumn>
        <SecondColumn>
          <ScrollComponent scrollYProgress={scrollYProgress} />
          <PreviousProjects src="/images/previousProjects.webp" />
        </SecondColumn>
      </Wrapper>
      <div style={{ height: "2000px" }}></div>
    </>
  );
}

const Wrapper = styled.div`
  position: relative;
  display: flex;
  gap: 2rem;
  &>div {
    flex: 1;
  }
  flex-direction: column-reverse;
  text-align: center;
  @media ${QUERIES.tabletAndUp} {
    text-align: left;
    flex-direction: row;
    gap: 4rem;
  }
`
const PreviousProjects = styled.img`
  margin: auto;
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`
const FirstColumn = styled.div``
const SecondColumn = styled.div``

export default PreviousWork;
