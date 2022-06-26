import { GetStaticProps, NextPage } from "next";
import { Box } from "@sweatpants/box";
import { Inline } from "@sweatpants/inline";
import { format } from "date-fns";
import CardLink from "../components/CardLink";
import ButtonLink from "../components/ButtonLink";
import GithubIcon from "../components/GithubIcon";
import DocumentIcon from "../components/DocumentIcon";
import ArrowRightIcon from "../components/ArrowRightIcon";
import Footer from "../components/Footer";
import Head from "../components/Head";
import projects from "../content/projects";
import social from "../content/social";
import meta from "../content/meta";
import { getAllPosts } from "../lib/api";

const Home: NextPage<{ posts: Record<string, any>[] }> = (props) => {
  const { posts } = props;

  return (
    <div>
      <Head {...meta} />
      <Box as="main">
        <Box fontSize="2rem" fontWeight="600" mb="400">
          Jon Ambas
        </Box>
        <Box color="gray" mb="600">
          Lead UX engineer at MessageBird, building design systems.
        </Box>
        <Box>
          <ButtonLink href="/resume">
            <Box as="span" pr="200">
              Resume
            </Box>
            <ArrowRightIcon />
          </ButtonLink>
        </Box>

        <Box mt="900" mb="400">
          Projects
        </Box>

        <Box
          display="grid"
          gridTemplateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
          gridGap="400"
          maxWidth="60rem"
        >
          {projects.map((project, i) => (
            <CardLink
              key={i}
              icon={GithubIcon}
              href={project.href}
              type="external"
            >
              <CardLink.Title>{project.title}</CardLink.Title>
              <CardLink.Description>{project.description}</CardLink.Description>
            </CardLink>
          ))}
        </Box>

        <Box mt="800" mb="400">
          Posts
        </Box>

        <Box
          display="grid"
          gridTemplateColumns={["repeat(1, 1fr)", "repeat(3, 1fr)"]}
          gridGap="400"
          maxWidth="60rem"
        >
          {posts.map((post, i) => (
            <CardLink
              key={i}
              icon={DocumentIcon}
              href={`/posts/${post.slug}`}
              type="internal"
            >
              {/* <CardLink.Title>{post.title}</CardLink.Title>
              <CardLink.Description>
                {format(new Date(post.date), "MMM d yyyy")}
              </CardLink.Description> */}
            </CardLink>
          ))}
        </Box>

        <Box mt="800" mb="400">
          Social
        </Box>

        <Inline space="200">
          {social.map((profile, i) => (
            <CardLink
              key={i}
              href={profile.href}
              type="external"
              display="inline-block"
              p="300"
            >
              <CardLink.Description>{profile.title}</CardLink.Description>
            </CardLink>
          ))}
        </Inline>
      </Box>
      <Footer />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const posts = getAllPosts(["title", "date", "slug"]);
  const startIndex = 0;
  const endIndex = 10;
  return {
    props: { posts: posts.slice(startIndex, endIndex) },
  };
};

export default Home;
