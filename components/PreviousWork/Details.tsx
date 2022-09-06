import { NextPage } from 'next'
import styled from 'styled-components'
import Testimonial from './Testimonial'

const Details: NextPage = () => {
  return (
    <>
      <Title>Worked on a bunch of blazing web projects.</Title>
      <Description>
        I like to develop a wide range of products for the web like chrome extensions, static websites, full stack apps, landing pages, etc… Throught out the past few years, I’ve had several opportunities to create memorable products that aren’t only enjoyable to use, but also written in a code that is easy to maintain.
      </Description>
      <Testimonial name="Mohamed Mustafa" job="Rafiqi CEO" img='/images/Testimonials/mustafa.webp' />
      <Testimonial name="Youssef Nasser" job="Project Manger at Nilepreneurs" img='/images/Testimonials/nasser.webp'/>
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