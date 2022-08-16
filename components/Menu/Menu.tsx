import Link from 'next/link';
import SkipNav from '../SkipNav/SkipNav';
import styles from './Menu.module.scss';
import Hamburger from '../Hamburger/Hamburger';

export default function Menu() {
  const menuItems = [
    { name: 'brugere', link: 'members' },
    { name: 'viden om', link: 'about' },
    { name: 'foreningen', link: 'association' },
  ];
  return (
    <nav role='navigation' className={`bg-black ${styles.nav}`}>
      <SkipNav />
      <Link href='/'>
        <a className={`${styles.logo} logo h2`}>S</a>
      </Link>
      <div className='flex'>
        {menuItems.map((item, index) => (
          <Link href={`/${item.link}`} key={index}>
            <a className={`${styles.li} li`}>{item.name}</a>
          </Link>
        ))}
      </div>
      {/* <Link href='/'>
        <a className={`${styles.logo} h2`}>D</a>
      </Link> */}
      <Hamburger />
    </nav>
  );
}
