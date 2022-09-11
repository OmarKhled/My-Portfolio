import type { NextPage } from "next";
import styled from "styled-components";
import NextJsLogo from "./NextJsLogo";
import VercelLogo from "./VercelLogo";

const UsedTechnologies: NextPage = () => {
  return (
    <Wrapper>
      <FlexContainer>
        <Text>Built By</Text>
        <NextJsLogoIcon />
      </FlexContainer>
      <FlexContainer>
        <Text>and Deployed on</Text>
        <VercelLogoIcon />
      </FlexContainer>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  padding-bottom: 1rem;
`
const FlexContainer = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  justify-content: center;
`
const Text = styled.p`
  font-weight: 500;
`
const NextJsLogoIcon = styled(NextJsLogo)`
  fill: var(--textColor);
`
const VercelLogoIcon = styled(VercelLogo)`
  fill: var(--textColor);
  height: 100px;
`

export default UsedTechnologies;
