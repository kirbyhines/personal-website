/** @format */

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faInstagram,
  faLinkedin,
  faGithubSquare,
} from '@fortawesome/free-brands-svg-icons';
import { useRouter } from 'next/router';
import {
  CameraIcon,
  ClipboardCheckIcon,
  DesktopComputerIcon,
  MailIcon,
} from '@heroicons/react/outline';

function Nav() {
  const router = useRouter();
  return (
    <div>
      <div className=" w-screen flex justify-center gap-16 items-center absolute bottom-5 left-0 lg:hidden">
        <CameraIcon
          className="h-14 hover:text-blue-500 cursor-pointer"
          onClick={() => router.push('/photo')}
        />

        <DesktopComputerIcon
          className="h-14 hover:text-blue-500 cursor-pointer"
          onClick={() => router.push('/webdev')}
        />

        <ClipboardCheckIcon
          className="h-14 hover:text-blue-500 cursor-pointer"
          onClick={() => router.push('/skills')}
        />
      </div>

      {/* lg screen nav */}
      <div className="hidden h-1/2 flex-col justify-center gap-16 absolute left-5 top-1/4 lg:flex">
        <CameraIcon
          className="h-12 hover:text-blue-500 cursor-pointer "
          onClick={() => router.push('/photo')}
        />

        <DesktopComputerIcon
          className="h-12 hover:text-blue-500 cursor-pointer"
          onClick={() => router.push('/webdev')}
        />

        <ClipboardCheckIcon
          className="h-12 hover:text-blue-500 cursor-pointer"
          onClick={() => router.push('/skills')}
        />
      </div>
    </div>
  );
}

export default Nav;
