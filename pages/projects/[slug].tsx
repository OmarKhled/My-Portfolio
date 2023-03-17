import Head from "next/head";
import { NextPage } from "next/types";
import styled from "styled-components";

import { MDXRemote, MDXRemoteSerializeResult } from "next-mdx-remote";
import matter from "gray-matter";
import { serialize } from "next-mdx-remote/serialize";

import { getFileData, getPaths } from "MDX";
import { clamp } from "@components/GlobalStyles/GlobalStyles.helpers";
import VideoPlayer from "@components/VideoPlayer";
import StylizedLink from "@components/StylizedLink";
import Footer from "@components/Footer";
import ImageFrame from "@components/ImageFrame";
import ProjectDescription from "@components/ProjectDescription";
import CourseDescription from "@components/CourseDescription";

interface Props {
  source: MDXRemoteSerializeResult;
  frontMatter: { [key: string]: string };
}

const Project: NextPage<Props> = ({ source, frontMatter }) => {
  const { name, type } = frontMatter;
  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Wrapper>
        {type === "project" ? (
          <ProjectDescription
            name={frontMatter.name}
            githubLink={frontMatter.githubLink}
            previewImg={frontMatter.previewImg}
            link={frontMatter.link}
          />
        ) : (
          type === "course" && (
            <CourseDescription
              name={frontMatter.name}
              githubLink={frontMatter.githubLink}
              previewImg={frontMatter.previewImg}
              link={frontMatter.link}
            />
          )
        )}

        <MDXRemote {...source} components={components} />
        <Footer />
      </Wrapper>
    </>
  );
};

// --------------------------------------------------------------
// ------------------------ Components --------------------------
// --------------------------------------------------------------

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

// --------------------------------------------------------------
// --------------------------- Page -----------------------------
// --------------------------------------------------------------

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: ${clamp(50, 60)};
  max-width: 1000px;
  img {
    border-radius: ${clamp(10, 20)};
  }
`;

// --------------------------------------------------------------
// ------------------------ Serverside --------------------------
// --------------------------------------------------------------

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
