import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import GIF from './gallery/images/giphy.gif';

export default function Home() {

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Interior Development</title>
      </Head>
{/*       <Image src={GIF}></Image> */}
      <main className={styles.main}>
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