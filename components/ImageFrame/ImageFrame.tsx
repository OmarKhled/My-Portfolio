import { NextPage } from "next";
import styled from "styled-components";

const ImageFrame: NextPage<{ src?: string, caption: string }> = ({ src = undefined, caption, ...props  }) => {
  return (
    <Wrapper>
      <Img src={src} {...props}/>
      <Caption>{ caption }</Caption>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 2rem auto;
`
const Img = styled.img`
  width: 100%;
  max-width: 600px;
  margin: 10px auto;
  border: 5px solid var(--background);
  border-radius: 0.4rem;
  outline: 1px solid var(--grey);
`
const Caption = styled.p`
  text-align: center;
  color: var(--grey);
`

export default ImageFrame;
