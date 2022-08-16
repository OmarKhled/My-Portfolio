import ThemeToggle from '@components/ThemeToggle'
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

      <h1>Hello World!</h1>
      <ThemeToggle />
      <ThemeToggleIcon aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
        <mask id="moon-mask">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <Circle className="sun" cx="12" cy="12" r="6" mask="url(#moon-mask)" />
        <Group>
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </Group>
      </ThemeToggleIcon>
    </>
  )
}

const ThemeToggleIcon = styled.svg`
  color: var(--grey);
  transition: inherit;
  block-size: 22rem;
  inline-size: 22rem;
`

const Circle = styled.circle`
  fill: var(--grey);
  transition: inherit;
`

const Group = styled.g`
  stroke: var(--grey);
  transition: inherit;
  &>line {
    stroke-linecap: round;
    stroke-width: 2px;
  }
`

export default Home
