import { useEffect } from "react";
import { Link } from "react-router-dom";
import useGlobal from "../contexts/useGlobal";

import { FaGithub, FaLinkedin } from "react-icons/fa";
import Logo from "./Logo";

function Navbar() {
  const { setNavbarHeight } = useGlobal();
  // calc the height of the navbar
  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      const height = navbar.offsetHeight;
      setNavbarHeight(height);
    }
  }, [setNavbarHeight]);
  return (
    <nav className="text-gray-300 px-6 pt-6 navbar">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="text-4xl font-semibold">
            <Logo />
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/leaderboard"
              className="border border-gray-300 text-gray-300 px-2 py-1 rounded hover:bg-gray-700 hover:border-transparent transition duration-300"
            >
              <span className="font-medium">LeaderBoard</span>
            </Link>
            <div className="border-l border-gray-600 h-6"></div>
            <a
              href="https://github.com/abdel-rahmanSalem"
              className="text-gray-300 text-lg hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/abd-el-rahman-salem"
              className="text-gray-300 text-lg hover:text-white transition duration-300"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
