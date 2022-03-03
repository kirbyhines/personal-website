/** @format */

import React from 'react';

function ImageCard({ image }) {
  return (
    <div className="w-[240px] h-[300px] rounded-xl shadow-md">
      <img
        className="w-[240px] h-[300px] rounded-xl object-center object-cover"
        src={image}
        alt=" "
      />
    </div>
  );
}

export default ImageCard;
