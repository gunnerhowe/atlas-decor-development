import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "./SignInPage.module.css";
import SVG from '/pages/gallery/images/back_arrow.svg'
import Image from 'next/image'
import GOOGLE from './gallery/images/Google.svg';
import FACEBOOK from './gallery/images/Facebook.svg';
import TWITTER from './gallery/images/Twitter.svg';
import CHECK from './gallery/images/check.svg';
import { getProviders, signIn, getSession, useSession } from "next-auth/react";

export default function SignInPage({ providers }) {
  const { data: session, status} = useSession();
  const [emailInput, setemailInput] = useState("");
  const [passwordInput, setpasswordInput] = useState("");
  const [signError, setsignError] = useState(false);


  const trySign = async () => {
    const attempt = await signIn(providers.credentials.id, {email: emailInput, password: passwordInput, redirect: false})
    .then(({ok, error}) => {
      if (ok) {
        setsignError(false)
      } else {
        setsignError(true)
      }
    });
  }


  const addFree = async () => {
    const name = (session.user.name);
    const updateData = await axios.post('/api/credentials/addFree',{
      email: session.user.email
    });
  }

  const addUser = async () => {
    const name = (session.user.name);
    const updateData = await axios.post('/api/credentials/signup',{
      name: name,
      email: session.user.email
    });
  }

  const checkEmail = async () => {
    const updateData = await axios.post('/api/credentials/checkEmail',{
      email: session.user.email
    });

    if (!updateData.data) {
      addUser();
      addFree();
    } else {
      return;
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Dev</title>
      </Head>
      <main className={styles.main}>
        {!session && (
          <>
            <h1 className={styles.title}><span className={styles.titleColor}>Sign In</span></h1>

            <button className={styles.btn_neu} onClick={() => signIn(providers.google.id)}>
                <GOOGLE className={styles.google}></GOOGLE>
            </button>

            <button className={styles.btn_neu} onClick={() => signIn(providers.facebook.id)}>
                  <FACEBOOK className={styles.facebook}></FACEBOOK>
            </button>

{/*             <button className={styles.btn_neu} onClick={() => signIn(providers.twitter.id)}>
              <TWITTER className={styles.twitter}></TWITTER>
            </button> */}
            <hr className={styles.line}></hr>

            <section className={styles.auth}>
              <div className={styles.h4_header}>
                <h4>Email</h4>
              </div>
                <div className={styles.input_section}>
                  <input 
                    type='email' 
                    id='email' 
                    onChange={(e) => {setemailInput(e.target.value)}}
                    className={styles.input_field}
                    />
                </div>

                <div className={styles.h4_header}>
                  <h4>Password</h4>
                </div>
                <div className={styles.input_section}>
                  <input
                    type='password'
                    id='password'
                    onChange={(e) => {setpasswordInput(e.target.value)}}
                    className={styles.input_field}
                  />
                </div>

              <div className={styles.actions}>
                <button className={styles.btn_neu} onClick={() => trySign()}>
                  <a className={styles.login_text}>Login</a>
                </button>
              </div>

            </section>
            <div className={styles.options}>
              <Link href='/signup'>
                <a className={styles.signup}>Sign Up</a>
              </Link>
              <Link href='/forgotPass'>
                <a className={styles.signup}>Reset Password</a>
              </Link>
            </div>
          </>
        )}
        {session && (
          <>
            <CHECK className={styles.check}></CHECK>
            <h1 className={styles.title}><span className={styles.titleColor}>You are signed in as:</span></h1>
            <br />
            <a className={styles.signName}>{session.user.name}</a>
          </>
        )}
        {signError && (
          <>
            <div className={styles.error}>
              <a>The email or password entered is incorrect</a>
            </div>
          </>
        )}
      </main>
    </div>
  );
}

/* export default function SignIn({ providers }) {
  return (
    <>
      {Object.values(providers).map((provider) => (
        <div key={provider.name}>
          <button onClick={() => signIn(provider.id)}>
            Sign in with {provider.name}
          </button>
          <a>{provider.id}</a>
          <a>{provider.name}</a>
        </div>
      ))}
    </>
  )
} */

export async function getServerSideProps(context) {
  const providers = await getProviders(context)
  return {
    props: { providers },
  }
}