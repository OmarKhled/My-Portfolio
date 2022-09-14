import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'
import { BiLink } from "react-icons/bi"

import { clamp } from '@components/GlobalStyles/GlobalStyles.helpers'
import IconWrapper from '@components/IconWrapper'
import BrowserHeader from '@components/BrowserHeader'

const Project = () => {
  return (
    <Wrapper>
      <Title>IEEE NU Website</Title>
      <ProjectLinks>
        <IconWrapper as="a" href="https://github.com/omarkhled/ieee-nu" target="_blank">
          <AiFillGithub />
        </IconWrapper>
        <IconWrapper as="a" href="https://ieeenu.com" target="_blank">
          <BiLink />
        </IconWrapper>
      </ProjectLinks>
      <br />
      <BrowserHeader />
    </Wrapper>
  )
}
const Wrapper = styled.div`
  margin-top: ${clamp(50, 60)};
`
const Title = styled.h2`
  text-align: center;
`
const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`

export default Project