import styled from "styled-components";

const LinkWrapper = styled.a<{ color: "standard" | "primary" }>`
  --color: ${(p) => p.color === "standard" ? "var(--textColor)" : "var(--primary)"};
  color: var(--color);
  text-decoration: none;
  transition: box-shadow 300ms ease;
  @media (hover: hover) and (pointer: fine) { 
    will-change: box-shadow;
    &:hover {
      cursor: pointer;
      box-shadow: 0px 3px 0px var(--color);
    }
  }
`

export default LinkWrapper;