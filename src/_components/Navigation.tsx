import Link from "next/link";

export default function Navigation() {
  return (
    <div className="flex-auto">
      <ul className="flex items-center space-x-20 pr-7">
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/cabins">Cabins</Link>
        </li>
        <li>
          <Link href="/about">About</Link>
        </li>
        <li>
          <Link href="/account">My Account</Link>
        </li>
      </ul>
    </div>
  );
}
