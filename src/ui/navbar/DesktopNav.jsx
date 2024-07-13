import { useState } from "react";
import { Link } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";
import DesktopNavLink from "./DesktopNavLink";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function DesktopNav() {
  const [activeLink, setActiveLink] = useState("#");

  return (
    <>
      <ul className="hidden items-center space-x-5 md:flex">
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
        <div className="h-6 border-l border-gray-600"></div>
        <li>
          <a
            href="https://github.com/abdel-rahmanSalem"
            className="text-lg text-gray-300 transition duration-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="h-6 w-6" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/abd-el-rahman-salem"
            className="text-lg text-gray-300 transition duration-300 hover:text-white"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="h-6 w-6" />
          </a>
        </li>
      </ul>
      <Link
        to="/leaderboard"
        className="hidden rounded border border-gray-300 px-2 py-1 font-medium text-gray-300 transition duration-300 hover:border-transparent hover:bg-gray-700 md:block"
      >
        LeaderBoard
      </Link>
    </>
  );
}

export default DesktopNav;
