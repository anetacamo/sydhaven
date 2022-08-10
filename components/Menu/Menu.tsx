import Link from "next/link";
import SkipNav from "../SkipNav/SkipNav";
import styles from "./Menu.module.scss";

export default function Menu() {
  const menuItems = ["map", "calendar", "all", "about", "association"];
  return (
    <nav role="navigation">
      <SkipNav />
      <Link href="/">
        <a className={`${styles.logo} h2`}>S</a>
      </Link>
      <div className="flex">
        {menuItems.map((item, index) => (
          <Link href={`/${item}`} key={index}>
            <a className={`${styles.li} li`}>{item}</a>
          </Link>
        ))}
      </div>
      <p>da / en</p>
    </nav>
  );
}
