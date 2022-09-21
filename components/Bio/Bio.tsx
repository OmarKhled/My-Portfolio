import styled from "styled-components";
import Button from "@components/Button";
import { clamp } from "@components/GlobalStyles/GlobalStyles.helpers";
import BREAKPOINTS, { QUERIES } from "@constants/breakpoints";

const Bio = () => {
  return (
    <Wrapper>
      <FirstColumn>
        <Image src="/images/profile.png" />
      </FirstColumn>
      <SecondColumn>
        <Title>About Me</Title>
        <Description>
          I&apos;m Omar Khaled, a Computer engineering student at Nile University in Egypt. I&apos;m interested in web development and everything in its orbit, especially the front-end side, my dual knowledge in design and  development allows me to understand the user needs as well as the technical need of any project which result in an awesome user experience.
        </Description>
        <Button mode="primary" as={"a"} href={"mailto:o.abuelfetohahmed?subject=Project%20Proposal"}>Contact Me</Button>
      </SecondColumn>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  margin-top: ${clamp(80, 150, BREAKPOINTS.laptopStart)};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 5rem;

  gap: 4rem;

  @media ${QUERIES.tabletAndUp} {
    flex-direction: row;
    text-align: left;
  }
`
const FirstColumn = styled.div`
  width: min(100%, 20rem);
  @media ${QUERIES.tabletAndUp} {
    flex-shrink: 0;
  }
  
`
const Image = styled.img`
  
`
const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media ${QUERIES.tabletAndUp} {
    align-items: initial;
  }
`
const Title = styled.h2`
  color: var(--tertiary);
`
const Description = styled.p`
  max-width: 48.5625rem;
  text-align: justify;
`


export default Bio;
