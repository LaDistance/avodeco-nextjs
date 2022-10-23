import Link from "next/link";
import Image from "next/image";
import styles from "./Navbar.module.scss";
import logo from "../../public/logo.png";
import { useState } from "react";
// Basic navbar with "Prestations" and "Nous contacter" links
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
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
          <div className="nav-mobile">
            <a id="nav-toggle" onClick={() => setIsOpen(true)}>
              <span></span>
            </a>
          </div>
          <ul className={isOpen ? "nav-list expanded" : "nav-list"}>
            <li>
              <Link href="/prestations" onClick={() => setIsOpen(false)}>
                PRESTATIONS
              </Link>
            </li>
            <li>
              <Link href="/reseaux" onClick={() => setIsOpen(false)}>
                NOS RÉSEAUX
              </Link>
            </li>
            <li>
              <Link href="/contact" onClick={() => setIsOpen(false)}>
                NOUS CONTACTER
              </Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className={styles.divider}></div>
    </div>
  );
};

export default Navbar;
