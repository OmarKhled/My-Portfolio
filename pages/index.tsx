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
        <SubTitle>Omarkhled.me</SubTitle>
        <h1>Launching Soon!</h1>
      </Wrapper>
    </>
  )
}

const SubTitle = styled.small`
  color: var(--spunPearl); 
  text-transform: uppercase;
  font-weight: 600;
  margin-bottom: 0.5rem;
`

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  background-color: var(--cinder);
  color: var(--royalBlue-350);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  padding: 1rem;
`

export default Home
