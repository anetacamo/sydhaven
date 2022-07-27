import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <h2>H</h2>
      <div className="footer-column">
        <h3>coming up</h3>
        <h3>about</h3>
        <p>
          To see the exact date and all sorts of upcoming activities, check the
          facebook site of Sydhaven. or click any of the following links. To see
          the exact date and all sorts of upcoming activities, check the
          facebook site of Sydhaven. or click any of the following links
        </p>
      </div>
      <div className="footer-column">
        <h3>Engage</h3>
        <li>
          <Link href="/">Become a board member</Link>
        </li>
        <li>
          <Link href="/">Become a sponsor</Link>
        </li>
        <li>
          <Link href="/">Instagram takeover</Link>
        </li>
        <li>
          <Link href="/">Skriv til sydhaven</Link>
        </li>
        <li>
          <Link href="/">Also part of Sydhaven?</Link>
        </li>

        <Link href="/">F</Link>

        <Link href="/">LI</Link>

        <Link href="/">Ig</Link>
      </div>

      <div className="footer-column">
        <h3>Members</h3>
        <li>
          <Link href="/">art</Link>
        </li>
        <li>
          <Link href="/">culture</Link>
        </li>
        <li>
          <Link href="/">creative business</Link>
        </li>
        <li>
          <Link href="/">social udsetter</Link>
        </li>
        <li>
          <Link href="/">education</Link>
        </li>
        <li>
          <Link href="/">community</Link>
        </li>
        <li>
          <Link href="/">bevaelse: movement</Link>
        </li>
      </div>
      <div className="footer-column">
        <h3>Partners</h3>
        <li>
          <Link href="https://www.sydhavnenskvarteret.dk">
            Sydhavens Kvarteret
          </Link>
        </li>
        <li>
          <Link href="https://www.sydhavnensfestival.dk">
            Sydhavens Festival
          </Link>
        </li>
        <li>
          <Link href="https://www.sammenomsydhaven.dk">Sydhavens Festival</Link>
        </li>

        <li>copyright Sydhaven 2020</li>
        <li>BADGE: I am part of SydHaven.</li>
        <li>
          code & design by<Link href="/">AnetaCamo</Link>
        </li>
      </div>
    </footer>
  );
}
