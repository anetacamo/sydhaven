import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { useEffect, useState } from 'react';

import Cards from '../components/Cards/Cards';
import CardsList from '../components/CardsList/CardsList';
import Paragraph from '../components/Paragraph/Paragraph';
import StarsDivider from '../components/StarsDivider';
import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';
import ImageSection from '../components/ImageSection/ImageSection';
import Link from 'next/link';
import sections from '../texts/home.json';
import styles from './Home/Home.module.scss';
import Subtitle from '../components/Subtitle/Subtitle';
import MapGl from '../components/MapGl/MapGl';
import CategoryList from '../components/CategoryList';
import TagsList from '../components/TagsList';
import SearchField from '../components/SearchField/SearchField';

export async function getStaticProps() {
  const files = fs.readdirSync(path.join('pages/posts'));
  const posts = files.map((filename) => {
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
  const [category, setCategory] = useState<string | string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [blogs, setBlogs] = useState<Post[]>([]);

  useEffect(() => {
    const postsToRender = posts.filter((post) =>
      category === [] ? true : post.frontmatter.type.includes(category)
    );
    const results = postsToRender.filter((post) =>
      searchQuery === ''
        ? true
        : post.frontmatter.title.toLowerCase().includes(searchQuery)
    );
    setBlogs(results);
  }, [searchQuery, category]);

  const onCategorySet = (cat: string) => {
    const previousCategory = category;
    previousCategory === cat ? setCategory([]) : setCategory(cat);
  };

  return (
    <DefaultLayout title={title}>
      <section
        className='bg-black full flex'
        style={{
          paddingTop: 120,
          paddingBottom: 120,
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h1 style={{ maxWidth: 600, fontFamily: 'brutalismregular' }}>
            Wellcome to Aarhus Sydhavnen
          </h1>
          <h4 style={{ maxWidth: 600 }}>
            {sections.intro.text}
            {sections.intro.text}
          </h4>
          {/* <button>read more</button> */}
        </div>
        <div
          style={{
            backgroundImage: `url('map4.jpeg')`,
            filter: 'invert(1)',
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            backgroundPosition: 'center',
            backgroundColor: 'white',
            height: 400,
            width: 600,
          }}
        ></div>
      </section>

      <ImageSection background='/14.jpeg' />

      <section className='bg-black full'>
        <div
          className='bg-black flex'
          style={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <MapGl posts={blogs} />
          <div className='right'>
            <h1 style={{ maxWidth: 600, fontFamily: 'brutalismregular' }}>
              Sydhavnen område
            </h1>
            <h4 style={{ maxWidth: 600 }}>
              {sections.intro.text}
              {sections.intro.text}
            </h4>
          </div>
        </div>
      </section>
      <section style={{ marginTop: -80 }} className='bg-black'>
        <div
          className='flex'
          style={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <CategoryList
            posts={posts}
            onTagClick={onCategorySet}
            category={category}
          />
          <SearchField
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
          />
        </div>
        <div className={styles.listContainer}>
          <div className='flex' style={{ justifyContent: 'space-between' }}>
            <h4>
              showing all{' '}
              {category.length === 0 || (
                <>
                  <span
                    className={`${styles.searchQuery} purplelight`}
                    onClick={() => setCategory([])}
                  >
                    {category}
                  </span>{' '}
                </>
              )}
              {searchQuery && (
                <>
                  {' '}
                  including{' '}
                  <span
                    className={`${styles.searchQuery} purplelight`}
                    onClick={() => setSearchQuery('')}
                  >
                    {searchQuery}
                  </span>
                </>
              )}
              <span className='gray'> {blogs.length} results</span>
            </h4>
          </div>

          <Cards posts={blogs} />
        </div>
        <TagsList posts={posts} />
      </section>

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

      {/* <section className='center'>
        <h2>{sections.members.title}</h2>
        <Paragraph>{sections.members.text}</Paragraph>
        <br />
        <CardsList posts={posts} regular type='main' background='gray' main />
        {sections.members.button !== '' && (
          <Link href='/members'>
            <button>{sections.members.button}</button>
          </Link>
        )}
      </section>

      <ImageSection background='/20.jpeg' />
      <section className='bg-red center'>
        <Subtitle subtitle={sections.open.subtitle} />
        <h2>{sections.open.title}</h2>
        <Paragraph>{sections.open.text}</Paragraph>
        <StarsDivider />
        <CardsList posts={posts} opening='present' background='gray' />
        <Link href='/members'>
          <button>{sections.members.button}</button>
        </Link>
      </section>

      <section className='bg-pink center'>
        <div className='flex-center' style={{ maxWidth: 1400, margin: 'auto' }}>
          <div style={{ textAlign: 'right', maxWidth: '50%', minWidth: 30 }}>
            <div style={{ maxWidth: 400 }}>
              <Subtitle subtitle={sections.second.subtitle} />
              <h2>{sections.second.title}</h2>
              <p>{sections.second.text}</p>
              <StarsDivider />
            </div>
          </div>
          <div style={{ maxWidth: '50%', minWidth: 350 }}>
            <CardsList posts={posts} tag='community' />
          </div>
        </div>
        <Link href='/members'>
          <button>{sections.members.button}</button>
        </Link>
      </section>

      <ImageSection background='/9.jpeg' />
      <section className='bg-red center'>
        <h3 className='purple'>{sections.third.subtitle}</h3>
        <h2>{sections.third.title}</h2>
        <Paragraph>{sections.third.text}</Paragraph>
        <StarsDivider />
        <CardsList posts={posts} tag='event makers' background='purple' />
        <Link href='/members'>
          <button>{sections.members.button}</button>
        </Link>
      </section> */}
    </DefaultLayout>
  );
}
