import React from "react";
import MDX from "@mdx-js/runtime";
import Box from "@sweatpants/box";
import { format } from "date-fns";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "../../components/Head";
import Image from "../../components/Image";
import CardLink from "../../components/CardLink";
import Footer from "../../components/Footer";
import Code from "../../components/Code";
import Clamp from "../../components/Clamp";
import ArrowLeftIcon from "../../components/ArrowLeftIcon";

const components = {
  Image,
  Code,
  Clamp,
  h1: (props) => <Clamp as="h1" pt="400" {...props} />,
  h2: (props) => <Clamp as="h2" pt="400" {...props} />,
  h3: (props) => <Clamp as="h3" pt="400" {...props} />,
  p: (props) => (
    <Clamp as="p" lineHeight="1.8em" serif fontSize="17px" {...props} />
  ),
  ul: (props) => <Clamp as="ul" {...props} />,
  inlineCode: (props) => (
    <Box
      bg="lightGray"
      fontFamily="mono"
      fontSize="82%"
      as="span"
      px="100"
      borderRadius="3px"
    >
      {props.children}
    </Box>
  ),
};

export default function Post(props) {
  const { content, title, date, description, canonical, ...rest } = props;
  return (
    <Box m="0 auto" maxWidth="880px" lineHeight="1.5em">
      <Head title={title} description={description}>
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
              {format(new Date(date), "MMM d yyyy")}
            </Clamp>
            <MDX components={components}>{content}</MDX>
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
  ]);

  return {
    props: {
      ...post,
    },
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
