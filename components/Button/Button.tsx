import styled from "styled-components";

type modeType = "primary" | "secondary";

const Wrapper = styled.button<{ mode: modeType }>`
  display: block;
  border: none;
  background-color: var(--${(p) => p.mode}-400);
  color: var(--mintCream);
  padding: 1rem 2rem;
  border-radius: 8px;
  width: fit-content;
  text-decoration: none;
  text-align: center;
  font-weight: 500;
  cursor: pointer;
  transition: box-shadow 300ms ease, background-color 400ms ease;
  outline-offset: 8px;
  user-select: none;
  &:active, &:focus {
    box-shadow: 0 0 0 3px  var(--${(p) => p.mode}-50);
  }
  @media (hover: hover) and (pointer: fine) {
    &:hover {
      opacity: 0.9;
    }
  }
`

export default Wrapper;
