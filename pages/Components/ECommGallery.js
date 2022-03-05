/** @format */

import React from 'react';
import ImageCard from './ImageCard';

function ECommGallery() {
  return (
    <div className=" flex flex-col items-center  overflow-x-auto scrollbar-hide  w-screen justify-center">
      <div className="flex gap-5 w-max px-5 mx-auto mb-4 lg:grid lg:grid-cols-5 ">
        <ImageCard image="/Photos/ecomm/83835_01_main.jpg" />
        <ImageCard image="/Photos/ecomm/88928_01_main.jpg" />
        <ImageCard image="/Photos/ecomm/148127_01_main.jpg" />
        <ImageCard image="/Photos/ecomm/115564_01_main.jpg" />
        <ImageCard image="/Photos/ecomm/99454_01_main.jpg" />
        <ImageCard image="/Photos/ecomm/Commers-3.jpg" />
        <ImageCard image="/Photos/ecomm/Zayas-037-Edit.jpg" />
        <ImageCard image="/Photos/ecomm/Breakfast+Club.jpg" />
        <ImageCard image="/Photos/ecomm/Guitar.jpg" />
        <ImageCard image="/Photos/ecomm/White_c0b196ff-9042-4331-b873-0a2f398e0135_2000x.png" />
      </div>
    </div>
  );
}

export default ECommGallery;
