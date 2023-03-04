import ImageSection from '../components/ImageSection/ImageSection';
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

      {/* <div className='flex' style={{ justifyContent: 'space-between' }}>
        {sections.map((sec, index) => (
          <div
            key={index}
            className={`${styles.section} ${sec.title}
              ${section == sec.title ? styles.open : ''}`}
            onClick={() => setSection(sec.title)}
          >
            <div className={styles.container}>
              <h3 className={`purple ${section !== sec.title && 'vertical'}`}>
                {sec.title}
              </h3>
              <Paragraph size='large'>{sec.text}</Paragraph>
              <br />
              <br />
              {sec.paragraphs.map((p, index) => (
                <Paragraph key={index}>{p}</Paragraph>
              ))}
            </div>
          </div>
        ))}
      </div> */}

      <div className='about' style={{ display: 'flex' }}>
        <div
          className={`history container ${
            section !== 'history' ? 'side' : 'open'
          } `}
          onClick={() => setSection('history')}
        >
          <h3 className='vertical'>History</h3>
          <div className='content'>
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
        </div>

        <div
          className={`present container ${
            section !== 'present' ? 'side' : 'open'
          } `}
          onClick={() => setSection('present')}
        >
          <h3 className='vertical'>present</h3>
          <div className='content'>
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
        </div>

        <div
          className={`vision container ${
            section !== 'vision' ? 'side' : 'open'
          } `}
          onClick={() => setSection('vision')}
        >
          <h3 className='vertical'>vision</h3>
          <div className='content'>
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
        </div>
      </div>

      {/* 
      <div className='flex' style={{ justifyContent: 'space-between' }}>
        <div
          className={`bg-black ${styles.section} ${styles.history} ${
            section == 'history' ? styles.open : ''
          }`}
          onClick={() => setSection('history')}
        >
          <div className={styles.container}>
            <h3
            // className={`${section !== 'history' && styles.vertical}`}
            >
              {sections[0].title}
            </h3>
            <Paragraph size='large'>{sections[0].text}</Paragraph>
            {sections[0].paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
          <ImageSection background='/14.jpeg' />
        </div>
        <div
          className={`${styles.section} ${styles.present} ${
            section == 'present' ? styles.open : ''
          }`}
          onClick={() => setSection('present')}
        >
          <div className={styles.container}>
            <h3
            // className={`${section !== 'present' && styles.vertical}`}
            // style={{ right: 104, color: 'black' }}
            >
              {sections[1].title}
            </h3>
            <Paragraph size='large'>{sections[1].text}</Paragraph>
            {sections[1].paragraphs.map((p, index) => (
              <p key={index}>{p}</p>
            ))}
          </div>
          <ImageSection background='/9.jpeg' />
        </div>
        <div
          className={`bg-purple ${styles.section} ${styles.vision} ${
            section == 'vision' ? styles.open : ''
          }`}
          onClick={() => setSection('vision')}
        >
          <div className={styles.container}>
            <h3
            // className={`${section !== 'vision' && styles.vertical}`}
            // style={{ right: 24 }}
            >
              {sections[2].title}
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
        </div>{' '}
      </div> */}
    </>
  );
};

export default About;
