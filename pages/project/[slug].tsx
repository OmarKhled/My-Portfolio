import { NextPage } from 'next/types'
import styled from 'styled-components'
import { AiFillGithub } from 'react-icons/ai'
import { BiLink } from "react-icons/bi"
import { MDXRemote, MDXRemoteSerializeResult } from 'next-mdx-remote'
import matter from "gray-matter"
import { serialize } from "next-mdx-remote/serialize"

import { getFileData, getPaths } from 'MDX'
import { clamp } from '@components/GlobalStyles/GlobalStyles.helpers'
import IconWrapper from '@components/IconWrapper'
import VideoPlayer from '@components/VideoPlayer'
import BrowserHeader from '@components/BrowserHeader'
import StylizedLink from '@components/StylizedLink'
import Footer from '@components/Footer'
import Head from 'next/head'

interface Props {
  source: MDXRemoteSerializeResult,
  frontMatter: { [key: string]: string }
}

const H2 = styled.h4`
  color: var(--tertiary);
  margin: 0.9rem 0 0.7rem 0;
`

const components = { h4: (props: any) =>  <H2 {...props} />, a: (props: any) => <StylizedLink target={"_blank"} {...props} />, VideoPlayer}

const Project: NextPage<Props> = ({ source, frontMatter }) => {
  const { name } = frontMatter;
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content="IEEE NU" />
      </Head>
      <Wrapper>
        <Title>{name}</Title>
        <ProjectLinks>
          <IconWrapper as="a" href="https://github.com/omarkhled/ieee-nu" target="_blank">
            <AiFillGithub />
          </IconWrapper>
          <IconWrapper as="a" href="https://ieeenu.com" target="_blank">
            <BiLink />
          </IconWrapper>
        </ProjectLinks>
        <br />
        <PreviewWrapper>
          <BrowserHeader />
          <PreviewImage src="/images/projects/screenshots/ieeenu.png" alt={name}/>
        </PreviewWrapper>
        <MDXRemote {...source} components={components} />
        <Footer />
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  margin-top: ${clamp(50, 60)};
`
const Title = styled.h2`
  text-align: center;
`
const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`
const PreviewWrapper = styled.div`
  /* max-width: 1100px; */
  margin: 0 auto 3rem auto;
`
const PreviewImage = styled.img`
  width: 100%;
`

export const getStaticProps = async ({ params }: { params: { slug: string } }) => {
  const { slug } = params;
  console.log(slug);
  const source = getFileData(slug);
  const { content, data } = matter(source as string);
  const mdxSource = await serialize(content);
  console.log(data);
  return {
    props: {
      source: mdxSource,
      frontMatter: data
    }
  }
}
export const getStaticPaths = () => {
  const paths = getPaths();
  console.log(paths);
  return {
    paths,
    fallback: false
  }
}

export default Project