import PropTypes from "prop-types";
import ToastCont from "./ToastCont";
import { useEffect, useState } from "react";

function Main({ children, style }) {
  const [navbarHeight, setNavbarHeight] = useState(0);

  useEffect(() => {
    const navbar = document.querySelector(".navbar");
    if (navbar) {
      const height = navbar.offsetHeight;
      setNavbarHeight(height);
    }
  }, []);

  return (
    <div
      className={`flex flex-col justify-center items-center bg-gray-900 text-white ${style} px-4`}
      style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}
    >
      <ToastCont />
      {children}
    </div>
  );
}
Main.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
};
export default Main;
