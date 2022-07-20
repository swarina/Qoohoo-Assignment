import React from 'react';

// Components
import Navbar from '../components/Navbar/Navbar';
import AfterLayout from '../components/Layout/AfterLayout';

const product = () => {
  return (
    <main className="min-h-screen max-w-screen-2xl w-11/12 mx-auto px-2 flex flex-col">
      <Navbar />
      <AfterLayout />
    </main>
  );
};

export default product;
