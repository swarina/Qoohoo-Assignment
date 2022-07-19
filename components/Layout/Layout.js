import React from 'react';

// Components
import MainProduct from '../Products/MainProduct/MainProduct';
import SideProduct from '../Products/SideProduct/SideProduct';

// Images
import Hero from '../../assets/images/hero.png';
import Side from '../../assets/images/side.jpg';

const Layout = () => {
  const mainName = 'BLACK CAMI CROP TOP';
  const sideName = 'SUMMER FLORAL DRESS';

  return (
    <div className="grid grid-cols-1 md:grid-cols-9 flex-1">
      <MainProduct name={mainName} Hero={Hero} />
      <SideProduct name={sideName} Side={Side} />
    </div>
  );
};

export default Layout;
