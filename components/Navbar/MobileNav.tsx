import { clamp } from '@components/GlobalStyles/GlobalStyles.helpers'
import ThemeToggle from '@components/ThemeToggle'
import { QUERIES } from '@constants/breakpoints'
import { NextPage } from 'next'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import { AiFillGithub, AiOutlineBehance } from 'react-icons/ai'
import styled from 'styled-components'
import { NavLink } from './Navbar'

const MobileNav: NextPage<{ open: boolean, setOpen: (v: boolean) => void }> = ({ open, setOpen }) => {
  const [mounted, setMounted] = useState(false);
  const { asPath } = useRouter();
  useEffect(() => {
    setMounted(true)
  }, [])

  return mounted === false ? null : ReactDOM.createPortal(
    <MobileNavWrapper open={open} onClick={() => setOpen(false)}>
      <Wrapper>
        <Nav onClick={(e) => {e.stopPropagation()}}>
          <NavElemnets>
            <NavElement>
              <Link href="/" passHref>
                <NavLink currentPath={asPath}>Home</NavLink>
              </Link>
            </NavElement>
            <NavElement>
              <Link href="/about" passHref>
                <NavLink currentPath={asPath}>About</NavLink>
              </Link>
            </NavElement>
            <NavElement>
              <Link href="/previouswork" passHref>
                <NavLink currentPath={asPath}>Previous Work</NavLink>
              </Link>
            </NavElement>
          </NavElemnets>
        </Nav>
        <ExternalLinks onClick={(e) => {e.stopPropagation()}}>
          <IconWrapper>
            <ThemeToggleIcon />
          </IconWrapper>
          <IconWrapper as="a" href="https://github.com/omarkhled" target="_blank">
            <AiFillGithub />
          </IconWrapper>
          <IconWrapper as="a" href="https://behance.net/omarkhled" target="_blank">
            <AiOutlineBehance />
          </IconWrapper>
        </ExternalLinks>
      </Wrapper>
    </MobileNavWrapper>
  , document.getElementById("mobile-nav-portal") as HTMLElement)
}

interface WrapperProps {
  open: boolean
}
const MobileNavWrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  backdrop-filter: blur(8px);
  background: hsl(0, 0%, 0%, 0.23);
  overflow: hidden;
  transition: opacity 400ms ease;
  opacity: ${p => p.open ? "1" : "0"};
  pointer-events: ${p => p.open ? "auto" : "none"};
  isolation: isolate;
  z-index: 1;
  @media ${QUERIES.tabletAndUp} {
    opacity: 0;
  }
`
const Wrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-top: ${clamp(7*16, 5*16)};
`
const Nav = styled.nav`

`
const NavElemnets = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  text-align: left;
`
const NavElement = styled.li`
  padding: 0.5rem 0;
  margin: 0 0 1rem 0;
  cursor: pointer;
`
const ExternalLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-height: 100%;
  gap: 0.8rem;
  margin-left: -0.45rem;
`
const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  padding: 0.4rem;
  border-radius: 0.4rem;
  will-change: background-color;
  transition: fill 400ms ease, background-color 300ms ease;
  cursor: pointer;
  & svg {
    width: 1.9rem;
    height: 1.9rem;
    fill: var(--grey);
    transition: fill 400ms ease;
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background-color: hsl(265, 7%, 49%, 0.2);
    }
  }
`
const ThemeToggleIcon = styled(ThemeToggle)`
  position: relative;
  line-height: 0;
  &::after {
    --tap-increment: -0.4rem;
    content: '';
    line-height: 0;
    position: absolute;
    top: var(--tap-increment);
    left: var(--tap-increment);
    right: var(--tap-increment);
    bottom: var(--tap-increment);
  }
`
export default MobileNav