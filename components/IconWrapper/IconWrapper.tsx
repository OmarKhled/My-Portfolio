import styled from 'styled-components'

const IconWrapper = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  max-height: 100%;
  padding: 0.4rem;
  border-radius: 0.8rem;
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

export default IconWrapper