import React from 'react';

// Components
import Navbar from '../components/Navbar/Navbar';
import Layout from '../components/Layout/Layout';

export default function Home() {
  return (
    <main className="min-h-screen max-w-screen-2xl w-11/12 mx-auto px-2 flex flex-col">
      <Navbar />
      <Layout />
    </main>
  );
}
