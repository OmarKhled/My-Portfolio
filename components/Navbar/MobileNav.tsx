import { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { NextPage } from "next";
import Link from "next/link";
import { useRouter } from "next/router";
import { AiFillGithub, AiOutlineBehance } from "react-icons/ai";
import styled from "styled-components";

import IconWrapper from "@components/IconWrapper";
import { clamp } from "@components/GlobalStyles/GlobalStyles.helpers";
import { QUERIES } from "@constants/breakpoints";
import { NavLink, ThemeToggleIcon } from "./Navbar";

const MobileNav: NextPage<{ open: boolean; setOpen: (v: boolean) => void }> = ({
  open,
  setOpen,
}) => {
  const [mounted, setMounted] = useState(false);
  const { asPath } = useRouter();
  useEffect(() => {
    setMounted(true);
  }, []);

  return mounted === false
    ? null
    : ReactDOM.createPortal(
        <MobileNavWrapper open={open} onClick={() => setOpen(false)}>
          <Wrapper>
            <Nav
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <NavElemnets role="menu">
                <NavElement role="menuitem">
                  <Link href="/" passHref>
                    <NavLink currentPath={asPath}>Home</NavLink>
                  </Link>
                </NavElement>
                <NavElement role="menuitem">
                  <Link href="/about" passHref>
                    <NavLink currentPath={asPath}>About</NavLink>
                  </Link>
                </NavElement>
                <NavElement role="menuitem">
                  <Link href="/previouswork" passHref>
                    <NavLink currentPath={asPath}>Previous Work</NavLink>
                  </Link>
                </NavElement>
              </NavElemnets>
            </Nav>
            <ExternalLinks
              onClick={(e) => {
                e.stopPropagation();
              }}
            >
              <IconWrapper>
                <ThemeToggleIcon />
              </IconWrapper>
              <IconWrapper
                aria-label="github profile link"
                as="a"
                href="https://github.com/omarkhled"
                target="_blank"
              >
                <AiFillGithub />
              </IconWrapper>
              <IconWrapper
                aria-label="behance profile link"
                as="a"
                href="https://behance.net/omarkhled"
                target="_blank"
              >
                <AiOutlineBehance />
              </IconWrapper>
            </ExternalLinks>
          </Wrapper>
        </MobileNavWrapper>,
        document.getElementById("mobile-nav-portal") as HTMLElement
      );
};

interface WrapperProps {
  open: boolean;
}
const MobileNavWrapper = styled.div<WrapperProps>`
  position: absolute;
  top: 0;
  left: 0;
  isolation: isolate;
  z-index: 1;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  padding: 0;
  backdrop-filter: blur(30px);
  background: hsl(0, 0%, 0%, 0.23);
  transition: opacity 500ms ease;
  opacity: ${(p) => (p.open ? "1" : "0")};
  pointer-events: ${(p) => (p.open ? "auto" : "none")};
  @media ${QUERIES.tabletAndUp} {
    opacity: 0;
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: start;
  justify-content: start;
  flex-direction: column;
  width: 80%;
  margin: auto;
  margin-top: ${clamp(6 * 16, 5 * 16)};
`;
const Nav = styled.nav``;
const NavElemnets = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  text-align: left;
`;
const NavElement = styled.li`
  padding: 0.5rem 0;
  margin: 0 0 1rem 0;
  cursor: pointer;
  a {
    font-weight: 500;
    font-size: 1.3rem;
  }
`;
const ExternalLinks = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  max-height: 100%;
  gap: 0.8rem;
  margin-left: -0.45rem;
`;
export default MobileNav;
