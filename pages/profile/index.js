import Head from "next/head";
import { useState } from "react";
import Link from 'next/link';
import styles from "../profile/profilePage.module.css";
import Image from 'next/image';
import {signIn, signOut, useSession, getSession} from 'next-auth/react';
import Navbar from "../profile/components/newNav";
import clientPromise from "/lib/mongodb";
import CHECK from '../gallery/images/check.svg';

import PACKAGE from '../gallery/images/package.svg';
import TRUCK from '../gallery/images/truck.svg';
import USER from '../gallery/images/user.svg';
import TRANSFER from '../gallery/images/transfer.svg';
import DOLLAR from '../gallery/images/dollar.svg';
import INFORMATION from '../gallery/images/information.svg';


export default function ProfilePage( { credits, date } ) {
  const { data: session, status} = useSession();
  const [curCred, setcurCred] = useState(credits[0]);
  const [query, setQuery] = useState("");
  const [deletee, setDeletee] = useState(false);
  const [transferComplete, settransferComplete] = useState(false);
  const [deleteComplete, setdeleteComplete] = useState(false);

  function showCred() {
    if (Number(credits) != []) {
      const numCred = curCred.credits;
      return numCred;
    } else {
      const numCred = 0;
      return numCred;
    };
  }


  const transfer = async (credits) => {
      const newData = await axios.post('/api/dalle/transfer',{
          email: session.user.email,
          newEmail: query,
          credits: credits
      });
      const res = await toString(newData);
      settransferComplete(true);
    };


    const deleteIt = async () => {
      const newData = await axios.post('/api/dalle/delete',{
          email: session.user.email
      });
      const res = await toString(newData);
      setdeleteComplete(true);
    };


    const getCredits = async (seeEmail) => {
      let newData = await fetch(`/api/dalle/getCredits?email=${seeEmail}`)
      let newJson = await newData.json();
      transfer(jsonData.credits)
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Atlas Tattoo Development</title>
      </Head>
      <main className={styles.main}>
      {!session && (
          <>
            <button className={styles.btn_neu} onClick={signIn}>Sign In</button>
          </>
        )}
      {session && (
          <>
          <div className={styles.settings}>
            <div className={styles.display_box}>
              <div className={styles.user_header}>
                <USER className={styles.dollar_svg}></USER>
                <h3 className={styles.section_header}>User Information</h3>
              </div>
              <a className={styles.user_info}>Name: {session.user.name}</a>
              <a className={styles.user_info}>Email: {session.user.email}</a>
              <a className={styles.user_info}>Member Since: {date[0].date}</a>
            </div>
            <div className={styles.display_box}>
              <div className={styles.user_header}>
                <DOLLAR className={styles.dollar_svg}></DOLLAR>
                <h3 className={styles.section_header}>Credits</h3>
              </div>
              <Link href='/stripe'>
                <button className={styles.btn_neu_creds}>
                  <br />
                  <a>Current Credits:</a>
                  <br />
                  <a>{showCred()}</a>
                  <br />
                  <br />
                </button>
              </Link>
            </div>
            <div className={styles.display_box}>
              <div className={styles.user_header}>
                <PACKAGE className={styles.dollar_svg}></PACKAGE>
                <h3 className={styles.section_header}>Orders & Tracking</h3>
              </div>
                <a className={styles.user_info}>Order: 9400111699004539549</a>
                <a className={styles.user_info}>Carrier: USPS</a>
                <a className={styles.user_info}>Estimated Delivery: 2022-12-25</a>
                <a className={styles.user_info}>Track: http://example.com/9400111699004539549</a>
            </div>
            <div className={styles.display_box}>
              <div className={styles.user_header}>
                  <TRANSFER className={styles.dollar_svg}></TRANSFER>
                  <h3 className={styles.section_header}>Transfer</h3>
              </div>
              <a className={styles.transfer_text}>Transfer Credits to another account associated with a different Email</a>
              <input
                id="query"
                type="text"
                value={query}
                onChange={(e) => {setQuery(e.target.value)}}
                placeholder="johnsmith@gmail.com"
                className={styles.input_field}
              />
              {!transferComplete && (
              <button className={styles.btn_neu_transfer} onClick={() => getCredits()}>
                Transfer
              </button>
              )}
              {transferComplete && (
              <button className={styles.btn_neu} onClick={() => settransferComplete(false)}>
                <CHECK></CHECK>
                Completed
              </button>
              )}
            </div>
            {deletee && (
              <div className={styles.display_box}>
                <div className={styles.confirm_delete}>
                  <h2>Are you sure you want to delete your profile?</h2>
                  <br />
                  <h3>Deleting your profile will remove the below items:</h3>
                  <br />
                  <ul className={styles.delete_list}>
                    <li>User Information</li>
                    <li>Generated Tattoos</li>
                    <li>Any Remaining Credits</li>
                  </ul>
                  <br />
                  <div className={styles.delete_options_container}>
                    <button className={styles.delete_options} onClick={() => deleteIt()}>Yes</button>
                    <button className={styles.delete_options} onClick={() => setDeletee(false)}>No</button>
                  </div>
                </div>
              </div>
            )}
          {!deletee && (
            <div className={styles.display_box}>
              {!deleteComplete && (
              <button className={styles.btn_neu_Delete} onClick={() => setDeletee(true)}>
                Delete Profile
              </button>
              )}
              {deleteComplete && (
              <button className={styles.btn_neu_Delete} onClick={() => setdeleteComplete(false)}>
                <CHECK></CHECK>
                Completed
              </button>
              )}
            </div>
            )}
        </div>
      </>
        )}
      </main>
      <Navbar/>
    </div>
  );
}


export async function getServerSideProps({req}) {
  const session = await getSession({ req });
  try {
      //Connecting to the DB
      const client = await clientPromise;

      //Specificially saying which DB to connect to
      const db = client.db("Atlas_Interior");

      //Example of retrieving a document from the db
      const credits = await db
          .collection("credits")
          .find({email: session.user.email})
          .toArray()
          //console.log(credits)
          //res.json(credits)

      const date = await db
          .collection("users")
          .find({email: session.user.email})
          .toArray()
          
      //returning the JSON strings so that they can be added to the UI in the above function
      return {
          //props: { credits: JSON.parse(JSON.stringify(credits)) },
          props: {credits: JSON.parse(JSON.stringify(credits)), date: JSON.parse(JSON.stringify(date))}
      };

  //Error catcher
  } catch (e) {
      console.error(e);
  }
}
