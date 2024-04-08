import { Link } from "react-router-dom";

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
          <div className="flex space-x-4">
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
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
