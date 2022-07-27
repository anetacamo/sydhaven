import fs from "fs";
import matter from "gray-matter";
import path from "path";
import CardsList from "../components/CardsList/CardsList";
import Paragraph from "../components/Paragraph/Paragraph";
import StarsDivider from "../components/StarsDivider";
import TagsList from "../components/TagsList";
import { DefaultLayout } from "../layouts/DefaultLayout/DefaultLayout";
import Image from "next/image";
import Intro from "../components/Intro/Intro";
import ImageSection from "../components/ImageSection/ImageSection";

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
      <Intro background="/14.jpeg" />

      <section className="grid center">
        <h2>Who makes South Harbour</h2>
        <Paragraph>
          To see the exact date and all sorts of upcoming activities, check the
          facebook site of or click any of the place links
        </Paragraph>
        <TagsList posts={posts} />
        <CardsList posts={posts} regular type="main" background="gray" main />
        <button>& Many More</button>
      </section>

      <section className="bg-black center">
        <h2>Calendar</h2>
        <Paragraph>
          To see the exact date and all sorts of upcoming activities, check the
          facebook site of{" "}
          <a href="https://www.facebook.com/groups/154685458042586/events">
            Sydhaven
          </a>{" "}
          or click any of the place links
        </Paragraph>
        <StarsDivider />
        {/*<CardsList posts={posts} type="event" />*/}
        <div className="flex-center" style={{ alignItems: "unset" }}>
          {posts.map((post, index) => (
            <>
              {post.frontmatter.type == "event" && (
                <div key={index} className="card small bg-black border-purple">
                  <h2>13.4.22</h2>
                  <h4 style={{ marginTop: 0, marginBottom: -8 }}>
                    {post.frontmatter.title}
                  </h4>
                  <h5>{post.frontmatter.address}</h5>
                </div>
              )}{" "}
            </>
          ))}
        </div>
      </section>

      <section className="bg-pink">
        <div style={{ maxWidth: 1200, margin: "auto" }}>
          <h2>Vision & values</h2>
          <p style={{ fontSize: 20, maxWidth: 800 }}>
            Each one teach one is a series of small workshops organised by
            anybody who has anything to bring to the table. The idea behind is
            that each of us has a skill or know-how that many of us could
            benefit from learning. Hold in Frontloberne. Check website for the
            upcoming events. Link.
          </p>
          <p>see all the memmbers</p>
          <button>Read more</button>
        </div>
      </section>
      <ImageSection background="/20.jpeg" />
      <section className="bg-red center">
        <h2>Open for Public</h2>
        <Paragraph>
          Many places that offer different creative workshops, curses, cultural
          events, provide a space for connecting or developing ones skills or
          simply just having a chat. To see the exact date and all sorts of
          upcoming activities, check the facebook site of{" "}
          <a href="https://www.facebook.com/groups/154685458042586/events">
            Sydhaven
          </a>{" "}
          or click any of the place links
        </Paragraph>
        <StarsDivider />
        <CardsList posts={posts} opening="present" background="gray" />
      </section>

      <section className="bg-pink">
        <div className="flex-center" style={{ maxWidth: 1400, margin: "auto" }}>
          <div style={{ textAlign: "right", maxWidth: "50%" }}>
            <h2>Community & Sustainability</h2>
            <p>
              Due to placement at the border of very noisy industrial
              neighbourhood and city center, Sydhaven is also an important place
              where many initiatives that may not be able to survive elsewhere
              are located. recycle and redistribute, trying to make a
              difference, help vulnerable communities and collect and
              redistribute resources in more sustainable way
            </p>
            <StarsDivider />
          </div>
          <div style={{ maxWidth: "50%" }}>
            <CardsList posts={posts} tag="community" />
          </div>
        </div>
      </section>
      <ImageSection background="/9.jpeg" />
      <section className="bg-red center" style={{ paddingBottom: 120 }}>
        <h4 className="purple">creative business</h4>
        <h2>Culture Makers & Value Creators</h2>
        <Paragraph>
          Sydhaven is home to many social and creative initiatives or platform
          that are trying to help young & creative people to become connected,
          develop their skills and inspire each other. Often centered around
          meaningful activities and purposes.
        </Paragraph>
        <StarsDivider />

        <CardsList posts={posts} tag="event makers" background="purple" />
      </section>
    </DefaultLayout>
  );
}
