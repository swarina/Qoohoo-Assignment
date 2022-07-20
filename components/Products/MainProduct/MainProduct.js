import React, { useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';

// Components
import Contact from '../../Contact/Contact';
import OtherProducts from '../../Products/OtherProducts/OtherProducts';
import { Plus } from '../../Icons/Icons';

// Images
import Product1 from '../../../assets/images/product1.png';
// import Product2 from '../../../assets/images/product2.png';

// Other Products
const products = [
  {
    name: 'Blue Converse Shoes',
    price: '60',
    image: Product1,
  },
  {
    name: 'Blue Converse Shoes',
    price: '60',
    image: Product1,
  },
];

// Gsap
const gsap = global.gsap;

const FeaturedProduct = ({ name, Hero }) => {
  useEffect(() => {
    slideHero();
    slideTitle();

    return () => {};
  });

  const slideHero = () => {
    gsap.fromTo(
      '.hero',
      {
        opacity: 0,
        x: '-100%',
        duration: 1.0,
      },
      {
        opacity: 1,
        x: '0',
        duration: 1.0,
      }
    );
  };

  const slideTitle = () => {
    gsap.fromTo(
      '.hero-title',
      {
        opacity: 0,
        x: '100%',
        duration: 1.0,
      },
      {
        opacity: 1,
        x: '0',
        duration: 1.0,
      }
    );
  };

  return (
    <div className="col-span-6 grid grid-cols-1 md:grid-cols-8">
      <div className="md:col-span-2 order-2 md:order-1 relative z-40 flex flex-col justify-center hero-title">
        <h1 className="text-3xl md:text-6xl font-bold text-center md:text-left flex-1 md:flex md:items-center opacity-1">
          {name}
        </h1>

        <div className="-translate-y-10">
          <Contact />
        </div>
      </div>

      <div className="md:col-span-4 absolute order-1 md:order-2 hero bottom-0 left-1/4">
        <Image
          className="md:absolute md:bottom-0 z-10"
          src={Hero}
          alt={name}
          layout="fixed"
          height="800"
          width="500"
        />
        <span className="hidden md:block bg-red-600 opacity-10 h-[42rem] w-[42rem] absolute top-6 left-1/2 transform -translate-x-1/2 rounded-full" />
      </div>

      <Link href="/product">
        <div className=" absolute top-1/2 left-1/4">
          <button className="hidden md:block md:col-span-1 p-2 rounded-full border-2 border-gray-900 text-gray-900 transition-colors duration-300 hover:bg-gray-900 hover:text-white">
            <Plus className="w-10 h-10" />
          </button>
        </div>
      </Link>

      {/* Other Products  */}
      <div className="hidden md:col-span-2 md:order-3 md:flex md:flex-col md:justify-center gap-6 md:ml-80 translate-x-60 h-full">
        {products.map(({ id, name, image, price }) => (
          <OtherProducts key={id} name={name} img={image} price={price} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedProduct;
