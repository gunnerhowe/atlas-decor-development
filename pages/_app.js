import Head from 'next/head';

import '../styles/globals.css';
//import Layout from './Layout';

function MyApp({ Component, pageProps }) {
  return (
    <Component {...pageProps} />
  );
}

export default MyApp;