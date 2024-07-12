import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function MobileNav({ setIsOpen }) {
  function handleNavigator() {
    setIsOpen(false);
  }

  return (
    <ul className="md:hidden flex flex-col items-center gap-6 py-8 w-full">
      <li className="w-full text-center py-1 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition duration-300">
        <Link to="/" onClick={handleNavigator}>
          Home
        </Link>
      </li>
      <li className="w-full text-center py-1 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition duration-300">
        <Link to="/">How to Join</Link>
      </li>
      <li className="w-full text-center py-1 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition duration-300">
        <Link to="/">How to Host</Link>
      </li>
      <li className="w-full text-center py-1 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition duration-300">
        <Link to="/">Contact</Link>
      </li>
      <li className="border border-gray-300 text-gray-300 font-medium px-2 py-1 rounded hover:bg-gray-700 hover:border-transparent transition duration-300">
        <Link to="/leaderboard">Leaderboard</Link>
      </li>

      <hr className="w-16 border-gray-300" />
      <li className="flex justify-center gap-4 w-full">
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
      </li>
    </ul>
  );
}

export default MobileNav;
