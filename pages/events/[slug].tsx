import { SinglePageLayout } from "../../layouts/SinglePageLayout/SinglePageLayout";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
import { slugify } from "../../utils/slugify";
import SmallCard from "../../components/SmallCard";
import TagsList from "../../components/TagsList";
import CardsList from "../../components/CardsList/CardsList";

interface EventPageProps {
  frontmatter?: any;
  posts?: any[];
}

export default function EventPage({ frontmatter, posts }: EventPageProps) {
  console.log(posts);
  const { title, type, address, opening, image, text, events, housefor, tags } =
    frontmatter;
  return (
    <>
      <SinglePageLayout>
        <Link href={`/types/${type}`}>
          <h4 className="type bg-purplelight">{type}</h4>
        </Link>
        <h1>{title}</h1>
        <Image
          src={`/cards/${image}`}
          alt="blue"
          className={`half filter-yellow`}
          height={80}
          width={80}
          objectFit="contain"
        />

        <h5 className="bolded salmon">{address}</h5>
        <h5 style={{ maxWidth: 400, margin: "-8px auto" }}>{text}</h5>
        {opening && (
          <h5>
            <span className="salmon bolded">open </span>
            {opening}
          </h5>
        )}
        <ul className="links">
          {tags?.map((tag: string, index: number) => (
            <div className="type bg-purple" key={index}>
              {tag}
            </div>
          ))}
        </ul>
        <ul className="links">
          {housefor?.map((tag: string, index: number) => (
            <Link href={`/tags/${tag}`} key={index}>
              <div className="type bg-yellow">{tag}</div>
            </Link>
          ))}
        </ul>
        <ul className="links">
          {events?.map((tag: string, index: number) => (
            <div className="type bg-salmon" key={index}>
              {tag}
            </div>
          ))}
        </ul>
      </SinglePageLayout>
      <section className="center">
        <h3 style={{ marginTop: "-16px", marginBottom: "-4px" }}>
          All tags & Related Cards
        </h3>
        <TagsList posts={posts} />
        <CardsList posts={posts} tag="space" background="gray" />
      </section>
    </>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync(path.join("pages/posts"));

  const paths = files.map((filename) => ({
    params: { slug: filename.replace(".md", "") },
  }));

  const posts = files.map((filename) => {
    const slug = filename.replace(".md", "");
    const markdownWithMeta = fs.readFileSync(
      path.join("pages/posts", filename),
      "utf-8"
    );
    const { data: frontmatter } = matter(markdownWithMeta);
    return { slug, frontmatter };
  });

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params: { slug } }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("pages/posts", slug + ".md"),
    "utf-8"
  );

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

  const { data: frontmatter, content } = matter(markdownWithMeta);
  return {
    props: { posts, frontmatter, slug, content },
  };
}
