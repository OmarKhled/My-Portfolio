import UsedTechnologies from "@components/UsedTechnologies";
import React from "react";
import styled from "styled-components";

function Footer() {
  return (
    <Wrapper>
      <UsedTechnologies />
    </Wrapper>
  );
}

const Wrapper = styled.footer`
  margin-top: 3rem;
`

export default Footer;
