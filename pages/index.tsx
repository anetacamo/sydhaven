import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { Key } from "react";
import Card from "../components/Card";
import StarsDivider from "../components/StarsDivider";
import { DefaultLayout } from "../layouts/DefaultLayout/DefaultLayout";

export async function getStaticProps() {
  // get files from the directory
  const files = fs.readdirSync(path.join("pages/posts"));

  const posts = files.map((filename) => {
    // get slug
    const slug = filename.replace(".md", "");
    // get all frontmatter here:
    const markdownWithMeta = fs.readFileSync(
      path.join("pages/posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);

    return { slug, frontmatter };
  });
  return {
    props: {
      posts: posts,
    },
  };
}

interface HomeProps {
  posts: any[];
}

export default function Home({ posts }: HomeProps) {
  console.log(posts);
  const title = "Home";
  return (
    <DefaultLayout title={title}>
      <section className="grid">
        <div className="flex-center">
          {posts?.map(
            (
              post: {
                frontmatter: {
                  address?: string;
                  title?: string;
                  text?: string;
                  image?: string;
                  type?: string;
                  opening?: string;
                };
              },
              index?: Key | null
            ) => (
              <Card
                background="gray"
                key={index}
                address={post.frontmatter.address}
                title={post.frontmatter.title}
                text={post.frontmatter.text}
                image={post.frontmatter.image}
                type={post.frontmatter.type}
                opening={post.frontmatter.opening}
              />
            )
          )}
        </div>
      </section>
      <section className="bg-black center">
        <h2> Calendar</h2>
        <p style={{ maxWidth: 500, margin: "auto" }}>
          To see the exact date and all sorts of upcoming activities, check the
          facebook site of Sudhaven or click any of the place links
        </p>
        <StarsDivider />

        <div className="flex-center">
          {posts.map((post, index) => (
            <Card
              background="black"
              key={index}
              address={post.frontmatter.address}
              title={post.frontmatter.title}
              text={post.frontmatter.text}
              image={post.frontmatter.image}
              type={post.frontmatter.type}
              opening={post.frontmatter.opening}
            />
          ))}
        </div>
      </section>
    </DefaultLayout>
  );
}
