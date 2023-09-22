import Link from 'next/link';
import Image from 'next/image';
import SkipNav from '../SkipNav/SkipNav';
import styles from './Menu.module.scss';
import Hamburger from '../Hamburger/Hamburger';
import { useState } from 'react';
import LargeMenu from '../LargeMenu/LargeMenu';

export default function Menu() {
  const menuItems = [
    { name: 'viden om', link: 'about' },
    { name: 'foreningen', link: 'association' },
  ];
  const [open, setOpen] = useState(false);
  return (
    <>
      <div className={styles.heightfix}></div>
      <nav
        role='navigation'
        className={` menu ${styles.nav} ${open && styles.open} `}
      >
        <SkipNav />
        <Link href='/'>
          <div className={styles.logo}>
            <Image
              src={`/logo.gif`}
              height={54}
              width={54}
              objectFit='contain'
            />
          </div>
        </Link>

        <div className='flex desktop'>
          {menuItems.map((item, index) => (
            <Link href={`/${item.link}`} key={index}>
              <a className={`${styles.li} li`}>{item.name}</a>
            </Link>
          ))}
        </div>
        <Hamburger onButtonClick={() => setOpen(!open)} />
      </nav>

      {open && <LargeMenu />}
    </>
  );
}
