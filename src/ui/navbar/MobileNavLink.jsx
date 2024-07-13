import { HashLink } from "react-router-hash-link";

function MobileNavLink({ children, path, onClick }) {
  return (
    <li className="w-full rounded-md py-1 text-center text-gray-300 transition duration-300 hover:bg-gray-800 hover:text-white">
      <HashLink to={path} smooth onClick={onClick}>
        {children}
      </HashLink>
    </li>
  );
}

export default MobileNavLink;
