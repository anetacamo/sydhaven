import Link from "next/link";
import styles from "./LargeMenu.module.scss";

export default function Footer() {
  return (
    <div className="flex-between">
      <div className="flex">
        <div className={styles.column} style={{ minWidth: 500 }}>
          <h3>coming up</h3>
          <h3>about</h3>
          <p style={{ maxWidth: 400 }}>
            To see the exact date and all sorts of upcoming activities, check
            the facebook site of Sydhaven. or click any of the following links.
            To see the exact date and all sorts of upcoming activities, check
            the facebook site of Sydhaven. or click any of the following links
          </p>
        </div>
        <div className={styles.column}>
          <h3>Engage</h3>
          <li className={styles.li}>
            <Link href="/">Become a board member</Link>
          </li>
          <li className={styles.li}>
            <Link href="/">Become a sponsor</Link>
          </li>
          <li className={styles.li}>
            <Link href="/">Instagram takeover</Link>
          </li>
          <li className={styles.li}>
            <Link href="/">Skriv til sydhaven</Link>
          </li>
          <li className={styles.li}>
            <Link href="/">Also part of Sydhaven?</Link>
          </li>

          <Link href="/">F</Link>

          <Link href="/">LI</Link>

          <Link href="/">Ig</Link>
        </div>

        <div className={styles.column}>
          <h3>Members</h3>
          <h3>Categories</h3>
        </div>
        <div className={styles.column}>
          <h3>Partners</h3>
          <li className={styles.li}>
            <Link href="https://www.sydhavnenskvarteret.dk">
              Sydhavens Kvarteret
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="https://www.sydhavnensfestival.dk">
              Sydhavens Festival
            </Link>
          </li>
          <li className={styles.li}>
            <Link href="https://www.sammenomsydhaven.dk">
              Sydhavens Festival
            </Link>
          </li>
        </div>
      </div>
      <p className="right">
        copyright Sydhaven 2022 | code & design by{" "}
        <Link href="/">AnetaCamo</Link>
      </p>
    </div>
  );
}
