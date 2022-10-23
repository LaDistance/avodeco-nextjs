import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import logo from "../../public/logo.png";
// Basic navbar with "Prestations" and "Nous contacter" links
const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <div className="nav-container">
        <div className="brand">
          <Link href="/">
            <a>
              <Image src={logo} alt="AV'O DECO"></Image>
            </a>
          </Link>
        </div>
        <nav>
          <ul className="nav-mobile">
            <li>
              <a id="nav-toggle" href="#!">
                <span></span>
              </a>
            </li>
          </ul>
          <ul className="nav-list">
            <li>
              <Link href="/prestations">PRESTATIONS</Link>
            </li>
            <li>
              <Link href="/reseaux">NOS RÉSEAUX</Link>
            </li>
            <li>
              <Link href="/contact">NOUS CONTACTER</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default Navbar;
