import { NextPage } from 'next'
import styled from 'styled-components'
import Testimonial from './Testimonial'

const Details: NextPage = () => {
  return (
    <>
      <Title>Worked on a bunch of blazing web projects.</Title>
      <Description>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Description>
      <Testimonial />
      <Testimonial />
    </>
  )
}

const Title = styled.h3`
  font-weight: 700;
  margin-bottom: 2rem;
`

const Description = styled.p`
  text-align: justify !important;
`

export default Details