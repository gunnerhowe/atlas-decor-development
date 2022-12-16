import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import LOGO_BLACK from './gallery/images/logo_black.svg';
import LOGO_WHITE from './gallery/images/logo_white.svg';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Panda Prints</title>
      </Head>
{/*       <Image src={GIF}></Image> */}
      <main className={styles.main}>
         <LOGO_BLACK className={styles.main_logo}></LOGO_BLACK>
        <h1 className={styles.title}><span className={styles.titleColor}>Make your Home Smarter with AI Wall Decor!</span></h1>
        <p className={styles.description}>
        </p>
        <span></span>
        <Link href="/generate">
          <button className={styles.btn_neu}>
          Create</button>
        </Link>
      </main>
    </div>
  );
}