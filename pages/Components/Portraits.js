/** @format */

import React from 'react';
import ImageCard from './ImageCard';

function Portraits() {
  return (
    <div className="block flex-col items-center  overflow-x-auto scrollbar-hide mx-5  w-screen">
      <div className=" grid grid-cols-5 gap-5 w-max px-5 mx-auto mb-4">
        <ImageCard image="./Photos/portraits/1.jpg" />
        <ImageCard image="./Photos/portraits/2.jpg" />
        <ImageCard image="./Photos/portraits/3.jpg" />
        <ImageCard image="./Photos/portraits/4.jpg" />
        <ImageCard image="./Photos/portraits/5.jpg" />
        <ImageCard image="./Photos/portraits/6.jpg" />
        <ImageCard image="./Photos/portraits/7.jpg" />
        <ImageCard image="./Photos/portraits/Firecracker2051.JPEG" />
        <ImageCard image="./Photos/portraits/9.jpg" />
        <ImageCard image="./Photos/portraits/10.jpg" />
      </div>
    </div>
  );
}

export default Portraits;
