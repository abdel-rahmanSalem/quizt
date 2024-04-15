import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Import social icons

function Navbar() {
  return (
    <nav className="bg-gray-900 p-4 navbar">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <Link to="/" className="text-gray-200 text-2xl font-semibold">
              Quizt
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <Link
              to="/login"
              className="text-gray-300 text-lg hover:text-white"
            >
              Host
            </Link>
            <Link
              to="/new-user"
              className="text-gray-300 text-lg hover:text-white"
            >
              Join
            </Link>
            <div className="border-l border-gray-600 h-6"></div>{" "}
            {/* Vertical line */}
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
