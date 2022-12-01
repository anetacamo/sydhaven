import fs from "fs";
import matter from "gray-matter";
import path from "path";
import CardsList from "../components/CardsList/CardsList";
import Paragraph from "../components/Paragraph/Paragraph";
import StarsDivider from "../components/StarsDivider";
import { DefaultLayout } from "../layouts/DefaultLayout/DefaultLayout";
import ImageSection from "../components/ImageSection/ImageSection";
import Link from "next/link";
import sections from "../texts/home.json";
import styles from "./Home/Home.module.scss";
import Subtitle from "../components/Subtitle/Subtitle";

export async function getStaticProps() {
  const files = fs.readdirSync(path.join("pages/posts"));
  const posts = files.map((filename) => {
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
      <ImageSection background="/bg.png" overlay full>
        <h1 className={styles.mainTitle}>{sections.intro.text}</h1>
      </ImageSection>

      {/* <section className='bg-purple grid'>
        <img
          src='/cards/food.png'
          style={{ maxHeight: 120, maxWidth: 120 }}
          className='filter-yellow'
        />
        <img
          src='/cards/diamond.png'
          style={{
            maxHeight: 120,
            maxWidth: 120,
          }}
          className='filter-yellow'
        />
        <img
          src='/cards/house4.png'
          style={{ maxHeight: 120, maxWidth: 120 }}
          className='filter-yellow'
        />
        <img
          src='/cards/mermaid.png'
          style={{ maxHeight: 120, maxWidth: 120 }}
          className='filter-yellow'
        />
      </section> */}

      <section className="center">
        <h2>{sections.members.title}</h2>
        <Paragraph>{sections.members.text}</Paragraph>
        <br />
        <CardsList posts={posts} regular type="main" background="gray" main />
        {sections.members.button !== "" && (
          <Link href="/members">
            <button>{sections.members.button}</button>
          </Link>
        )}
      </section>

      <section
        className="bg-black center"
        style={{
          backgroundImage: "url(/bg6.png)",
          backgroundSize: "70%",
          backgroundPosition: "center center",
        }}
      >
        <Subtitle subtitle={sections.next.subtitle} />
        <h2 className={styles.largeTitle}>{sections.next.title}</h2>
        <h2>{sections.next.date}</h2>
        <Paragraph>
          Sydhavnens Festival er en bydelsfestival, hvor områdets aktører åbner
          op for hele byen og for hinanden i fællesskab. Festivalen afholdes i
          Sydhavnskvarteret. Startende fra Dokk1 ved Mindet, den nordlige del
          ved Kulbroen, daen sydlige del ved Slagteriet og helt ned ad
          Sydhavnsgade til Soya Huset.
        </Paragraph>
        <a href="https://www.facebook.com/events/1379108515836403">
          <button>{sections.next.button}</button>
        </a>
      </section>

      <ImageSection background="/20.jpeg" />
      <section className="bg-red center">
        <Subtitle subtitle={sections.open.subtitle} />
        <h2>{sections.open.title}</h2>
        <Paragraph>{sections.open.text}</Paragraph>
        <StarsDivider />
        <CardsList posts={posts} opening="present" background="gray" />
        <Link href="/members">
          <button>{sections.members.button}</button>
        </Link>
      </section>

      <section className="bg-pink center">
        <div className="flex-center" style={{ maxWidth: 1400, margin: "auto" }}>
          <div style={{ textAlign: "right", maxWidth: "50%", minWidth: 30 }}>
            <div style={{ maxWidth: 400 }}>
              <Subtitle subtitle={sections.second.subtitle} />
              <h2>{sections.second.title}</h2>
              <p>{sections.second.text}</p>
              <StarsDivider />
            </div>
          </div>
          <div style={{ maxWidth: "50%", minWidth: 350 }}>
            <CardsList posts={posts} tag="community" />
          </div>
        </div>
        <Link href="/members">
          <button>{sections.members.button}</button>
        </Link>
      </section>

      <ImageSection background="/9.jpeg" />
      <section className="bg-red center">
        <h3 className="purple">{sections.third.subtitle}</h3>
        <h2>{sections.third.title}</h2>
        <Paragraph>{sections.third.text}</Paragraph>
        <StarsDivider />
        <CardsList posts={posts} tag="event makers" background="purple" />
        <Link href="/members">
          <button>{sections.members.button}</button>
        </Link>
      </section>
    </DefaultLayout>
  );
}
