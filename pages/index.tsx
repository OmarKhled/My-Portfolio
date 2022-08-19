import type { NextPage } from 'next'
import Head from 'next/head'
import styled from 'styled-components'

const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title key={"title"}>Omar Khled</title>
        <meta name="description" content="Omar Khled - Creative Frontend Developer" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper>
        <Title>I Develop Things for the Web<Dot>.</Dot></Title>
        <Button>Get to know me more</Button>
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  width: max-content;
  margin: auto;
`
const Title = styled.h1`
  max-width: 600px;
  text-align: center;
  margin-top: 7rem;
`
const Dot = styled.span`
  color: var(--secondary);
  transition: color 400ms ease;
`
const Button = styled.button`
  background: var(--primary);
  color: var(--mintCream);
  border: none;
  border-radius: 8px;
  padding: 1rem 2rem;
`


export default Home
