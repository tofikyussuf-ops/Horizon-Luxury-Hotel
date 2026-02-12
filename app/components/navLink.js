import Link from "next/link";
function NavLink() {
  return (
    <ul>
      <li>
        <Link href="/"> Home</Link>
      </li>
      <li>
        <Link href="/cabins"> Cabin</Link>
      </li>
      <li>
        <Link href="/account"> Account</Link>
      </li>
      <li>
        <Link href="/about"> About</Link>
      </li>
    </ul>
  );
}

export default NavLink;
