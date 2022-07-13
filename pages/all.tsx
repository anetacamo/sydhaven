import { useState } from "react";
import fs from "fs";
import matter from "gray-matter";
import path from "path";
import CategoryList from "../components/CategoryList";
import ListDisplay from "../components/ListDisplay/ListDisplay";
import { SinglePageLayout } from "../layouts/SinglePageLayout/SinglePageLayout";
import styles from "./All/All.module.scss";

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

interface AllProps {
  posts: any[];
}

const All = ({ posts }: AllProps) => {
  const [category, setCategory] = useState([]);
  const postsToRender = posts.filter((post) =>
    category === [] ? true : post.frontmatter.type.includes(category)
  );
  console.log(postsToRender);

  return (
    <SinglePageLayout>
      <div className={`flex ${styles.absolute}`}>
        <input className={styles.search} placeholder="search" />
        <div>
          <h5 style={{ marginBottom: 12 }}>Also part of Sydhaven?</h5>
          <button className={styles.button}>+ Show yourself</button>
        </div>
      </div>
      <h1 style={{ marginTop: 40 }}>Sydhaven Members</h1>
      {/*<TagsList posts={posts} />*/}
      <CategoryList
        posts={posts}
        onTagClick={setCategory}
        category={category}
      />
      <div className={styles.listContainer}>
        {postsToRender.map((post, index) => (
          <ListDisplay key={index} post={post} />
        ))}
      </div>
    </SinglePageLayout>
  );
};

export default All;
