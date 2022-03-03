/** @format */

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
  faInstagram,
  faLinkedin,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';

import {
  CameraIcon,
  ClipboardCheckIcon,
  DesktopComputerIcon,
  MailIcon,
} from '@heroicons/react/outline';

import { useState } from 'react';
import { useRouter } from 'next/router';
import Nav from './Components/Nav';
import NavLinks from './Components/NavLinks';
import Logo from './Components/Logo';

function App() {
  const router = useRouter();

  return (
    <div className="  h-screen flex flex-col items-center  w-screen my-auto md:flex-row">
      <Logo />
      <div className="flex flex-col justify-center items-center md:mx-auto md:w-1/2">
        <h1 className="mt-24 tracking-wide text-5xl font-extralight mb-5">
          Hello I&apos;m Kirby
        </h1>
        <p className=" mx-3  tracking-widest font-extralight mb-5 text-center">
          Commercial Photographer turned Front End Developer
        </p>
        <h2 className="font-light text-xl mb-5 mx-2 tracking-wide">
          Which portfolio would you like to see?
        </h2>

        {/* buttons */}
        <div className="w-2/3 flex flex-row justify-between mb-10">
          <button
            onClick={() => router.push('/photo')}
            className=" bg-gray-800 text-white px-6 py-3 rounded-md cursor-pointer"
          >
            Photo
          </button>
          <button
            onClick={() => router.push('/webdev')}
            className=" bg-gray-800 text-white px-6 py-3 rounded-md cursor-pointer"
          >
            Web Dev
          </button>
        </div>
      </div>

      {/* image */}

      <div className=" mx-auto justify-center items-center flex flex-col w-[270px] h-[380px] lg:w-[430px]  ">
        <img
          src="/intro-images/VLJ02717.JPG"
          alt=" "
          className=" object-cover rounded-lg"
        />
      </div>

      <Nav />
      <NavLinks />
    </div>
  );
}

export default App;
