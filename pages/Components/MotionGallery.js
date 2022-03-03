/** @format */

import React from 'react';
import MotionCard from './MotionCard';

function MotionGallery() {
  return (
    <div className="flex flex-col justify-center items-center overflow-x-auto scrollbar-hide mx-5 h-[80vh] w-screen">
      <div className="grid grid-rows-1 grid-cols-4 gap-5 w-max px-5 lg:px-20  mx-auto mb-4">
        <MotionCard video="https://www.youtube.com/embed/zEtr3eQs-H4" />
        <MotionCard video="https://www.youtube.com/embed/CRoskAZXspE" />
        <MotionCard video="https://www.youtube.com/embed/34ZfhadWUzs" />
        <MotionCard video="https://www.youtube.com/embed/_J_7l3FdCY0" />
      </div>
    </div>
  );
}

export default MotionGallery;
