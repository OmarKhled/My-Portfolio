import { clamp } from "@components/GlobalStyles/GlobalStyles.helpers"
import styled from "styled-components"

const BrowserHeader = () => {
  return (
    <>
      <Wrapper>
        <NavButtons>
          <CloseButton />
          <MenifyButton />
          <MenimizeButton />
        </NavButtons>
        <AddressBar>
          <Address>ieeenu.com</Address>
        </AddressBar>
      </Wrapper>
      <Preview src="/images/projects/screenshots/ieeenu.png" />
    </>
  )
}
const Wrapper = styled.div`
  --border-radius: 5px;

  height: fit-content;
  background-color: hsl(225, 4%, 18%);
  padding: 0.4rem  ${clamp(0.6*16 ,1.2*16)};
  border: hsl(200, 1%, 40%) solid 1px;
  border-radius: var(--border-radius) var(--border-radius) 0 0;
  display: grid;
  align-items: center;
  grid-template-columns: auto 1fr;
  gap: 1rem;
`
const NavButtons = styled.div`
  display: flex;
  gap: ${clamp(4, 8)};
`
const HeaderButton = styled.span`
  --dimension: ${clamp(7, 10)};

  display: block;
  border-radius: 50%;
  width: var(--dimension);
  height: var(--dimension);
`
const CloseButton = styled(HeaderButton)`
  background-color: hsl(3, 100%, 66%);
`
const MenifyButton = styled(HeaderButton)`
  background-color: hsl(48, 79%, 53%);
`
const MenimizeButton = styled(HeaderButton)`
  background-color: hsl(103, 64%, 46%);
`
const AddressBar = styled.div`
  --background-color: hsl(210, 2%, 47%);
  --color: hsl(210, 4%, 79%);

  background-color: var(--background-color);
  color: var(--color);
  height: 100%;
  width: 100%;
  padding: ${clamp(3, 5)};
  margin: 0 auto;
  border-radius: 3px;
  display: flex;
  justify-content: center;
  align-items: center;
`
const Address = styled.small`
  font-size: ${clamp(6, 10)};
  font-weight: 600;
  line-height: initial;
`
const Preview = styled.img`
  width: 100%
`

export default BrowserHeader