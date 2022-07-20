import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Other from '../../../assets/images/other1.png';

// Gsap
const gsap = global.gsap;

const Main = ({ name, Hero }) => {
  // States
  const [hero, setHero] = useState(Hero);
  const [selectedSize, setSelectedSize] = useState('S');
  const sizes = ['S', 'M', 'L'];
  const otherView = [
    {
      id: 1,
      img: Other,
    },
    {
      id: 2,
      img: Hero,
    },
    {
      id: 3,
      img: Other,
    },
  ];

  useEffect(() => {
    slideHero();
    slideTitle();
    slideOtherView();

    return () => {};
  }, []);

  const slideHero = () => {
    gsap.fromTo(
      '.hero',
      {
        opacity: 0,
        x: '0',
        duration: 1.0,
      },
      {
        opacity: 1,
        x: '110%',
        duration: 1.0,
      }
    );
  };

  const slideTitle = () => {
    gsap.fromTo(
      '.hero-title',
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

  const slideOtherView = () => {
    gsap.fromTo(
      '.other-view',
      {
        opacity: 0,
        x: '100%',
        duration: 1.5,
      },
      {
        opacity: 1,
        x: '0',
        duration: 1.5,
      }
    );
  };

  const slideHeroChange = () => {
    gsap.fromTo(
      '.hero',
      {
        opacity: 0,
        x: '100%',
        duration: 1.0,
      },
      {
        opacity: 1,
        x: '90%',
        duration: 1.0,
      }
    );
  };

  const handleViewChange = (id) => {
    setHero(otherView[id - 1].img);
    slideHeroChange();
  };

  const handleChangeSize = (ev, size) => {
    setSelectedSize(size);
  };

  return (
    <div className="col-span-6 grid grid-cols-1 md:grid-cols-8">
      <div className="md:col-span-2 relative flex flex-col justify-center gap-8">
        <h1 className="text-6xl font-bold text-center md:text-left md:flex md:items-center opacity-1 hero-title">
          {name}
        </h1>
        <h4 className="text-5xl font-medium text-center md:text-left md:flex md:items-center hero-title">
          $ 67
        </h4>
        <p className="text-lg font-extralight text-center md:text-left md:flex md:items-center hero-title">
          Round neck women black camisole crop top. Cotton made. Light-weight
          material.
        </p>

        {/* Add Button */}
        <button className="bg-red-600 text-white py-2 w-fullm d:h-24 md:w-24 text-lg flex items-center justify-center rounded-full transform scale-100 transition-transform duration-300 hover:scale-125 hero-title">
          Add
        </button>

        {/* Size */}
        <div className="other-view">
          <h4 className="text-md font-bold mb-2">SELECT SIZE</h4>
          <div className="flex items-center gap-2">
            {sizes.map((size) => (
              <span
                className={`h-12 w-12 flex items-center justify-center border border-slate-600 rounded-full ${
                  selectedSize === size
                    ? 'border-4 border-slate-800'
                    : 'border-opacity-40'
                }`}
                onClick={(e) => handleChangeSize(e, size)}
                key={size}
              >
                {size}
              </span>
            ))}
            <span className="ml-4 text-md font-bold text-gray-600">
              SIZE GUIDE
            </span>
          </div>
        </div>

        {/* Other Views */}
        <div className="flex justify-center md:justify-start gap-4 h-60 w-80 other-view">
          {otherView.map(({ id, img }) => (
            <Image
              onClick={() => handleViewChange(id)}
              className="w-32 h-40 object-cover transition-transform duration-500 transform origin-top scale-75 hover:scale-90 md:scale-100 md:hover:scale-125 rounded-md"
              key={id}
              src={img}
            />
          ))}
        </div>
      </div>

      {/* Hero */}
      <div className="md:col-span-4 absolute order-1 md:order-2 hero bottom-0 left-1/4">
        <Image
          className="md:absolute md:bottom-0 z-10"
          src={hero}
          alt={name}
          layout="fixed"
          height="800"
          width="500"
        />
        <span className="hidden md:block bg-red-600 opacity-10 h-[42rem] w-[42rem] absolute top-6 left-1/2 transform -translate-x-1/2 rounded-full" />
      </div>
    </div>
  );
};

export default Main;
