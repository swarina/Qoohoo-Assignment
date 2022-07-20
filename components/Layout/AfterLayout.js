import React from 'react';

// Components
import Main from '../ProductDescription/Main/Main';

// Images
import Hero from '../../assets/images/hero.png';

const AfterLayout = () => {
  const mainName = 'BLACK CAMI CROP TOP';

  return (
    <div className="grid grid-cols-1 md:grid-cols-9 flex-1">
      <Main name={mainName} Hero={Hero} />
    </div>
  );
};

export default AfterLayout;
