import ProjectsGrid from '@components/ProjectsGrid'
import { NextPage } from 'next'
import React from 'react'
import styled from 'styled-components'

const PreviousWork: NextPage = () => {
  return (
    <div>
      <Section>
        <SectionTitle>Projects</SectionTitle>
        <ProjectsGrid />
      </Section>
    </div>
  )
}

const Section = styled.section`
  margin: 5rem 0;
  padding-bottom: 5rem;
`
const SectionTitle = styled.h4`
  text-align: center;
`

export default PreviousWork