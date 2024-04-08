import PropTypes from "prop-types";
import { Bars } from "react-loader-spinner";

function Loader({ children }) {
  return (
    <>
      <Bars
        height="35"
        width="35"
        color="white"
        ariaLabel="bars-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
      <p className="text-xl mt-4 text-gray-300">{children}</p>
    </>
  );
}

Loader.propTypes = {
  children: PropTypes.node.isRequired,
};
export default Loader;
