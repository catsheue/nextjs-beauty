import Head from "next/head";
import styles from "../styles/Home.module.css";

import Image from "next/image";
import { Navbar } from "../components/Navbar";
import { clinicList } from "../clinics";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Noto+Serif+TC&display=swap"
          rel="stylesheet"
        />
      </Head>

      <main className={styles.main}>
        <div className={styles.titleContainer}>
          <Image src="/images/mainvisual.webp" width="1920px" height="300px" />
          <h1 className={styles.title}>醫美診所特搜</h1>
        </div>

        <div className={styles.grid}>
          <Navbar />
          <div className={styles.rightBody}>
            <section className={styles.servicesType}>
              <h2>醫美雷射</h2>
            </section>
          </div>
        </div>
      </main>
    </div>
  );
}
