/** @format */

import React from 'react';

function MotionCard({ video }) {
  return (
    <div className="w-[70vw] h-[400px] md:h-[500px] lg:h-[600px]">
      <iframe
        className="w-[70vw] h-[400px] md:h-[500px] lg:h-[600px] object-fill rounded-xl shadow-md"
        src={video}
        title="YouTube video player"
      ></iframe>
    </div>
  );
}

export default MotionCard;
