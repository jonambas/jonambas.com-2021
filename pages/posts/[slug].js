import React from "react";
import MDX from "@mdx-js/runtime";
import Box from "@sweatpants/box";
import { format } from "date-fns";
import { getPostBySlug, getAllPosts } from "../../lib/api";
import Head from "../../components/Head";
import Image from "../../components/Image";
import CardLink from "../../components/CardLink";
import Footer from "../../components/Footer";
import ArrowLeftIcon from "../../components/ArrowLeftIcon";

function Clamped(props) {
  const { serif, ...rest } = props;
  return (
    <Box
      gridColumn="2/3"
      mt="0"
      mb="400"
      fontFamily={serif ? "serif" : "sans"}
      {...rest}
    >
      {props.children}
    </Box>
  );
}

const components = {
  Image,
  h1: (props) => <Clamped as="h1" pt="300" {...props} />,
  h2: (props) => <Clamped as="h2" pt="300" {...props} />,
  h3: (props) => <Clamped as="h3" pt="300" {...props} />,
  p: (props) => (
    <Clamped as="p" lineHeight="1.8em" serif fontSize="17px" {...props} />
  ),
  ul: (props) => <Clamped as="ul" {...props} />,
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
            <Clamped>
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
            </Clamped>
            <Clamped
              as="h1"
              mt={["600", "900"]}
              fontSize="3rem"
              lineHeight="1em"
            >
              {title}
            </Clamped>
            <Clamped as="p" mb={["600", "900"]} color="gray" fontSize="0.9rem">
              {format(new Date(date), "MMM d yyyy")}
            </Clamped>
            <MDX components={components}>{content}</MDX>
            <Clamped>
              <Footer />
            </Clamped>
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
