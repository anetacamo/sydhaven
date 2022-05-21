import fs from "fs";
import matter from "gray-matter";
import path from "path";
import CardsList from "../components/CardsList/CardsList";
import StarsDivider from "../components/StarsDivider";
import TagsList from "../components/TagsList";
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
  const title = "Home";
  return (
    <DefaultLayout title={title}>
      <section className="grid center">
        <StarsDivider />
        <h1>Welcome to Sydhaven</h1>
        <TagsList posts={posts} />
        <CardsList posts={posts} regular tag="space" background="gray" />
      </section>

      <section className="bg-black center">
        <h2>Calendar</h2>
        <p style={{ maxWidth: 500, margin: "auto" }}>
          To see the exact date and all sorts of upcoming activities, check the
          facebook site of{" "}
          <a href="https://www.facebook.com/groups/154685458042586/events">
            Sydhaven
          </a>{" "}
          or click any of the place links
        </p>
        <StarsDivider />
        <CardsList posts={posts} tag="event" />
      </section>

      <section className="bg-salmon center">
        <h2>Vision and values</h2>
        <h4>
          Hold in Frontloberne. Check website for the upcoming events. Link
        </h4>
        <p style={{ maxWidth: 800, margin: "12px auto" }}>
          Each one teach one is a series of small workshops organised by anybody
          who has anything to bring to the table. The idea behind is that each
          of us has a skill or know-how that many of us could benefit from
          learning. Hold in Frontloberne. Check website for the upcoming events.
          Link.
        </p>
        <button>Read more</button>
      </section>

      <section className="bg-red center">
        <h2>Open for Public</h2>
        <p style={{ maxWidth: 500, margin: "12px auto" }}>
          To see the exact date and all sorts of upcoming activities, check the
          facebook site of{" "}
          <a href="https://www.facebook.com/groups/154685458042586/events">
            Sydhaven
          </a>{" "}
          or click any of the place links
        </p>
        <StarsDivider />
        <CardsList posts={posts} tag="event" />
      </section>

      <section className="bg-red center">
        <h2>Community & Sustainability</h2>
        <p style={{ maxWidth: 500, margin: "12px auto" }}>
          To see the exact date and all sorts of upcoming activities, check the
          facebook site of{" "}
          <a href="https://www.facebook.com/groups/154685458042586/events">
            Sydhaven
          </a>{" "}
          or click any of the place links
        </p>
        <StarsDivider />
        <CardsList posts={posts} tag="event" />
      </section>

      <section className="bg-red center">
        <h2>Culture Makers & Value Creators</h2>
        <p style={{ maxWidth: 500, margin: "12px auto" }}>
          To see the exact date and all sorts of upcoming activities, check the
          facebook site of{" "}
          <a href="https://www.facebook.com/groups/154685458042586/events">
            Sydhaven
          </a>{" "}
          or click any of the place links
        </p>
        <StarsDivider />
        <CardsList posts={posts} tag="event" background="purple" />
      </section>
    </DefaultLayout>
  );
}
