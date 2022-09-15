import { NextPage } from "next";
import { ReactNode } from "react";
import styled from "styled-components";

const VideoPlayer: NextPage<{ children?: ReactNode, src?: string, caption: string }> = ({ children, src = undefined, caption, ...props  }) => {
  return (
    <Wrapper>
      <Video src={src} {...props}>
        { !src && children }
      </Video>
      <Caption>{ caption }</Caption>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 2rem auto;
`
const Video = styled.video`
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

export default VideoPlayer;
