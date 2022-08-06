import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { compileSync } from "@mdx-js/mdx";

export type PostSlugs = Array<string>;
export type PostFields =
  | "title"
  | "date"
  | "slug"
  | "content"
  | "description"
  | "canonical"
  | "image";

export type Post = Partial<Record<PostFields, string>>;

const postsDir = path.join(process.cwd(), "_posts");

export function getPostSlugs(): Array<string> {
  return fs.readdirSync(postsDir);
}

export function getPostBySlug(
  slug: string,
  fields: Array<PostFields> = []
): Partial<Post> {
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
      const output = String(
        compileSync(content, {
          outputFormat: "function-body",
        })
      );
      result[field] = output;
    }
    if (data[field]) {
      result[field] = data[field];
    }
  });

  return result;
}

export function getAllPosts(fields: PostFields[] = []) {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPostBySlug(slug, fields))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}
