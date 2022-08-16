import { useState } from 'react';

import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { SimpleLayout } from '../layouts/SimpleLayout/SimpleLayout';
import { categoryColors } from '../types/colors.type';

import Post from '../types/card.type';
import Card from '../components/Card';
import ImageSection from '../components/ImageSection/ImageSection';
import styles from './Map/Map.module.scss';

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

const Map = ({ posts }: AllProps) => {
  const [name, setName] = useState('');
  const [view, setView] = useState('');
  const clicked = posts.filter((place) => place.frontmatter.title === view);
  const mapable = posts.filter((post) => post.frontmatter.top);
  console.log(mapable);

  return (
    <SimpleLayout>
      <div className={`flex ${styles.container}`}>
        <div className={styles.mapCanvas}>
          <img src='/map4.jpeg' className={styles.map} />
          {mapable.map((place, index) => (
            <div
              key={index}
              className={`${styles.point} bg-purple`}
              onClick={() => setView(place.frontmatter.title)}
              onMouseEnter={() => setName(place.frontmatter.title)}
              style={{
                top: place.frontmatter.top,
                left: place.frontmatter.left,
              }}
            >
              <img
                src={`/cards/${place.frontmatter.image}`}
                alt={`icon`}
                className={styles.icon}
              />
              <div
                className={`${styles.title} bg-purple ${
                  name === place.frontmatter.title ? styles.opened : ''
                }`}
                // className={`title bg-${categoryColors[place.category]} ${
                //   name === place.title ? "opened" : ""
                // }`}
              >
                {name === place.frontmatter.title ? name : ''}
                <span className='gray'>
                  {' '}
                  {name === place.frontmatter.title
                    ? place.frontmatter.address
                    : ''}
                </span>
              </div>
            </div>
          ))}
        </div>
        {/* <div style={{ width: '100%' }}>
          <div style={{ padding: 24 }}>
            <p className='type bg-purple' style={{ marginTop: 32 }}>
              {clicked[0]?.frontmatter.type}
            </p>
            <h2>{clicked[0]?.frontmatter.title}</h2>
            <p style={{ marginTop: -24 }}>{clicked[0]?.frontmatter.address}</p>
            <p style={{ maxWidth: 600 }}>{clicked[0]?.frontmatter.text}</p>
          </div>
        </div> */}
      </div>
    </SimpleLayout>
  );
};

export default Map;
