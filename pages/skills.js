/** @format */

import React from 'react';
import Nav from './Components/Nav';
import NavLinks from './Components/NavLinks';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faReact,
  faInstagram,
  faGithubSquare,
  faHtml5,
  faCss3,
  faJs,
} from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import Logo from './Components/Logo';

function skills() {
  const router = useRouter();
  return (
    <div className="h-screen w-screen">
      {/* logo */}
      <Logo />

      <div className="flex flex-col justify-around items-center h-[90%] md:h-screen w-[80%] mx-auto md:flex-row  ">
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faHtml5} className="h-[50px]" />
          <h1 className=" text-2xl font-extralight mt- tracking-widest">
            HTML
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faCss3} className="h-[50px]" />
          <h1 className=" text-2xl font-extralight mt-1 tracking-widest">
            CSS
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faJs} className="h-[50px]" />
          <h1 className=" text-2xl font-extralight mt-1 tracking-widest">
            JavaScript
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <FontAwesomeIcon icon={faReact} className="h-[50px]" />
          <h1 className=" text-2xl font-extralight mt-1 tracking-widest">
            React
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center">
          <img
            className="h-[50px]"
            src="./icons/adobe-photoshop-logo-png-icon-492439.png"
            alt=""
          />
          <h1 className=" text-2xl font-extralight mt-1 tracking-widest">
            Photoshop
          </h1>
        </div>
      </div>
      <Nav />
      <NavLinks />
    </div>
  );
}

export default skills;
