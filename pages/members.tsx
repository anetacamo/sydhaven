import { useEffect, useState } from 'react';
import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import CategoryList from '../components/CategoryList';
import ListDisplay from '../components/ListDisplay/ListDisplay';
import { SinglePageLayout } from '../layouts/SinglePageLayout/SinglePageLayout';
import styles from './All/All.module.scss';
import Post from '../types/card.type';
import Link from 'next/link';
import MapGl from '../components/MapGl/MapGl';
import Cards from '../components/Cards/Cards';
import SearchField from '../components/SearchField/SearchField';
import ResultsInfo from '../components/ResultsInfo/ResultsInfo';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { FaInstagram } from 'react-icons/fa';

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

interface AllProps {
  posts: Post[];
  category?: string;
}

const All = ({ posts }: AllProps) => {
  const [category, setCategory] = useState<string | string[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [blogs, setBlogs] = useState<Post[]>([]);
  const [blog, setBlog] = useState<Post>();

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
    <SinglePageLayout>
      <section
        className='bg-black'
        style={{
          paddingTop: 0,
          paddingBottom: 0,
          position: 'fixed',
          marginTop: -20,
          zIndex: 4,
        }}
      >
        <div
          className='flex black-bg'
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            width: 'calc(100vw - 64px)',
          }}
        >
          <CategoryList
            posts={posts}
            onTagClick={onCategorySet}
            category={category}
          />
          <div style={{ textAlign: 'right' }}>
            <SearchField
              searchQuery={searchQuery}
              onSearchQueryChange={setSearchQuery}
            />
            <ResultsInfo
              category={category}
              onCategorySet={setCategory}
              onSearchQuerySet={setSearchQuery}
              searchQuery={searchQuery}
              blogsLength={blogs.length}
            />
          </div>
        </div>
      </section>

      <section className='bg-black' style={{ paddingTop: 86 }}>
        <div className='bg-black flex'>
          <div style={{ width: '50%' }}>
            <MapGl posts={blogs} onMarkerClick={setBlog} />
          </div>
          <div style={{ width: '50%', maxWidth: 500, paddingLeft: 32 }}>
            <h2>
              {blog?.title
                ? blog?.title
                : 'click on the markers on the map to display info here. Or scroll down the page and browse the cards'}
            </h2>

            {blog?.address && (
              <div className='flex' style={{ alignItems: 'center' }}>
                <FontAwesomeIcon
                  icon={faLocation}
                  style={{ fontSize: 20, color: 'purple', paddingRight: 16 }}
                />
                <p style={{ margin: '4px 0' }}>{blog?.address}</p>
              </div>
            )}

            {blog?.link && (
              <div className='flex' style={{ alignItems: 'center' }}>
                <FontAwesomeIcon
                  icon={faLink}
                  style={{ fontSize: 20, color: 'purple', paddingRight: 16 }}
                />
                <p style={{ margin: '4px 0' }}>{blog?.link}</p>
              </div>
            )}

            {blog?.facebook && (
              <div className='flex' style={{ alignItems: 'center' }}>
                <FontAwesomeIcon
                  icon={faFacebook}
                  style={{ fontSize: 20, color: 'purple', paddingRight: 16 }}
                />
                <p style={{ margin: '4px 0' }}>{blog?.facebook}</p>
              </div>
            )}

            {blog?.instagram && (
              <div className='flex' style={{ alignItems: 'center' }}>
                <FontAwesomeIcon
                  icon={FaInstagram}
                  style={{ fontSize: 20, color: 'purple', paddingRight: 16 }}
                />
                <p style={{ margin: '4px 0' }}>{blog?.instagram}</p>
              </div>
            )}

            <p>{blog?.text}</p>
          </div>
        </div>
      </section>
      <section style={{ marginTop: -80 }} className='bg-black'>
        <div>
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
        </div>
        <Cards posts={blogs} onCardClick={setBlog} />
      </section>
      {/* <div className={`flex ${styles.absolute}`}>
        <input
          className={styles.search}
          placeholder="search"
          onChange={(e) => setSearchQuery(e.target.value.toLowerCase())}
          value={searchQuery}
        />
        <div>
          <h5 style={{ marginBottom: 12 }}>Also part of Sydhaven?</h5>
          <Link href={"/newMember"}>
            <button className={styles.button}>+ join the list</button>
          </Link>
        </div>
      </div>
      <h1 style={{ marginTop: 40 }}>Sydhavnen Members</h1>
      <CategoryList
        posts={posts}
        onTagClick={onCategorySet}
        category={category}
      />

      <div className={styles.listContainer}>
        <h4>
          showing all{" "}
          {category.length === 0 || (
            <>
              <span
                className={`${styles.searchQuery} purplelight`}
                onClick={() => setCategory([])}
              >
                {category}
              </span>{" "}
            </>
          )}
          {searchQuery && (
            <>
              {" "}
              including{" "}
              <span
                className={`${styles.searchQuery} purplelight`}
                onClick={() => setSearchQuery("")}
              >
                {searchQuery}
              </span>
            </>
          )}
        </h4>
        {blogs.map((post, index) => (
          <ListDisplay key={index} post={post} />
        ))}
      </div> */}
    </SinglePageLayout>
  );
};

export default All;
