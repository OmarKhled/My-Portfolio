import { NextPage } from 'next'
import Head from "next/head"
import Bio from '@components/Bio'
import Footer from '@components/Footer'
import styled from 'styled-components'

const About: NextPage = () => {
  return (
    <>
    <Head>
      <title key="title">Omar Khled - About</title>
    </Head>
      <Bio />
    </>
  )
}

const FooterWrapper = styled.div`
  
`


export default About