import React from 'react';
import Image from 'next/image';

import { Right, Up } from '../../Icons/Icons';

const SideProduct = ({ name, Side }) => {
  return (
    <div className="hidden md:block md:col-span-2 flex">
      <div className=" absolute top-1/2 left-3/4 -translate-x-16">
        <button className="hidden md:block md:col-span-1 self-center justify-self-center p-2 rounded-full border-2 border-red-400 text-red-400 transition-colors duration-300 hover:bg-red-400 hover:text-white">
          <Right className="w-10 h-10" />
        </button>
      </div>
      <div className="absolute top-1/4 right-0 transform -translate-y-12 h-7/12 text-right">
        <Image
          className="h-full rounded-md"
          src={Side}
          alt={name}
          height="650rem"
          width="350rem"
        />
        <h4
          className="text-7xl font-semibold transform rotate-90 stroked-text -translate-x-40 -translate-y-80 collection"
          id="sideTitle"
        >
          SUMMER 2022
        </h4>
        <h5 className="flex translate-x-6 font-medium">
          SIZE GUIDE &nbsp; <Up className="w-4" />
        </h5>
      </div>
    </div>
  );
};

export default SideProduct;
