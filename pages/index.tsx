import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import CardsList from '../components/CardsList/CardsList';
import Paragraph from '../components/Paragraph/Paragraph';
import StarsDivider from '../components/StarsDivider';
import TagsList from '../components/TagsList';
import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';
import Intro from '../components/Intro/Intro';
import ImageSection from '../components/ImageSection/ImageSection';
import CategoryList from '../components/CategoryList';
import Link from 'next/link';
import sections from '../texts/home.json';
import styles from './Home/Home.module.scss';

export async function getStaticProps() {
  // get files from the directory
  const files = fs.readdirSync(path.join('pages/posts'));
  const posts = files.map((filename) => {
    // get slug
    const slug = filename.replace('.md', '');
    // get all frontmatter here:
    const markdownWithMeta = fs.readFileSync(
      path.join('pages/posts', filename),
      'utf-8'
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
  const title = 'Home';
  return (
    <DefaultLayout title={title}>
      <ImageSection background='/14.jpeg' overlay full>
        <h1 style={{ textTransform: 'none', maxWidth: 800, margin: 'auto' }}>
          {sections.intro.text}
        </h1>
      </ImageSection>

      <section className='center'>
        <h2>{sections.members.title}</h2>
        <Paragraph>{sections.members.text}</Paragraph>
        <br />
        {/* <CategoryList posts={posts} /> */}
        {/* <TagsList posts={posts} /> */}
        <CardsList posts={posts} regular type='main' background='gray' main />
        <Link href='/members'>
          <button>{sections.members.button}</button>
        </Link>
      </section>

      <section className='bg-black center'>
        <h3 className='purple'>{sections.next.subtitle}</h3>
        <h2 className={styles.largeTitle}>{sections.next.title}</h2>
        <h2>{sections.next.date}</h2>
        <a href='https://www.facebook.com/events/1379108515836403'>
          <button>{sections.next.button}</button>
        </a>

        {/* <Paragraph>
          To see more of upcoming activities, check the facebook site of
          Sydhavnen
        </Paragraph>
        <a href="https://www.facebook.com/groups/154685458042586/events">
          <button>more events</button>
        </a> */}
        {/* <StarsDivider /> */}
        {/*<CardsList posts={posts} type="event" />*/}
        {/* <div className="flex-center" style={{ alignItems: "unset" }}>
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
        </div> */}
      </section>

      <section className='bg-pink'>
        <div style={{ maxWidth: 1200, margin: 'auto' }}>
          <h2>{sections.values.title}</h2>
          <Paragraph left>{sections.values.text}</Paragraph>
          <p>see all the memmbers</p>
          <Link href='/members'>
            <button>{sections.values.button}</button>
          </Link>
        </div>
      </section>

      <ImageSection background='/20.jpeg' />

      <section className='bg-red center'>
        <h2>{sections.open.title}</h2>
        <Paragraph>{sections.open.text}</Paragraph>
        <StarsDivider />
        <CardsList posts={posts} opening='present' background='gray' />
      </section>

      <section className='bg-pink'>
        <div className='flex-center' style={{ maxWidth: 1400, margin: 'auto' }}>
          <div style={{ textAlign: 'right', maxWidth: '50%' }}>
            <h2>{sections.second.title}</h2>
            <p>{sections.second.text}</p>
            <StarsDivider />
          </div>
          <div style={{ maxWidth: '50%' }}>
            <CardsList posts={posts} tag='community' />
          </div>
        </div>
      </section>

      <ImageSection background='/9.jpeg' />

      <section className='bg-red center' style={{ paddingBottom: 120 }}>
        <h3 className='purple'>{sections.third.subtitle}</h3>
        <h2>{sections.third.title}</h2>
        <Paragraph>{sections.third.text}</Paragraph>
        <StarsDivider />
        <CardsList posts={posts} tag='event makers' background='purple' />
      </section>
    </DefaultLayout>
  );
}
