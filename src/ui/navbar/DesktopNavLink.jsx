import { HashLink } from "react-router-hash-link";

function DesktopNavLink({ children, path, activeLink, setActiveLink }) {
  return (
    <li
      className={`${
        activeLink === path ? "text-blue-400" : "text-gray-300 hover:text-white"
      }  transition duration-300`}
    >
      <HashLink to={path} smooth onClick={() => setActiveLink(path)}>
        {children}
      </HashLink>
    </li>
  );
}

export default DesktopNavLink;
