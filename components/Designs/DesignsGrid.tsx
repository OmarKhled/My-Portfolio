import { clamp } from "@components/GlobalStyles/GlobalStyles.helpers";
import BREAKPOINTS from "@constants/breakpoints";
import { NextPage } from "next/types"
import styled from "styled-components"

const DesignsGrid: NextPage = () => {
  return (
    <Wrapper>
      <Component1></Component1>
      <Component2></Component2>
      <Component3></Component3>
      <Component4></Component4>
    </Wrapper>
  )
};

const Wrapper = styled.div`
  display: grid;
  width: 100%;
  height: ${clamp(250, 530, BREAKPOINTS.desktopStart)};
  grid-template-rows: 1fr 1fr;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-areas: 
    'area1 area1 area2'
    'area3 area4 area2';
  gap: ${clamp(16, 32)};
`
const Component = styled.div`
  background-color: red;
  height: 100%;
  border-radius: 7px;
  background-size: cover;
`
const Component1 = styled(Component)`
  grid-area: area1;
  background-image: url("https://picsum.photos/1000");
`
const Component2 = styled(Component)`
  grid-area: area2;
  background-image: url("https://picsum.photos/1001");
`
const Component3 = styled(Component)`
  grid-area: area3;
  background-image: url("https://picsum.photos/1002");
`
const Component4 = styled(Component)`
  grid-area: area4;
  background-image: url("https://picsum.photos/1003");
`

export default DesignsGrid