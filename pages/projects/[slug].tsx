import Head from "next/head";
import { NextPage } from "next/types";
import styled from "styled-components";
import { AiFillGithub } from "react-icons/ai";
import { BiLink } from "react-icons/bi";
import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import { getFileData, getPaths } from "MDX";
import { clamp } from "@components/GlobalStyles/GlobalStyles.helpers";
import IconWrapper from "@components/IconWrapper";
import VideoPlayer from "@components/VideoPlayer";
import BrowserHeader from "@components/BrowserHeader";
import StylizedLink from "@components/StylizedLink";
import Footer from "@components/Footer";
import ImageFrame from "@components/ImageFrame";

interface Props {
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string };
}

const Heading2 = styled.h4`
  color: var(--tertiary);
  margin: 0 0 0rem 0;
`;
const Paragraph = styled.p`
  text-align: justify;
  margin: 15px 0;
`;
const UL = styled.ul`
  margin: 15px 0;
`;

const components = {
  h4: (props: any) => <Heading2 {...props} />,
  a: (props: any) => (
    <StylizedLink target={"_blank"} color={"primary"} {...props} />
  ),
  VideoPlayer,
  p: (props: any) => <Paragraph {...props} />,
  ImageFrame,
  ul: UL,
};

const Project: NextPage<Props> = ({ source, frontMatter }) => {
  const { name, previewImage, link, githubLink } = frontMatter;
  return (
    <>
      <Head>
        <title>{name}</title>
        <meta name="description" content="IEEE NU" />
      </Head>
      <Wrapper>
        <Title>{name}</Title>
        <ProjectLinks>
          {githubLink && (
            <IconWrapper as="a" href={githubLink} target="_blank">
              <AiFillGithub />
            </IconWrapper>
          )}
          {link && (
            <IconWrapper as="a" href={link} target="_blank">
              <BiLink />
            </IconWrapper>
          )}
        </ProjectLinks>
        <br />
        <PreviewWrapper>
          <BrowserHeader link={link.split("//")[1]} />
          <PreviewImage src={previewImage} alt={name} />
        </PreviewWrapper>
        <MDXRemote {...source} components={components} />
        <Footer />
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: ${clamp(50, 60)};
  max-width: 1000px;
`;
const Title = styled.h2`
  text-align: center;
`;
const ProjectLinks = styled.div`
  display: flex;
  justify-content: center;
  gap: 1rem;
`;
const PreviewWrapper = styled.div`
  /* max-width: 1100px; */
  margin: 0 auto 3rem auto;
`;
const PreviewImage = styled.img`
  width: 100%;
  border: hsl(200, 1%, 40%) solid 1px;
  border-top: none;
`;

export const getStaticProps = async ({
  params,
}: {
  params: { slug: string };
}) => {
  const { slug } = params;
  // console.log(slug);
  const source = getFileData(slug);
  const { content, data } = matter(source as string);
  const mdxSource = await serialize(content);
  // console.log(data);
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};
export const getStaticPaths = () => {
  const paths = getPaths();
  // console.log(paths);
  return {
    paths,
    fallback: false,
  };
};

export default Project;
