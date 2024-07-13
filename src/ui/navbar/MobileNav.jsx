import { Link } from "react-router-dom";
import { navLinks } from "../../constants/navLinks";
import MobileNavLink from "./MobileNavLink";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function MobileNav({ setIsOpen }) {
  function handleNavigator() {
    setIsOpen(false);
  }

  return (
    <ul className="flex w-full flex-col items-center gap-6 py-8 md:hidden">
      {navLinks.map((link) => (
        <MobileNavLink
          path={link.path}
          onClick={handleNavigator}
          key={link.path}
        >
          {link.name}
        </MobileNavLink>
      ))}
      <li className="rounded border border-gray-300 px-2 py-1 font-medium text-gray-300 transition duration-300 hover:border-transparent hover:bg-gray-700">
        <Link to="/leaderboard">Leaderboard</Link>
      </li>

      <hr className="w-16 border-gray-300" />
      <li className="flex w-full justify-center gap-4">
        <a
          href="https://github.com/abdel-rahmanSalem"
          className="text-lg text-gray-300 transition duration-300 hover:text-white"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub className="h-6 w-6" />
        </a>
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
  );
}

export default MobileNav;
