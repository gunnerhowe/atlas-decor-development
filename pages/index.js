import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../styles/Home.module.css";
import Image from 'next/image';
import LOGO_BLACK from './gallery/images/logo_black.svg';
import LOGO_WHITE from './gallery/images/logo_white.svg';
import AI from './gallery/images/ai.svg';
import CREATIVE from './gallery/images/creative.svg';
import QUALITY from './gallery/images/quality.svg';
import UNIQUE from './gallery/images/unique.svg';
import NEWS from './gallery/images/news.svg';

export default function Home() {

  return (

    <div className={styles.container}>
      <Head>
        <title>Panda Prints</title>
      </Head>
      <div className={styles.main_container}>
        <h1 className={styles.main_h1}>Welcome to the future of wall decor provided to you by Panda Prints</h1>
        <p className={styles.main_p}>Join the growing AI community and find out why AI has been winning art awards</p>
        <div className={styles.main_buttons}>
          <button className={styles.main_container_button}>Get Started</button>
          <button className={styles.main_container_button}>Learn More</button>
        </div>
        <AI className={styles.main_logo}></AI>
      </div> 

      <div className={styles.main_grid_container}>
        <div className={styles.main_grid}>
          <div className={styles.main_grid_card}>
            <CREATIVE className={styles.main_grid_svg_creative}></CREATIVE>
            <h2 className={styles.main_grid_h2}>Creative</h2>
            <p className={styles.main_grid_p}>Leverage AI to express yourself. Panda Prints allows you to generate any image that you can come up with. No boundry can contain your imagination</p>
          </div>
          <div className={styles.main_grid_card}>
            <QUALITY className={styles.main_grid_svg}></QUALITY>
            <h2 className={styles.main_grid_h2}>Quality</h2>
            <p className={styles.main_grid_p}>All images can scale up and maintain outstanding quality. All images generated are converted to SVG format before being placed on the canvas of your choosing</p>
          </div>
          <div className={styles.main_grid_card}>
            <UNIQUE className={styles.main_grid_svg}></UNIQUE>
            <h2 className={styles.main_grid_h2}>Unique</h2>
            <p className={styles.main_grid_p}>Each piece is one of a kind and will never be seen anywhere else. Even if you enter the same prompt, it will always generate something new</p>
          </div>
        </div>
      </div> 

      <div className={styles.second_container}>
          <LOGO_BLACK className={styles.second_container_img}></LOGO_BLACK>
          <div className={styles.second_container_about}>
            <div className={styles.second_container_about_link}>
              <span className={styles.second_container_span}>About Us</span>
              <h2 className={styles.second_container_h2}>We Complete Every Project With Extra Care As Customer Needs</h2>
            </div>
            <p className={styles.second_container_p}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus commodo viverra maecenas accumsan lacus vel.</p>
            <div className={styles.second_container_items}>
              <ul className={styles.second_container_list}>
                <li className={styles.second_container_list_item}>
                  Advanced caching
                </li>
                <li className={styles.second_container_list_item}>
                  Unlimited applications
                </li>
                <li className={styles.second_container_list_item}>
                  PHP 7 ready transfer
                </li>
                <li className={styles.second_container_list_item}>
                  PHP ready serves
                </li>
                <li className={styles.second_container_list_item}>
                  24/7 Free extra support
                </li>
                <li className={styles.second_container_list_item}>
                  Optimized stack
                </li>
              </ul>
            </div>
            <button className={styles.second_container_button}>Learn More</button>
          </div>
      </div> 

      <div className={styles.newsletter_container}>
        <h1 className={styles.newsletter_container_h1}>Sign Up To The Free Newsletter</h1>
        <div className={styles.newsletter_input_container}>
          <input className={styles.newsletter_input} placeholder=' Email'></input>
          <button className={styles.newsletter_input_button}>Subscribe</button>
        </div>
        <NEWS className={styles.newsletter_svg}></NEWS>
        <h2 className={styles.newsletter_container_h2}>Sign Up To The Free Newsletter</h2>
        <h2 className={styles.newsletter_container_h2}>501-288-2488</h2>
      </div>
    </div>

  );
}