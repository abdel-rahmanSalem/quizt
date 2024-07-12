import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function DesktopNav() {
  return (
    <>
      <ul className="hidden md:flex items-center space-x-5">
        <li className="text-gray-300 hover:text-white transition duration-300">
          <Link to="/">Home</Link>
        </li>
        <li className="text-gray-300 hover:text-white transition duration-300">
          <Link to="/">How to Join</Link>
        </li>
        <li className="text-gray-300 hover:text-white transition duration-300">
          <Link to="/">How to Host</Link>
        </li>
        <li className="text-gray-300 hover:text-white transition duration-300">
          <Link to="/">Contact</Link>
        </li>
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
