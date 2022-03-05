/** @format */

import React from 'react';
import ImageCard from './ImageCard';

function ProductGallery() {
  return (
    <div className=" flex flex-col items-center  overflow-x-auto scrollbar-hide  w-screen justify-center">
      <div className="flex gap-5 w-max px-5 mx-auto mb-4 lg:grid lg:grid-cols-5 ">
        <ImageCard image="/Photos/product/0629_AnthonyThomas_Set50642.jpg" />
        <ImageCard image="/Photos/product/2017FallHoliday-238-Edit.jpg" />
        <ImageCard image="/Photos/product/Base-Edit.jpg" />
        <ImageCard image="/Photos/product/headphones.jpg" />
        <ImageCard image="/Photos/product/Color Week5394.JPEG" />
        <ImageCard image="/Photos/product/Watch-027.jpg" />
        <ImageCard image="/Photos/product/Color Week5546.JPEG" />
        <ImageCard image="/Photos/product/boot.jpg" />
        <ImageCard image="/Photos/product/Test+Week4641.jpg" />
        <ImageCard image="/Photos/product/12092021_OfficeShoot_247.jpg" />
      </div>
    </div>
  );
}

export default ProductGallery;
