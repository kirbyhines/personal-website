/** @format */

import React from 'react';
import Image from 'next/image';

function ImageCard({ image }) {
  return (
    <div className="w-[240px] h-[300px] rounded-xl shadow-md">
      <Image
        width={240}
        height={300}
        className="rounded-xl object-center object-cover"
        src={image}
        alt=" "
      />
    </div>
  );
}

export default ImageCard;
