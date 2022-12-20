import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "./SignupPage.module.css";
import axios from "axios";
import OUT from '../gallery/images/sign_out.svg';
import CHECK from '../gallery/images/check.svg';
import GOOGLE from '../gallery/images/Google.svg';
import FACEBOOK from '../gallery/images/Facebook.svg';
import { getProviders, signIn, signOut, getSession, useSession } from "next-auth/react";

export default function Home() {
  const { data: session, status} = useSession();
  const [firstName, setfirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [email, setEmail] = useState("");
  const [passWord, setpassWord] = useState("");
  const [CpassWord, setCpassWord] = useState("");
  const [passError, setpassError] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [success, setSuccess] = useState(false);
  const [emailRes, setEmailRes] = useState([]);
  const [blankBlank, setblankBlank] = useState(false);

  const addUser = async () => {
    const name = (firstName + ' ' + lastName);
    const updateData = await axios.post('/api/credentials/signup',{
      name: name,
      email: email,
      password: passWord
    });
    setSuccess(true)
  }

  const loadIt = async () => {

    const updateData = await axios.post('/api/credentials/checkEmail',{
      email: email
    });

    if (passWord != CpassWord) {
      setpassError(true);
      setEmailError(false);
      setblankBlank(false);
    } else if (passWord == "") {
      setblankBlank(true);
      setpassError(false);
      setEmailError(false);
    } else if (CpassWord == "" ) {
      setblankBlank(true);
      setpassError(false);
      setEmailError(false);
    } else if (!updateData.data) {
      addUser();
      setpassError(false);
      setEmailError(false);
      setblankBlank(false);
    } else if (updateData.data.email == email && !updateData.data.password) {
      addUser();
      setpassError(false);
      setEmailError(false);
      setblankBlank(false);
    } else if (updateData.data.email == email && updateData.data.password) {
      setEmailError(true);
      setpassError(false);
      setblankBlank(false);
    }
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Dev</title>
      </Head>
      {!session && (
      <main className={styles.main}>
        <h1 className={styles.title}><span className={styles.titleColor}>Signup</span></h1>
        <p className={styles.description}>
          <input
            className={styles.input_style}
            id="firstname"
            type="text"
            placeholder="First Name"
            onChange={(e) => setfirstName(e.target.value)}
          />
        </p>
        <p className={styles.description}>
          <input
            className={styles.input_style}
            id="lastname"
            type="text"
            placeholder="Last Name"
            onChange={(e) => setlastName(e.target.value)}
          />
        </p>
        <p className={styles.description}>
          <input
            id="email"
            className={styles.input_style}
            type="text"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </p>
        <p className={styles.description}>
          <input
            id="password"
            className={styles.input_style}
            type="password"
            placeholder="Password"
            onChange={(e) => setpassWord(e.target.value)}
          />
        </p>
        <p className={styles.description}>
          <input
            id="password_confirm"
            className={styles.input_style}
            type="password"
            placeholder="Confirm Password"
            onChange={(e) => setCpassWord(e.target.value)}
          />
        </p>
        <div className={styles.third_party}>
          <button className={styles.btn_neu_third} onClick={() => signIn(providers.google.id)}>
              <GOOGLE className={styles.google}></GOOGLE>
          </button>

          <button className={styles.btn_neu_third} onClick={() => signIn(providers.facebook.id)}>
                <FACEBOOK className={styles.facebook}></FACEBOOK>
          </button>
        </div>
        {!success && (
          <button className={styles.btn_neu} onClick={() => {loadIt()}}>
            Submit
          </button>
        )}
        {success && (
          <button className={styles.btn_neu} onClick={() => signIn()}>
          <CHECK></CHECK>Login</button>
        )}
        {passError && (
        <div className={styles.error}>
          <a>The passwords you entered do not match</a>
        </div>
        )}
        {blankBlank && (
        <div className={styles.error}>
          <a>Please fill out all fields</a>
        </div>
        )}
        {emailError && (
          <div className={styles.existing}>
            <div className={styles.error}>
              <a>A user with this email already exists</a>
            </div>
            <Link href={signIn()}>
              <a className={styles.nav_login}>
                Login
              </a>
            </Link>
          </div>
        )}
      </main>
      )}
      {session && (
        <>
        <OUT className={styles.check}></OUT>
        <h1 className={styles.title}><span className={styles.titleColor}>Signout</span></h1>
        <br />
        <a className={styles.signOutText}>Please sign sut before attemting to sign up</a>
        <a className={styles.signOutName}>{session.user.name}?</a>
            <button className={styles.btn_neu_out} onClick={() => signOut(session)}>
                Sign out
            </button>
      </>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const providers = await getProviders(context)
  return {
    props: { providers },
  }
}