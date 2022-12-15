import Link from 'next/link';
import { useState } from 'react';
import Hamburger from '../Hamburger/Hamburger';
import LargeMenu from '../LargeMenu/LargeMenu';
import styles from './Footer.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocation, faLink } from '@fortawesome/free-solid-svg-icons';
import { faFacebook, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { FaInstagram, FaFacebook } from 'react-icons/fa';

export default function Footer() {
  const [open, setOpen] = useState(false);
  return (
    <footer className=''>
      <section
        className='flex'
        style={{ alignItems: 'center', justifyContent: 'space-between' }}
      >
        <div>
          <Link href='/vision'>
            <li>vision</li>
          </Link>
          <Link href='/history'>
            <li>history</li>
          </Link>
          <Link href='/present'>
            <li>present</li>
          </Link>
          <Link href='/gallery'>
            <li>gallery</li>
          </Link>
          <Link href='/association'>
            <li>association</li>
          </Link>
          <Link href='/publications'>
            <li>publications</li>
          </Link>
        </div>
        <div>
          <h3>contact</h3>
          <div className='flex' style={{ paddingBottom: 24 }}>
            <FontAwesomeIcon
              icon={faFacebook}
              style={{ fontSize: 20, paddingRight: 8 }}
              className='purple'
            />
            <FontAwesomeIcon
              icon={faInstagram}
              style={{ fontSize: 20 }}
              className='purple'
            />
          </div>
          <p className='purple' style={{ margin: 0 }}>
            Kulbroen
          </p>
          <p style={{ margin: 0 }}> Kalkværksvej 5G</p>
          <p style={{ margin: 0 }}>Marc Sejr Eggen</p>
          <p style={{ margin: 0 }}>Marc@kulbroen.com</p>
          <p className='purple' style={{ marginBottom: 0 }}>
            Sydhavnen
          </p>
          <p style={{ margin: 0 }}>Sarah Jarsbrø</p>
          <p style={{ margin: 0 }}>Sarahjarsbro@gmail.com</p>
          <p style={{ marginBottom: 0 }}>© Sydhavnen association 2023</p>
          <p style={{ margin: 0 }}>
            This website is built in in Next.js
            <br /> Coded & designed by Aneta Camo
          </p>
        </div>
        <div>
          <h3>Engage</h3>
          <p className='purple' style={{ margin: 0 }}>
            Become a part of Sydhaven
          </p>
          <p style={{ margin: 0 }}>Use this patch on your website</p>

          <p className='purple' style={{ marginBottom: 0 }}>
            Also a member?
          </p>
          <p style={{ margin: 0 }}>Fill this form</p>
        </div>
      </section>
    </footer>
  );
}
