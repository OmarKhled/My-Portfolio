import { NextPage } from 'next'
import styled from 'styled-components'
import Testimonial from '@components/Testimonial'

const Details: NextPage = () => {
  return (
    <>
      <Title>Worked on a bunch of blazing web projects.</Title>
      <Description>
        I like to develop a wide range of products for the web like chrome extensions, static websites, full stack apps, landing pages, etc… Throught out the past few years, I’ve had several opportunities to create memorable products that aren’t only enjoyable to use, but also written in a code that is easy to maintain.
      </Description>
      <Testimonial name="Mohamed Mustafa" job="Rafiqi CEO" img='/images/Testimonials/mustafa.webp'>
        It's rare to find someone who knows something about everything and everything about something, which makes Omar an outstanding team player: He is a superlative web developer who always impressed me with meeting the deliverables days before the deadline with the requested quality and better. He can create designs, create content, shoot and edit videos, and handle projects.
      </Testimonial>
      <Testimonial name="Youssef Nasser" job="Project Manger at Nilepreneurs" img='/images/Testimonials/nasser.webp'>
        When he works as a leader or team player, the imperative of success is not negotiable. Omar is a well-organized and talented person. He has demonstrated a destigmatized resilience in accepting constructive criticism and transforming it into gained skill and experience.  In addition to that, he sticks to deadlines regardless of the workload. I worked with him for more than a year in different activities (voluntary, paid, and competitive), and he was always the best team player or leader I worked with.
      </Testimonial>
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