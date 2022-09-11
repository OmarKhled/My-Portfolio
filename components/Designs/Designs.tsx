import { NextPage } from "next/types";
import styled from "styled-components";

import Button from "@components/Button";
import DesignsGrid from "./DesignsGrid";
import { QUERIES } from "@constants/breakpoints";

const Designs: NextPage = () => {
  return (
    <Wrapper>
      <FirstColumn>
        <Title>I also make some li&apos;l designs!</Title>
        <StylizedButton mode="primary" as="a" href="https://www.behance.net/omarkhled" target="_blank">Explore my behance profile</StylizedButton>
      </FirstColumn>
      <SecondColumn>
        <DesignsGrid />
      </SecondColumn>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 1.4rem;
  flex-direction: column-reverse;
  text-align: center;
  align-items: center;

  @media ${QUERIES.laptopAndUp} {
    flex-direction: row;
    align-items: stretch;
    text-align: left;
  }
`
const FirstColumn = styled.div`
  flex: 1; 
  display: flex;
  flex-direction: column;
  align-items: inherit;
  margin-top: 2rem;
`
const Title = styled.h2`
  
`
const StylizedButton = styled(Button)`
  margin-top: 1rem;
`
const SecondColumn = styled.div`
  flex: 1.1;
  width: 100%;
`

export default Designs;
