import { HashLink } from "react-router-hash-link";

function MobileNavLink({ children, path, onClick }) {
  return (
    <li className="w-full text-center py-1 text-gray-300 hover:text-white hover:bg-gray-800 rounded-md transition duration-300">
      <HashLink to={path} smooth onClick={onClick}>
        {children}
      </HashLink>
    </li>
  );
}

export default MobileNavLink;
