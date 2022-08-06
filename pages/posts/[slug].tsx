import { useState, useEffect, ComponentType } from "react";
import * as runtime from "react/jsx-runtime";
import type { GetStaticProps, GetStaticPaths, NextPage } from "next";
import { run } from "@mdx-js/mdx";
import { Box } from "@sweatpants/box";
import { format, parseISO } from "date-fns";
import readingTime from "reading-time";
import { getPostBySlug, getAllPosts, Post as PostType } from "../../lib/api";
import Head from "../../components/Head";
import Image from "../../components/Image";
import SmallCardLink from "../../components/SmallCardLink";
import Footer from "../../components/Footer";
import Code from "../../components/Code";
import Clamp from "../../components/Clamp";
import { ArrowLeftIcon } from "../../components/icons";
import Link from "../../components/Link";

const components: Record<string, ComponentType<any>> = {
  Image,
  Code,
  Clamp,
  h1: (props) => <Clamp as="h1" pt="500" {...props} />,
  h2: (props) => <Clamp as="h2" pt="500" {...props} />,
  h3: (props) => <Clamp as="h3" pt="500" {...props} />,
  h4: (props) => <Clamp as="h4" pt="500" {...props} />,
  p: (props) => (
    <Clamp
      as="p"
      lineHeight={["1.6em", "1.8em"]}
      serif
      fontSize={["17px", "18px"]}
      {...props}
    />
  ),
  a: Link,
  ul: (props) => (
    <Clamp
      as="ul"
      lineHeight={["1.6em", "1.8em"]}
      serif
      fontSize={["17px", "18px"]}
      {...props}
    />
  ),
  code: (props) => (
    <Box
      bg="accentLight"
      color="accent"
      fontFamily="mono"
      fontSize="0.78em"
      as="span"
      px="0.3em"
      py="0.15em"
      borderRadius="small"
    >
      {props.children}
    </Box>
  ),
  hr: () => (
    <Clamp
      as="hr"
      my="700"
      width="100%"
      border="none"
      borderBottom="1px solid gray"
      borderColor="lightGray"
    />
  ),
};

const Post: NextPage<PostType> = (props) => {
  const { content, title, date, description, canonical, image } = props;
  const [mdx, setMdx] = useState<any>();
  const Content = (mdx ? mdx.default : null) as ComponentType<any>;
  const readTime = content
    ? readingTime(content, { wordsPerMinute: 180 })
    : null;

  useEffect(() => {
    (async () => {
      setMdx(await run(content, runtime));
    })();
  }, [content]);

  return (
    <Box as="main" m="0 auto" maxWidth="880px" lineHeight="1.5em">
      <Head title={title} description={description} image={image}>
        {canonical ? <link rel="canonical" href={canonical} /> : null}
      </Head>
      <div>
        <article>
          <Box
            display="grid"
            gridTemplateColumns={["2% 1fr 2%", "8% 1fr 8%", "15% 1fr 15%"]}
          >
            <Clamp>
              <SmallCardLink href="/" type="internal">
                <Box display="flex" alignItems="center">
                  <ArrowLeftIcon />
                  <Box as="span" px="200">
                    Back
                  </Box>
                </Box>
              </SmallCardLink>
            </Clamp>
            <Clamp as="h1" mt={["600", "900"]} fontSize="3rem" lineHeight="1em">
              {title}
            </Clamp>
            <Clamp as="p" mb={["600", "900"]} color="gray" fontSize="0.9rem">
              {format(parseISO(date), "MMM d yyyy")} &middot; {readTime.text}
            </Clamp>
            {Content && <Content components={components} />}
            <Clamp>
              <Footer />
            </Clamp>
          </Box>
        </article>
      </div>
    </Box>
  );
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = typeof params.slug === "string" ? params.slug : params.slug[0];
  const post = getPostBySlug(slug, [
    "title",
    "date",
    "slug",
    "content",
    "description",
    "canonical",
    "image",
  ]);

  return {
    props: post,
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const posts = getAllPosts(["slug"]);

  return {
    paths: posts.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
};

export default Post;
