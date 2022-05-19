import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <Link href="/">
        <h2>S</h2>
      </Link>
      <ul className="flex">
        <Link href="/map">
          <li>map___</li>
        </Link>
        <Link href="/calendar">
          <li>calendar___</li>
        </Link>
        <Link href="/vision">
          <li>vision___</li>
        </Link>
        <Link href="/gallery">
          <li>gallery___</li>
        </Link>
      </ul>
      <p>da / en</p>
    </nav>
  );
}
