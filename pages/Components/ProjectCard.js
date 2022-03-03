/** @format */

import React from 'react';

function Project({ image, description, liveCode, gitCode, title }) {
  return (
    <div>
      <div className="h-[400px] w-[250px] lg:h-[300px] lg:w-[400px] xl:w-[450px] bg-gray-200 mx-5 rounded-xl relative shadow-lg lg:flex">
        <img
          src={image}
          alt=" "
          className=" object-cover object-top  h-1/2 w-full lg:w-1/2 lg:h-[80%] rounded-xl "
        />

        <div className="h-2/5 w-[90*] mx-auto pt-3 px-3 lg:h-[80%]">
          <h1 className=" font-bold text-lg text-center pb-2">{title}</h1>
          <p className=" lg:leading-loose">{description}</p>
        </div>

        <div className=" absolute bottom-2 w-full flex justify-around items-center">
          <a
            href={liveCode}
            className="bg-gray-800 text-white px-3 py-1 rounded-md cursor-pointer "
          >
            Live Demo
          </a>
          <a
            href={gitCode}
            className="bg-gray-800 text-white px-3 py-1 rounded-md cursor-pointer"
          >
            GitHub
          </a>
        </div>
      </div>
    </div>
  );
}

export default Project;
