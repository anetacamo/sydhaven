import Link from "next/link";

export default function Menu() {
  return (
    <nav>
      <Link href="/">
        <h2 className="logo">S</h2>
      </Link>
      <ul className="flex">
        <Link href="/map">
          <li>map</li>
        </Link>
        <Link href="/calendar">
          <li>calendar</li>
        </Link>
        {/*}
        <Link href="/gallery">
          <li>history___</li>
        </Link>
        <Link href="/gallery">
          <li>present___</li>
  </Link>*/}
        <Link href="/vision">
          <li>vision</li>
        </Link>
        <Link href="/gallery">
          <li>gallery</li>
        </Link>
        <Link href="/association">
          <li>association</li>
        </Link>
        <Link href="/gallery">
          <li>publications</li>
        </Link>
        <Link href="/all">
          <li>members</li>
        </Link>
      </ul>
      <p>da / en</p>
    </nav>
  );
}
