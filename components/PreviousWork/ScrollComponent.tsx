import { NextPage } from 'next'
import { useRef } from 'react'
import styled from 'styled-components'
import { useTransform, useScroll } from 'framer-motion'
import { animated, useSpring } from 'react-spring'
import { QUERIES } from '@constants/breakpoints'


const ScrollComponent: NextPage<{ wrapperRef: any }> = ({ wrapperRef }) => {
  const imgRef = useRef<HTMLImageElement>(null);

  const { scrollYProgress } = useScroll({ target: wrapperRef, offset: ["start center", "end center"] });


  const firstImage = useSpring({ 
    transform: `scale(${1.1 - useTransform(scrollYProgress, [0, 0.3, 0.35, 0.6, 1], [0, 0.1, 0.1, 0.22, 0.22]).get()})`,
  })
  const secondImage = useSpring({
    opacity: `${useTransform(scrollYProgress, [0, 0.4, 0.45], [0, 0, 1]).get()}`,
    transform: `translateY(${useTransform(scrollYProgress, [0, 0.4, 0.5], [0, 0, -100]).get()}%) scale(${useTransform(scrollYProgress, [0, 0.5, 0.6], [1, 1, 0.9]).get()})`,
  })
  const thirdImage = useSpring({
    opacity: `${useTransform(scrollYProgress, [0, 0.69, 0.79], [0, 0, 1]).get()}`,
    transform: `translateY(${useTransform(scrollYProgress, [0, 0.69, 0.79], [-100, -100, -200]).get()}%)`,
  })

  return (
    <ScrollWrapper height={imgRef.current?.getBoundingClientRect().height as number}>
      <FirstImage style={firstImage} src="/images/projects/ieeenu.png" />
      <SecondImage style={secondImage} src="/images/projects/ieeestore.png" />
      <ThirdImage ref={imgRef} style={thirdImage} src="/images/projects/dedmet.png" />
    </ScrollWrapper>
  )
}

const ScrollWrapper = styled.div<{ height: number }>`
  display: none;
  @media ${QUERIES.tabletAndUp} {
    display: block;
    position: sticky;
    top: 20%;
    height: ${p => p.height}px;
  }
`
const Img = styled(animated.img)`
  border-radius: 0.5rem;
  transform-origin: center;
  width: 100%;
  max-width: 600px;
  margin: auto;
`
const FirstImage = styled(Img)`
  
`
const SecondImage = styled(Img)`
  z-index: 2;
  transform-origin: center;
  top: 0;
`

const ThirdImage = styled(Img)`
  
`

export default ScrollComponent