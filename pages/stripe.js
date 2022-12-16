import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import styles from './api/PreviewPage.module.css'
import Head from "next/head";
import Navbar from "./profile/components/newNav";
import {signIn, signOut, useSession, getSession} from 'next-auth/react';

// Make sure to call `loadStripe` outside of a component’s render to avoid
// recreating the `Stripe` object on every render.
const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
);

export default function PreviewPage() {
  const { data: session, status} = useSession();

  React.useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);
    if (query.get('success')) {
      console.log('Order placed! You will receive an email confirmation.');
    };

    if (query.get('canceled')) {
      console.log(`Order canceled -- continue to shop around and checkout when you're ready.`);
    };
  }, []);

  return (
    //<form action="/api/checkout_sessions" method="POST">
      <div className={styles.main_container}>
        <Head>
        <title>Atlas Tattoo - Credits</title>
        </Head>
        {session && (
          <>
{/*           <div className={styles.buy_header}>
            <h1 className={styles.main_title}>Experience the future of art with AI-generated wall decor from Panda Prints</h1>
            <h1 className={styles.main_title}>Bring your walls to life with AI-generated art!</h1>
            <h1 className={styles.main_title}>Experience the future of home decor with our AI-powered wall art</h1>
            <button className={styles.create}>Create</button>
          </div> */}
          <section className={styles.section_stripe}>
            <form action="/api/prices/oneX" method="POST">
              <div className={styles.display_box}>
                  <div className={styles.user_header}>
                    <h3 className={styles.section_header}>1 Credit</h3>
                  </div>
                  <p className={styles.user_info_sub}>$5.00</p>
                  <button className={styles.btn_neu} type="submit" role="link">
                    Buy
                  </button>
                </div>
              </form>
              <form action="/api/prices/fiveX" method="POST">
                <div className={styles.display_box}>
                  <div className={styles.user_header}>
                    <h3 className={styles.section_header}>5 Credits</h3>
                  </div>
                  <p className={styles.user_info_sub}>$24.00</p>
                  <button className={styles.btn_neu} type="submit" role="link">
                    Buy
                  </button>
                </div>
              </form>
              <form action="/api/prices/tenX" method="POST">
                <div className={styles.display_box}>
                  <div className={styles.user_header}>
                    <h3 className={styles.section_header}>10 Credits</h3>
                  </div>
                  <p className={styles.user_info_sub}>$45.00</p>
                  <button className={styles.btn_neu} type="submit" role="link">
                    Buy
                  </button>
                </div>
              </form>
              <form action="/api/prices/twenty-fiveX" method="POST">
                <div className={styles.display_box}>
                  <div className={styles.user_header}>
                    <h3 className={styles.section_header}>25 Credits</h3>
                  </div>
                  <p className={styles.user_info_sub}>$75.00</p>
                  <button className={styles.btn_neu} type="submit" role="link">
                    Buy
                  </button>
                </div>
              </form>
              <form action="/api/prices/fiftyX" method="POST">
                <div className={styles.display_box}>
                  <div className={styles.user_header}>
                    <h3 className={styles.section_header}>50 Credits</h3>
                  </div>
                  <p className={styles.user_info_sub}>$200.00</p>
                  <button className={styles.btn_neu} type="submit" role="link">
                    Buy
                  </button>
                </div>
              </form>
              <form action="/api/prices/hundredX" method="POST">
                <div className={styles.display_box}>
                  <div className={styles.user_header}>
                    <h3 className={styles.section_header}>100 Credits</h3>
                  </div>
                  <p className={styles.user_info_sub}>$300.00</p>
                  <button className={styles.btn_neu} type="submit" role="link">
                    Buy
                  </button>
                </div>
              </form>
          </section>
          </>)}
        {!session && (
          <>
            <main className={styles.main}>
            <button className={styles.btn_neu} onClick={signIn}>Sign In</button>
            </main>
          </>
        )}
        <Navbar />
      </div>
    //</form>
  );
}