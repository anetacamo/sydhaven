import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faMailForward } from '@fortawesome/free-solid-svg-icons';
import {
  faFacebook,
  faInstagram,
  faLinkedinIn,
} from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  return (
    <footer className=''>
      <section className='flex' style={{ justifyContent: 'space-between' }}>
        <div style={{ maxWidth: 500 }}>
          <h3>About sydhavnen</h3>
          <p>
            <span className='purplelight'>South Harbour </span>is an area in
            Aarhus west. To see the exact date and all sorts of upcoming
            activities, check the facebook site ofSouth Harbour is an area in
            Aarhus west. To see the exact date and all sorts of upcoming
            activities, check the facebook site of
          </p>
          <div className='flex' style={{ alignItems: 'center' }}>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ fontSize: 20, paddingRight: 8 }}
              className='purple'
            />
            <Link href='/vision'>
              <li>vision</li>
            </Link>
          </div>

          <div className='flex' style={{ alignItems: 'center' }}>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ fontSize: 20, paddingRight: 8 }}
              className='purple'
            />
            <Link href='/present'>
              <li>present</li>
            </Link>
          </div>

          <div className='flex' style={{ alignItems: 'center' }}>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ fontSize: 20, paddingRight: 8 }}
              className='purple'
            />
            <Link href='/history'>
              <li>history</li>
            </Link>
          </div>

          <div className='flex' style={{ alignItems: 'center' }}>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ fontSize: 20, paddingRight: 8 }}
              className='purple'
            />
            <Link href='/association'>
              <li>association</li>
            </Link>
          </div>

          <div className='flex' style={{ alignItems: 'center' }}>
            <FontAwesomeIcon
              icon={faArrowRight}
              style={{ fontSize: 20, paddingRight: 8 }}
              className='purple'
            />
            <Link href='/history'>
              <li>publications</li>
            </Link>
          </div>
        </div>
        <div>
          <h3>contact</h3>
          <div className='flex' style={{ paddingBottom: 24 }}>
            <a href='https://www.facebook.com/groups/1692517437636792'>
              <FontAwesomeIcon
                icon={faFacebook}
                style={{ fontSize: 20, paddingRight: 8 }}
                className='purplelight'
              />
            </a>
            <a href='https://www.instagram.com/sydhavnenaarhus'>
              <FontAwesomeIcon
                icon={faInstagram}
                style={{ fontSize: 20, paddingRight: 8 }}
                className='purplelight'
              />
            </a>
            <a href='https://www.linkedin.com/company/foreningen-sydhavnen/?originalSubdomain=dk'>
              <FontAwesomeIcon
                icon={faLinkedinIn}
                style={{ fontSize: 20, paddingRight: 8 }}
                className='purplelight'
              />
            </a>
            <a href='mailto:sydhavneanaarhus@gmail.com'>
              <FontAwesomeIcon
                icon={faMailForward}
                style={{ fontSize: 20 }}
                className='purplelight'
              />
            </a>
          </div>
          <p className='purplelight' style={{ margin: 0 }}>
            Kulbroen
          </p>
          <p style={{ margin: 0 }}> Kalkværksvej 5G</p>
          <p style={{ margin: 0 }}>Marc Sejr Eggen</p>
          <p style={{ margin: 0 }}>Marc@kulbroen.com</p>
          <p className='purplelight' style={{ marginBottom: 0 }}>
            Sydhavnen
          </p>
          <p style={{ margin: 0 }}>Sarah Jarsbrø</p>
          <p style={{ margin: 0 }}>Sarahjarsbro@gmail.com</p>

          <h3>Partners</h3>
          <li>
            <Link href='https://www.sydhavnenskvarteret.dk'>
              Sydhavens Kvarteret
            </Link>
          </li>
          <li>
            <Link href='https://www.sydhavnensfestival.dk'>
              Sydhavens Festival
            </Link>
          </li>
          <li>
            <Link href='https://www.sammenomsydhavnen.dk'>
              Sammen om sydhavnen
            </Link>
          </li>
        </div>
        <div style={{ paddingRight: 120 }}>
          <h3>Engage</h3>
          <p className='purplelight' style={{ margin: 0 }}>
            Become a part of Sydhaven
          </p>
          <p style={{ margin: 0 }}>Use this patch on your website</p>

          <p className='purplelight' style={{ marginBottom: 0 }}>
            Also a member?
          </p>
          <p style={{ margin: 0 }}>Fill this form to join the map</p>

          <p style={{ marginBottom: 0, fontSize: 13 }}>
            © Sydhavnen association 2023
          </p>
          <p style={{ margin: 0, fontSize: 13 }}>
            This website is built in in Next.js
            <br /> Coded & designed by Aneta Camo
          </p>
        </div>
      </section>
    </footer>
  );
}
