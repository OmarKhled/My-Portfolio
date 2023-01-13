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
          It is me, Omar Khaled, a computer engineering student at Nile
          University in Egypt. I&apos;m interested in web development in
          addition to everything in its orbit, especially the front-end side. My
          dual knowledge in design and development allows me to understand the
          user&apos;s needs and the technical needs related to any project to
          get more than the expected results.
        </Description>
        <Button
          mode="primary"
          as={"a"}
          href={"mailto:me@omarkhled.me?subject=Project%20Proposal"}
        >
          Contact Me
        </Button>
      </SecondColumn>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  margin-top: ${clamp(80, 150, BREAKPOINTS.laptopStart)};
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 5rem;
  gap: 2rem;

  @media ${QUERIES.tabletAndUp} {
    gap: 4rem;
    flex-direction: row;
    text-align: left;
  }
`;
const FirstColumn = styled.div`
  width: min(100%, 20rem);
  @media ${QUERIES.tabletAndUp} {
    flex-shrink: 0;
  }
`;
const Image = styled.img``;
const SecondColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  @media ${QUERIES.tabletAndUp} {
    align-items: initial;
  }
`;
const Title = styled.h2`
  color: var(--tertiary);
`;
const Description = styled.p`
  max-width: 48.5625rem;
  text-align: justify;
`;

export default Bio;
