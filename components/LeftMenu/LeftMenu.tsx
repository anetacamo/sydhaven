import Link from "next/link";
import styles from "./LeftMenu.module.scss";

export default function LeftMenu() {
  return (
    <ul className={styles.menu}>
      <Link href="/map">
        <li>map</li>
      </Link>
    </ul>
  );
}
