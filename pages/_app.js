import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import '../styles/globals.css';

function MyApp({ Component, pageProps }) {
  const router = useRouter();
  return (
    <>
      {/* Head section */}
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />

        {/* Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Jockey+One&family=Londrina+Outline&display=swap"
          rel="stylesheet"
        />

        {/* gsap */}
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.10.4/gsap.min.js"
          defer
        ></script>
      </Head>
      <Component key={router.pathname} {...pageProps} />
    </>
  );
}

export default MyApp;
