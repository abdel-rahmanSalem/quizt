import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdLeaderboard } from "react-icons/md";
import { useEffect } from "react";
import { useGlobal } from "../contexts/GlobalContext";

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
    <nav className="text-gray-300 p-4 navbar">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className=" text-3xl font-semibold">
              <span className="text-blue-600">Q</span>uizt
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-xl hover:text-white">
              Host
            </Link>
            <Link to="/new-user" className="text-xl hover:text-white">
              Join
            </Link>
            <Link
              to="/leaderboard"
              className="text-gray-300 text-xl hover:text-white"
            >
              <MdLeaderboard className="text-xl" />
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
