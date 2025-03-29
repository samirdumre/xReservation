import Link from "next/link";

export default function Navigation() {
  return (
    <>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cabins">Explore cabins</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/account">My Account</Link>
        </li>
      </ul>
    </>
  );
}
