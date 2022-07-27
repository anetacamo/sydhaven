import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <h2>H</h2>
      <ul className="flex">
        <Link href="/vision">
          <li>vision</li>
        </Link>
        <Link href="/history">
          <li>history</li>
        </Link>
        <Link href="/present">
          <li>present</li>
        </Link>

        <Link href="/gallery">
          <li>gallery</li>
        </Link>
        <Link href="/association">
          <li>association</li>
        </Link>
        <Link href="/publications">
          <li>publications</li>
        </Link>
      </ul>
    </footer>
  );
}
