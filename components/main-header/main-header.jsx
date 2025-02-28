import Link from "next/link";
import Image from "next/image";

import styles from "./main-header.module.css";
import logoImg from "@/assets/logo.png";
import MainHeaderBackground from "./main-header-background";
import NavLink from "./nav-link";

const MainHeader = () => {
  return (
    <>
      <MainHeaderBackground />
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <Image src={logoImg} alt="A plate with food on it" priority />
          NextLevel Food
        </Link>
        <nav className={styles.nav}>
          <ul>
            <li>
              <NavLink href="/meals" children="Browse Meals" />
            </li>
            <li>
              <NavLink href="/community" children="Foodies Community" />
            </li>
          </ul>
        </nav>
      </header>
    </>
  );
};

export default MainHeader;
