import Link from 'next/link';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';

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
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ fontSize: 20, paddingRight: 8 }}
              className='purplelight'
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: 20 }}
              className='purplelight'
            />
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
          <p style={{ margin: 0 }}>Fill this form</p>

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
