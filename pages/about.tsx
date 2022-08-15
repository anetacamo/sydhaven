import ImageSection from '../components/ImageSection/ImageSection';
import LeftMenu from '../components/LeftMenu/LeftMenu';
import Paragraph from '../components/Paragraph/Paragraph';
import { SimpleLayout } from '../layouts/SimpleLayout/SimpleLayout';
import { useState } from 'react';
import sections from '../texts/about.json';
import styles from './About/About.module.scss';

const About = () => {
  const [section, setSection] = useState('present');
  const title = 'About';
  return (
    <>
      <SimpleLayout title={title} />

      <ImageSection background='/20.jpeg' />

      <div className='flex'>
        <div
          className={`bg-black ${styles.section} ${styles.history}`}
          onClick={() => setSection('history')}
          style={{
            minWidth: section == 'history' ? 'calc(100% - 160px)' : '80px',
          }}
        >
          <div className={styles.container}>
            <h3
            // className={`${section !== 'history' && styles.vertical}`}
            >
              {sections.history.title}
            </h3>
            <Paragraph size='large'>{sections.history.text}</Paragraph>
            {sections.history.paragraphs.map((p) => (
              <p>{p}</p>
            ))}
          </div>
          <ImageSection background='/14.jpeg' />
        </div>

        <div
          className={`${styles.section} ${styles.present}`}
          onClick={() => setSection('present')}
          style={{
            minWidth: section == 'present' ? 'calc(100% - 160px)' : '80px',
          }}
        >
          <div className={styles.container}>
            <h3
            // className={`${section !== 'present' && styles.vertical}`}
            // style={{ right: 104, color: 'black' }}
            >
              {sections.present.title}
            </h3>
            <Paragraph size='large'>{sections.present.text}</Paragraph>
            {sections.present.paragraphs.map((p) => (
              <p>{p}</p>
            ))}
          </div>
          <ImageSection background='/9.jpeg' />
        </div>

        <div
          className={`bg-purple ${styles.section} ${styles.vision}`}
          onClick={() => setSection('vision')}
          style={{
            minWidth: section == 'vision' ? 'calc(100% - 160px)' : '80px%',
          }}
        >
          <div className={styles.container}>
            <h3
            // className={`${section !== 'vision' && styles.vertical}`}
            // style={{ right: 24 }}
            >
              {sections.vision.title}
            </h3>
            <h4>
              To see the exact date and all sorts of upcoming activities, check
              the facebook site of or click an
            </h4>

            <p>
              To see the exact date and all sorts of upcoming activities, check
              the facebook site of or click any of the place links. To see the
              exact date and all sorts of upcoming activities, check the
              facebook site of or click any of the place links. To see the exact
              date and all sorts of upcoming activities, check the facebook site
              of or click any of the place links.
            </p>
          </div>
          <ImageSection background='/9.jpeg' />
        </div>
      </div>
    </>
  );
};

export default About;
