import Link from 'next/link';
import SkipNav from '../SkipNav/SkipNav';
import styles from './Menu.module.scss';
import Hamburger from '../Hamburger/Hamburger';
import { useState } from 'react';
import LargeMenu from '../LargeMenu/LargeMenu';

export default function Menu() {
  const menuItems = [
    { name: 'kort', link: 'map' },
    { name: 'brugere', link: 'members' },
    { name: 'viden om', link: 'about' },
    { name: 'foreningen', link: 'association' },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <nav
        role='navigation'
        className={`bg-black ${styles.nav} ${open && styles.open} `}
      >
        <SkipNav />
        <Link href='/'>
          <a className={`${styles.logo} logo h2`}>S</a>
        </Link>

        <div className='flex desktop'>
          {menuItems.map((item, index) => (
            <Link href={`/${item.link}`} key={index}>
              <a className={`${styles.li} li`}>{item.name}</a>
            </Link>
          ))}
        </div>
        <Hamburger onButtonClick={() => setOpen(!open)} />
        {/* <Link href='/'>
        <a className={`${styles.logo} h2`}>D</a>
      </Link> */}
      </nav>

      {open && <LargeMenu />}
    </>
  );
}
