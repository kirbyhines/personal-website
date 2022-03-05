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

function NavLinks() {
  return (
    <div>
      {/* large screen */}
      <div className=" hidden lg:flex w-screen flex-row absolute bottom-5 left-0 justify-center gap-8">
        <a href="https://www.instagram.com/kirbyhines/">
          <FontAwesomeIcon
            icon={faInstagram}
            className="h-14 hover:text-blue-500 "
          />
        </a>

        <a href="https://www.linkedin.com/in/kirby-hines-10a61695/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="h-14 hover:text-blue-500 "
          />
        </a>

        <a href="https://github.com/kirbyhines">
          <FontAwesomeIcon
            icon={faGithubSquare}
            className="h-14 hover:text-blue-500 "
          />
        </a>

        <a href="mailto:kirbyhinesphoto@gmail.com">
          <MailIcon className="h-14 hover:text-blue-500 " />
        </a>
      </div>

      {/* mobile */}
      <div className=" flex lg:hidden w-screen flex-row absolute top-5 right-5 justify-end gap-4 items-center">
        <a href="https://www.instagram.com/kirbyhines/">
          <FontAwesomeIcon
            icon={faInstagram}
            className="h-4 hover:text-blue-500 "
          />
        </a>

        <a href="https://www.linkedin.com/in/kirby-hines-10a61695/">
          <FontAwesomeIcon
            icon={faLinkedin}
            className="h-4 hover:text-blue-500 "
          />
        </a>

        <a href="https://github.com/kirbyhines">
          <FontAwesomeIcon
            icon={faGithubSquare}
            className="h-4 hover:text-blue-500 "
          />
        </a>

        <a href="mailto:kirbyhinesphoto@gmail.com">
          <MailIcon className="h-4 hover:text-blue-500 " />
        </a>
      </div>
    </div>
  );
}

export default NavLinks;
