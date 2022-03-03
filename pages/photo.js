/** @format */

import React, { useState } from 'react';
import ECommGallery from './Components/ECommGallery';
import LatestGallery from './Components/LatestGallery';
import Logo from './Components/Logo';
import MotionGallery from './Components/MotionGallery';
import Nav from './Components/Nav';
import NavLinks from './Components/NavLinks';
import Portraits from './Components/Portraits';
import ProductGallery from './Components/ProductGallery';

function Photo() {
  const [active, setActive] = useState('Latest');

  return (
    <div className=" flex flex-col justify-center items-center  mt-20">
      <div className="flex flex-row mb-3 font-semibold text-sm  whitespace-nowrap">
        <h2
          className="px-2 cursor-pointer hover:text-blue-500"
          onClick={() => setActive('Latest')}
        >
          Latest
        </h2>
        <h2
          className="px-2 cursor-pointer hover:text-blue-500"
          onClick={() => setActive('Product')}
        >
          Product
        </h2>
        <h2
          className="px-2 cursor-pointer hover:text-blue-500"
          onClick={() => setActive('E-Comm')}
        >
          E-Comm
        </h2>
        <h2
          className="px-2 cursor-pointer hover:text-blue-500"
          onClick={() => setActive('Portraits')}
        >
          Portraits
        </h2>
        <h2
          className="px-2 cursor-pointer hover:text-blue-500"
          onClick={() => setActive('Motion')}
        >
          Motion
        </h2>
      </div>

      {active === 'Latest' && <LatestGallery />}
      {active === 'Product' && <ProductGallery />}
      {active === 'E-Comm' && <ECommGallery />}
      {active === 'Portraits' && <Portraits />}
      {active === 'Motion' && <MotionGallery />}

      <Logo />
      <Nav />
      <NavLinks />
    </div>
  );
}

export default Photo;
