import Link from "next/link";
import styled from "styled-components";

export default function Navbar() {
  return (
    <NavBar>
      <li>
        <Link href="/">Home</Link>
      </li>
      <li>
        <Link href="about_me">Über mich</Link>
      </li>
      <li>
        <Link href="gallery">Gallerie</Link>
      </li>
      <li>
        <Link href="shop">Shop</Link>
      </li>
      <li>
        <Link href="contact">Kontakt</Link>
      </li>
    </NavBar>
  );
}

const NavBar = styled.nav``;
