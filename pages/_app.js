import React from "react";
import Head from "next/head";
import "../styles/globals.css";

function MyApp({ Component, pageProps }) {
  return (
    <React.Fragment>
      <Head>
        <title>Rhymer</title>
        <meta name="description" content="Find a rhyme for any word!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </React.Fragment>
  );
}

export default MyApp;
