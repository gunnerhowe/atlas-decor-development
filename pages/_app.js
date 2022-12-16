import Head from 'next/head';
import Navbar from "./components/Navbar";
import styles from '../styles/globals.css';
import { SessionProvider } from 'next-auth/react';
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  const showNav = router.pathname ==='/landing' ? false: true;

  
  return (
    <SessionProvider session={pageProps.session}>
        <>
        {showNav && 
          <Navbar />
        }
          <Component {...pageProps} />
        </>
    </SessionProvider>
  );
}

export default MyApp;