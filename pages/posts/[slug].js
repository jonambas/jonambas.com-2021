import React from "react";
import * as runtime from "react/jsx-runtime";
import { compile, run } from "@mdx-js/mdx";
import { Box } from "@sweatpants/box";
import { format } from "date-fns";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "../../components/Head";
import Image from "../../components/Image";
import CardLink from "../../components/CardLink";
import Footer from "../../components/Footer";
import Code from "../../components/Code";
import Clamp from "../../components/Clamp";
import ArrowLeftIcon from "../../components/ArrowLeftIcon";
import readingTime from "reading-time";

const components = {
  Image,
  Code,
  Clamp,
  h1: (props) => <Clamp as="h1" pt="500" {...props} />,
  h2: (props) => <Clamp as="h2" pt="500" {...props} />,
  h3: (props) => <Clamp as="h3" pt="500" {...props} />,
  h4: (props) => <Clamp as="h4" pt="500" {...props} />,
  p: (props) => (
    <Clamp as="p" lineHeight="1.9em" serif fontSize="18px" {...props} />
  ),
  ul: (props) => (
    <Clamp as="ul" lineHeight="1.9em" serif fontSize="18px" {...props} />
  ),
  inlineCode: (props) => (
    <Box
      bg="lightBlue"
      fontFamily="mono"
      fontSize="82%"
      as="span"
      px="100"
      borderRadius="3px"
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

export default function Post(props) {
  const { content, title, date, description, canonical, image } = props;
  const [mdx, setMdx] = React.useState();
  const Content = mdx ? mdx.default : null;
  const readTime = content
    ? readingTime(content, { wordsPerMinute: 180 })
    : null;

  React.useEffect(() => {
    (async () => {
      setMdx(await run(content, runtime));
    })();
  }, [content]);

  return (
    <Box m="0 auto" maxWidth="880px" lineHeight="1.5em">
      <Head title={title} description={description} image={image}>
        {canonical ? <link rel="canonical" href={canonical} /> : null}
      </Head>
      <div>
        <article>
          <Box
            display="grid"
            gridTemplateColumns={["2% 1fr 2%", "15% 1fr 15%"]}
          >
            <Clamp>
              <CardLink href="/" type="internal" p="200" display="inline-block">
                <CardLink.Description>
                  <Box display="flex" alignItems="center">
                    <ArrowLeftIcon />
                    <Box as="span" px="200">
                      Back
                    </Box>
                  </Box>
                </CardLink.Description>
              </CardLink>
            </Clamp>
            <Clamp as="h1" mt={["600", "900"]} fontSize="3rem" lineHeight="1em">
              {title}
            </Clamp>
            <Clamp as="p" mb={["600", "900"]} color="gray" fontSize="0.9rem">
              {format(new Date(date), "MMM d yyyy")} &middot; {readTime?.text}
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
}

export async function getStaticProps({ params }) {
  const post = getPostBySlug(params.slug, [
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
}

export async function getStaticPaths() {
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
}
