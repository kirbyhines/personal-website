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
import ProjectCard from './Components/ProjectCard';
import Nav from './Components/Nav';
import NavLinks from './Components/NavLinks';
import Logo from './Components/Logo';

function Hello() {
  const router = useRouter();
  return (
    <div className=" flex flex-col justify-center items-center h-screen w-screen my-auto">
      <Logo />

      {/* Projects */}
      <div className=" flex py-5  w-screen overflow-y-hidden scrollbar-hide overflow-x-scroll lg:w-[80vw] lg:h-[90vh] lg:grid lg:grid-cols-2 lg:place-items-center">
        <ProjectCard
          image={'./web-projects/preview.jpg'}
          title={'In Progress'}
          description={
            'E-commerce site from FrontEnd Mentor. Next steps are building out each of the product pages.'
          }
          liveCode={'https://kirbyhines.github.io/light-dark-clock/'}
          gitCode={'https://github.com/kirbyhines/light-dark-clock'}
        />

        <ProjectCard
          image={'./web-projects/netflix-clone.png'}
          title={'Netflix Clone'}
          description={
            <React.Fragment>
              This project was my first{' '}
              <span className="font-bold underline">React</span> application
              using{' '}
              <span className="font-bold underline">The Movie Database</span>{' '}
              API using <span className="font-bold underline">Axios</span>.
            </React.Fragment>
          }
          liveCode={'https://netflix-clone-beta-nine.vercel.app/'}
          gitCode={'https://github.com/kirbyhines/netflix-clone'}
        />

        <ProjectCard
          image={'./web-projects/Clock.png'}
          title={'Javascript Clock'}
          description={
            'Simple clock with the ability to toggle light and dark mode.'
          }
          liveCode={'https://kirbyhines.github.io/light-dark-clock/'}
          gitCode={'https://github.com/kirbyhines/light-dark-clock'}
        />

        <ProjectCard
          image={'./web-projects/huddle.png'}
          title={'Huddle Landing Page'}
          description={
            'Landing page challenge from Frontend Mentor using HTML and CSS only.scrition'
          }
          liveCode={'https://kirbyhines.github.io/huddle-landing-page/'}
          gitCode={'https://github.com/kirbyhines/huddle-landing-page'}
        />
      </div>

      {/* Nav  */}
      <Nav />
      <NavLinks />
    </div>
  );
}

export default Hello;
