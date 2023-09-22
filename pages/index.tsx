import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

import { useEffect, useState } from 'react';

import Cards from '../components/Cards/Cards';
import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';
import ImageSection from '../components/ImageSection/ImageSection';
import sections from '../texts/home.json';
import styles from './Home/Home.module.scss';
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
  const [slide, setSlide] = useState(0);

  const slides = [
    {
      background: 'black',
      text: 'Welcome to Aarhus Sydhavnen',
      image: '20',
      overlay: 'clouds',
    },
    {
      background: 'blue',
      text: 'education',
      image: '14',
      overlay: 'clouds',
    },
    {
      background: 'purple',
      text: 'fæleskab',
      image: '9',
      overlay: 'clouds',
    },
    {
      background: 'yellow',
      text: 'culture',
      image: '20',
      overlay: 'clouds',
    },
  ];

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

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     setSlide((prevSlide) => (prevSlide + 1) % 4); // Modulus 4 to loop back to 0 after reaching 3
  //   }, 2000); // Change slide every 2 seconds (2000 milliseconds)

  //   return () => {
  //     clearInterval(intervalId); // Clear the interval when the component unmounts
  //   };
  // }, []);
  return (
    <DefaultLayout title={title}>
      {/* <section
        className='bg-black full flex'
        style={{
          justifyContent: 'space-between',
        }}
      >
        <div>
          <h3>optional small text</h3>
          <h1 style={{ maxWidth: 600 }}>Wellcome to Aarhus Sydhavnen</h1>
          <h4 style={{ maxWidth: 600 }}>
            {sections.intro.text}
            {sections.intro.text}
          </h4>
        </div>
        <div
          style={{
            backgroundImage: `url('birds.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'contain',
            filter: 'invert(1)',
            backgroundPosition: 'center',
            backgroundColor: 'white',
            height: '300px',
            width: '300px',
          }}
        ></div>
      </section> */}

      <div
        className={`flex bg-${slides[slide].background}`}
        style={{
          position: 'relative',

          //  transitionDuration: '350ms',
          boxSizing: 'border-box',
          height: '100vh',
          marginTop: -75,
          //  alignContent: 'center',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            width: '50%',
            padding: '4rem 2rem',
            boxSizing: 'border-box',
          }}
        >
          <h3>optional small text</h3>
          <h1 style={{ maxWidth: 600, transitionDuration: '350ms' }}>
            {slides[slide].text}
          </h1>
          <h4 style={{ maxWidth: 600, transitionDuration: '350ms' }}>
            {sections.intro.text}
            {sections.intro.text}
          </h4>
        </div>
        <p
          style={{
            position: 'absolute',
            bottom: 18,
            left: '2rem',
            cursor: 'pointer',
          }}
        >
          <span onClick={() => setSlide(0)} onMouseEnter={() => setSlide(0)}>
            one
          </span>{' '}
          <span onClick={() => setSlide(1)} onMouseEnter={() => setSlide(1)}>
            education
          </span>{' '}
          <span onClick={() => setSlide(2)} onMouseEnter={() => setSlide(2)}>
            fælleskab
          </span>{' '}
          <span onClick={() => setSlide(3)} onMouseEnter={() => setSlide(3)}>
            culture
          </span>
        </p>
        <div
          style={{
            backgroundImage: `url('${slides[slide].image}.jpeg')`,
            backgroundRepeat: 'no-repeat',
            filter: 'none',
            transitionDuration: '350ms',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            boxSizing: 'border-box',
            width: '50%',
            height: '100vh',
          }}
        ></div>
        <div
          className={`filter-${slides[slide].background}`}
          style={{
            backgroundImage: `url('${slides[slide].overlay}.png')`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
            backgroundPosition: 'center center',
            width: '50%',
            position: 'absolute',
            //    transitionDuration: '350ms',
            top: 0,
            bottom: 0,
            left: '50%',
          }}
        ></div>
        <div
          style={{
            backgroundImage: `url('birds.png')`,
            backgroundRepeat: 'no-repeat',
            filter: 'invert(1)',
            backgroundSize: 'contain',
            backgroundPosition: 'center center',
            width: '20%',
            position: 'absolute',
            top: 0,
            bottom: '70%',
            left: '43%',
          }}
        ></div>
      </div>

      <section
        className='bg-purple full'
        style={{ borderBottom: '4px solid black' }}
      >
        <div className='center'>
          <h1
            style={{
              maxWidth: 600,
              fontFamily: 'Oswald',
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            Sydhavnen festival
          </h1>
          <h4
            style={{ maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}
          >
            {sections.intro.text}
            {sections.intro.text}
          </h4>
        </div>
      </section>
      <div className='flex'>
        <img
          src='20.jpeg'
          style={{
            height: 260,
            border: '4px solid black',
            flex: '1 1',
            minWidth: 240,
            maxWidth: 400,
            objectFit: 'cover',
          }}
        ></img>
        <img
          src='14.jpeg'
          style={{
            height: 260,
            border: '4px solid black',
            flex: '1 1',
            minWidth: 240,
            maxWidth: 400,
            objectFit: 'cover',
          }}
        ></img>
        <img
          src='9.jpeg'
          style={{
            height: 260,
            border: '4px solid black',
            flex: '1 1',
            minWidth: 240,
            maxWidth: 400,
            objectFit: 'cover',
          }}
        ></img>
        <img
          src='20.jpeg'
          style={{
            height: 260,
            border: '4px solid black',
            flex: '1 1',
            minWidth: 240,
            maxWidth: 400,
            objectFit: 'cover',
          }}
        ></img>
      </div>
      {/* 
      <section className='bg-black full'>
        <div
          className='bg-black flex'
          style={{ alignItems: 'center', justifyContent: 'space-between' }}
        >
          <MapGl posts={blogs} />
          <div className='right'>
            <h1 style={{ maxWidth: 600, fontFamily: 'Oswald' }}>
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
      </section> */}

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
