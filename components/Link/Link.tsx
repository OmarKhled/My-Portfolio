import { NextPage } from "next";
import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StylizedLink: NextPage<{ href: string, children: React.ReactNode }> = ({ href, children, ...props }) => {
  return (
    <Link href={href} prefetch>
      <AnchorTag {...props}>{children}</AnchorTag>
    </Link>
  );
}

const AnchorTag = styled.a`
  --color: var(--primary);
  color: var(--color);
  text-decoration: none;
  transition: box-shadow 400ms ease, color 400ms ease;
  will-change: box-shadow;
  &:hover {
    box-shadow: 0px 2px 0px var(--color)
  }
`

export default StylizedLink;
