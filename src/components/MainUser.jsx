import PropTypes from "prop-types";
import ToastCont from "./ToastCont";
import { useGlobal } from "../contexts/GlobalContext";
function Main({ children, style }) {
  const { navbarHeight } = useGlobal();
  return (
    <>
      <div
        className={`flex flex-col justify-center items-center  text-white  ${style} px-5 py-20`}
        style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}
      >
        <ToastCont />
        {children}
      </div>
    </>
  );
}
Main.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
};
export default Main;
