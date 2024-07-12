import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { navLinks } from "../../constants/navLinks";
import DesktopNavLink from "./DesktopNavLink";
import { useState } from "react";
function DesktopNav() {
  const [activeLink, setActiveLink] = useState("#");

  return (
    <>
      <ul className="hidden md:flex items-center space-x-5">
        {navLinks.map((link) => (
          <DesktopNavLink
            path={link.path}
            activeLink={activeLink}
            setActiveLink={setActiveLink}
            key={link.path}
          >
            {link.name}
          </DesktopNavLink>
        ))}
        {/* <li className="text-gray-300 hover:text-white transition duration-300">
          <HashLink to="#" smooth>
            Home
          </HashLink>
        </li>
        <li className="text-gray-300 hover:text-white transition duration-300">
          <HashLink to="#how-to-join" smooth>
            How to Join
          </HashLink>
        </li>
        <li className="text-gray-300 hover:text-white transition duration-300">
          <HashLink to="#how-to-host" smooth>
            How to Host
          </HashLink>
        </li>
        <li className="text-gray-300 hover:text-white transition duration-300">
          <HashLink to="#contact" smooth>
            Contact
          </HashLink>
        </li> */}
        <div className="border-l border-gray-600 h-6"></div>
        <li>
          <a
            href="https://github.com/abdel-rahmanSalem"
            className="text-gray-300 text-lg hover:text-white transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abd-el-rahman-salem"
            className="text-gray-300 text-lg hover:text-white transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </li>
      </ul>
      <Link
        to="/leaderboard"
        className="hidden md:block font-medium border border-gray-300 text-gray-300 px-2 py-1 rounded hover:bg-gray-700 hover:border-transparent transition duration-300"
      >
        LeaderBoard
      </Link>
    </>
  );
}

export default DesktopNav;
