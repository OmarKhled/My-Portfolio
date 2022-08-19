import { NextPage } from "next";
import { useRouter } from "next/router";
import styled from "styled-components";
import { AiFillGithub, AiOutlineBehance } from "react-icons/ai"

import { clamp } from "@components/GlobalStyles/GlobalStyles.helpers";
import ThemeToggle from "@components/ThemeToggle";
import MenuBurger from "./MenuBurger";
import { QUERIES } from "@constants/breakpoints";

const Navbar: NextPage = () => {
  const { asPath } = useRouter();
  return (
    <>
    <Wrapper>
      <Name>Omar Khled</Name>
      <Nav>
        <NavElements>
          <NavElement>
            <NavLink currentPath={asPath} href="/">Home</NavLink>
          </NavElement>
          <NavElement>
            <NavLink currentPath={asPath} href="/about">About</NavLink>
          </NavElement>
          <NavElement>
            <NavLink currentPath={asPath} href="/previouswork">Previous Work</NavLink>
          </NavElement>
        </NavElements>
      </Nav>
      <ExternalLinks>
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
      <MenuBurgerIcon />
    </Wrapper>
    </>
  );
}


const Wrapper = styled.header`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  padding-top: 3rem;
  transition: color 2000ms ease;
  @media ${QUERIES.tabletAndUp} {
    grid-template-columns: auto 1fr auto;
    align-items: baseline;
  }
`
const Name = styled.a`
  color: var(--primary);
  font-size: ${clamp(28.13, 35.16)};
  line-height: ${clamp(28.13, 35.16)};
  font-weight: 600;
  cursor: pointer;
  &:hover {
    opacity: 0.97;
  }
`
const Nav = styled.nav`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: block;
  }
`
const NavElements = styled.ul`
  list-style: none;
  padding: 0;
`
const NavElement = styled.li`
  display: inline-block;
  padding: 0 0.8rem;
`
const NavLink = styled.a<{ currentPath: string }>`
  --color: ${(p) => p.currentPath === p.href ? "var(--secondary)" : "var(--textColor)"} !important;
  color: var(--color);
  text-decoration: none;
  will-change: color;
  transition: color 400ms ease;
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      color: var(--secondary);
    }
  }
`
const ExternalLinks = styled.div`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    max-height: 100%;
    gap: 0.8rem;
  }
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
const MenuBurgerIcon = styled(MenuBurger)`
  display: block;
  @media ${QUERIES.tabletAndUp} {
    display: none;
  }
`


export default Navbar;
