import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';
import Card from '../components/Card';
import Paragraph from '../components/Paragraph/Paragraph';
import { FaArrowDown, FaArrowRight } from 'react-icons/fa';
import { DefaultLayout } from '../layouts/DefaultLayout/DefaultLayout';
import sections from '../texts/association.json';
import ImageSection from '../components/ImageSection/ImageSection';

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

interface AssociationProps {
  posts: any[];
}

const Association = ({ posts }: AssociationProps) => {
  const title = 'Association of South Harbour';
  return (
    <DefaultLayout title={title}>
      <div className='center bg-black'>
        <section style={{ paddingBottom: 120, paddingTop: 120 }}>
          {sections.intro.subtitle !== '' && <h3 className='purple-bg'></h3>}

          <h1 style={{ maxWidth: 600, margin: 'auto' }}>
            {sections.intro.title}
          </h1>
          <Paragraph>{sections.intro.text}</Paragraph>
          <button>mail us</button>
        </section>

        {/* <section className='bg-red'>
          <h3>
            are you also located in sydhaven?
            <span
              className='blue'
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <FaArrowRight style={{ paddingRight: 8 }} /> Join the map
            </span>
          </h3>
        </section> */}

        <ImageSection background='/14.jpeg' overlay>
          <section
            style={{
              paddingBottom: 120,
              paddingTop: 120,
              marginLeft: 'auto',
              marginRight: 'auto',
            }}
          >
            {sections.intro.subtitle !== '' && <h3 className='purple-bg'></h3>}

            <h1 style={{ maxWidth: 600, margin: 'auto' }}>
              {sections.intro.title}
            </h1>
            <Paragraph>{sections.intro.text}</Paragraph>
            <button>mail us</button>
          </section>
        </ImageSection>

        <section className='bg-black'>
          <h2>{sections.member.title}</h2>
          <Paragraph>
            {sections.intro.text}. Statutes, the board and registration.
          </Paragraph>
          <div className='flex-center' style={{ marginTop: 24 }}>
            {sections.member.memberships.map((mem, index) => (
              <Card background={'purple'} key={index}>
                <h3>{mem.title}</h3>
                <p>{mem.text}</p>
                <button>{mem.button}</button>
              </Card>
            ))}
          </div>

          <div className='flex-center'>
            <Card style={{ width: 640, height: 240, maxWidth: 640 }}>
              <h3 style={{ marginBottom: 12 }}>
                {sections.member.instagram.title}
              </h3>
              <p>{sections.member.instagram.text}</p>
              <button style={{ marginTop: 12 }}>
                {sections.member.instagram.button}
              </button>
            </Card>
          </div>
        </section>

        <section className='bg-red'>
          <h2>Engage</h2>
          <Paragraph>
            2 annual events from the association - Tours: info and booking of
            various in the neighbourhood - Tours: info and booking of various in
            the neighbourhood - Articles: about Sydhavnen and from the
            neighbourhood. Articles: about Sydhavnen and from the neighbourhood
            - Photo: - from Sydhavnen - possibly from Kasper Vindeløv (local
            photographer) -
          </Paragraph>
        </section>

        <section className='bg-purple'>
          <h2>Sydhavens Documents</h2>
          <Paragraph>
            Text about assosiation, two types of membership, what does it do,
            instagram takeover - The values - - Documents - Board of people -
            How to be a member - how to be a sponsor
          </Paragraph>
          <ul>
            <li className='flex-center' style={{ paddingTop: 16 }}>
              <FaArrowDown />
              <a className='underlined' style={{ paddingLeft: 8 }}>
                Document name download
              </a>
            </li>
            <li className='flex-center' style={{ paddingTop: 8 }}>
              <FaArrowDown />
              <a className='underlined' style={{ paddingLeft: 8 }}>
                Document name download
              </a>
            </li>
            <li className='flex-center' style={{ paddingTop: 8 }}>
              <FaArrowDown />
              <a className='underlined' style={{ paddingLeft: 8 }}>
                Document name download
              </a>
            </li>
          </ul>
        </section>
        {/* <section className='bg-pink'>
          <h3 className='purple'>open events</h3>
          <h2>Get to know South Harbour live</h2>
          <Paragraph>
            South Harbour is main organiser of South Harbour festival that
            happens every year. 2 events every year Festival, meet your member
            Info and booking for the tours. Mail for now. Billeto link.
            Newsletter
          </Paragraph>
          <StarsDivider />

          {/* <CardsList posts={posts} sydhaven={true} /> */}
        {/* <button>
            <div className='flex-center'>
              <span style={{ paddingRight: 8, paddingTop: 3 }}>Contact us</span>
              <FaArrowRight />
            </div>
          </button>
        </section> */}
        <section className='bg-gray' style={{ color: 'black' }}>
          <h2>Newsletter</h2>
          <Paragraph>
            South Harbour is main organiser of South Harbour festival that
            happens every year. 2 events every year Festival, meet your member
            Info and booking for the tours. Mail for now. Billeto link.
            Newsletter
          </Paragraph>
          <input
            style={{
              borderTopRightRadius: 0,
              borderBottomRightRadius: 0,
              paddingTop: 12,
              fontSize: 12,
              paddingBottom: 10,
            }}
            placeholder='your email'
          />
          <button style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}>
            <div className='flex-center'>
              <span style={{ paddingRight: 8 }}>signup</span>
              <FaArrowRight />
            </div>
          </button>
        </section>
      </div>
    </DefaultLayout>
  );
};

export default Association;
