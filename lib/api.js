import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDir = path.join(process.cwd(), "_posts");

export function getPostSlugs() {
  return fs.readdirSync(postsDir);
}

export function getPostBySlug(slug, fields = []) {
  const realSlug = slug.replace(/\.mdx$/, "");
  const fullPath = path.join(postsDir, `${realSlug}.mdx`);
  const contents = fs.readFileSync(fullPath, "utf8");

  const { data, content } = matter(contents);

  const result = {};

  fields.forEach((field) => {
    if (field === "slug") {
      result[field] = realSlug;
    }
    if (field === "content") {
      result[field] = content;
    }
    if (data[field]) {
      result[field] = data[field];
    }
  });

  return result;
}

export function getAllPosts(fields = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? "-1" : "1"));
  return posts;
}

// export async function markdownToHtml(markdown) {
//   const result = await remark().use(html).process(markdown);
//   return result.toString();
// }
