import React from 'react';
import Hero from '../../assets/images/hero.png';

// Components
import MainProduct from '../Products/MainProduct/MainProduct';

const Layout = () => {
  const name = 'BLACK CAMI CROP TOP';
  return (
    <div className="grid grid-cols-1 md:grid-cols-9 flex-1">
      <MainProduct name={name} Hero={Hero} />
      {/* <button className="hidden md:block md:col-span-1 self-center justify-self-center p-2 rounded-full border-2 border-red-400 text-red-400 transition-colors duration-300 hover:bg-red-400 hover:text-white">
        <ChevronRightIcon className="w-8" />
      </button> */}
    </div>
  );
};

export default Layout;
