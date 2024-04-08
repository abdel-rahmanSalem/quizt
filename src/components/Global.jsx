import PropTypes from "prop-types";
import Navbar from "./Navbar";
import Main from "./Main";

function Global({ children, style }) {
  return (
    <>
      <Navbar />
      <Main style={style}>{children}</Main>
    </>
  );
}

Global.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
};

export default Global;
