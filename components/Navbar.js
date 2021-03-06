import React from "react";
import Link from "next/link";
import styles from "../styles/Home.module.css";

export function Navbar() {
  return (
    <nav>
      <ul>
        <li className={styles.navItem}>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>

        <li className={styles.navItem}>
          <Link href="/clinics">
            <a>診所列表</a>
          </Link>
        </li>
        <li className={styles.navItem}>
          <Link href="/services">
            <a>醫美類型</a>
          </Link>
        </li>
      </ul>
    </nav>
  );
}
