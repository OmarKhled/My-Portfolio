import { NextPage } from "next";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useTransform, useScroll } from "framer-motion";
import { animated, useSpring } from "react-spring";
import { QUERIES } from "@constants/breakpoints";

const ScrollComponent: NextPage<{ scrollYProgress: any }> = ({
  scrollYProgress,
}) => {
  const imgRef = useRef<HTMLImageElement>(null);
  const [height, setHeight] = useState<number>(
    imgRef.current?.getBoundingClientRect().height as number
  );

  useEffect(() => {
    scrollYProgress.onChange((l: any) => {
      console.log(l);
    });
    console.log(imgRef);
  }, [scrollYProgress]);

  useEffect(() => {
    window.onresize = () => {
      setHeight(imgRef.current?.getBoundingClientRect().height as number);
    };
  }, []);

  let trigger = imgRef.current?.getBoundingClientRect().height;
  useEffect(() => {
    setHeight(imgRef.current?.getBoundingClientRect().height as number);
  }, [trigger]);

  const firstImage = useSpring({
    transform: `scale(${
      1.1 -
      useTransform(
        scrollYProgress,
        [0, 0.3, 0.35, 0.6, 1],
        [0, 0.1, 0.1, 0.22, 0.22]
      ).get()
    })`,
  });
  const secondImage = useSpring({
    opacity: `${useTransform(
      scrollYProgress,
      [0, 0.4, 0.45],
      [0, 0, 1]
    ).get()}`,
    transform: `translateY(${useTransform(
      scrollYProgress,
      [0, 0.4, 0.5],
      [0, 0, -100]
    ).get()}%) scale(${useTransform(
      scrollYProgress,
      [0, 0.5, 0.6],
      [1, 1, 0.9]
    ).get()})`,
  });
  const thirdImage = useSpring({
    opacity: `${useTransform(
      scrollYProgress,
      [0, 0.63, 0.75],
      [0, 0, 1]
    ).get()}`,
    transform: `translateY(${useTransform(
      scrollYProgress,
      [0, 0.63, 0.75],
      [-100, -100, -200]
    ).get()}%)`,
  });

  return (
    <ScrollWrapper height={height}>
      <FirstImage
        style={firstImage}
        aria-hidden="true"
        src="/images/projects/screenshots/ieeenu.png"
      />
      <SecondImage
        style={secondImage}
        aria-hidden="true"
        src="/images/projects/screenshots/store.png"
      />
      <ThirdImage
        ref={imgRef}
        aria-hidden="true"
        style={thirdImage}
        src="/images/projects/screenshots/dedmet.png"
      />
    </ScrollWrapper>
  );
};

const ScrollWrapper = styled.div<{ height: number }>`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: block;
    position: sticky;
    top: 20%;
    height: ${(p) => p.height}px;
  }
`;
const Img = styled(animated.img)`
  border-radius: 0.5rem;
  transform-origin: center;
  width: 100%;
  max-width: 600px;
  margin: auto;
`;
const FirstImage = styled(Img)``;
const SecondImage = styled(Img)`
  z-index: 2;
  transform-origin: center;
  top: 0;
`;

const ThirdImage = styled(Img)`
  z-index: 3;
  transform-origin: center;
  top: 0;
`;

export default ScrollComponent;
