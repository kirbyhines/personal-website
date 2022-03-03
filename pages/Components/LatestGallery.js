/** @format */

import React from 'react';
import ImageCard from './ImageCard';

function Gallery() {
  return (
    <div className="block flex-col items-center  overflow-x-auto scrollbar-hide mx-5  w-screen">
      <div className=" grid grid-cols-5 gap-5 w-max px-5 mx-auto mb-4">
        <ImageCard image="/Photos/latest/1.jpg" />
        <ImageCard image="/Photos/latest/2.jpg" />
        <ImageCard image="/Photos/latest/3.jpg" />
        <ImageCard image="/Photos/latest/4.jpg" />
        <ImageCard image="/Photos/latest/5.jpg" />
        <ImageCard image="/Photos/latest/6.jpg" />
        <ImageCard image="/Photos/latest/7.jpg" />
        <ImageCard image="/Photos/latest/8.jpg" />
        <ImageCard image="/Photos/latest/9.jpg" />
        <ImageCard image="/Photos/latest/10.jpg" />
      </div>
    </div>
  );
}

export default Gallery;
