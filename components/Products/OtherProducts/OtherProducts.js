import React, { useEffect } from 'react';
import Image from 'next/image';

// Gsap
const gsap = global.gsap;

const OtherProducts = ({ name, img, price }) => {
  useEffect(() => {
    slideCard();

    return () => {};
  });

  const slideCard = () => {
    gsap.fromTo(
      '.product-card',
      {
        opacity: 0,
        y: '100%',
        duration: 1.0,
      },
      {
        opacity: 1,
        y: '0',
        duration: 1.0,
      }
    );
  };
  return (
    <div className="bg-white rounded-3xl shadow-2xl relative h-32 w-48 p-4 overflow-hidden flex flex-col opacity-1 product-card">
      <h3 className="text-lg">{name}</h3>
      <h3 className="text-lg font-medium mt-auto">$ {price}</h3>
      <Image
        className="absolute -bottom-8 -right-8 w-40"
        src={img}
        alt={name}
      />
    </div>
  );
};

export default OtherProducts;
