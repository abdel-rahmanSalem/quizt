import PropTypes from "prop-types";
import Navbar from "./Navbar.jsx";
import Main from "./MainUser.jsx";
import Footer from "./Footer.jsx";
function GlobalUserUI({ children, style }) {
  return (
    <>
      <Navbar />
      <Main style={style}>{children}</Main>
      <Footer />
    </>
  );
}

GlobalUserUI.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
};

export default GlobalUserUI;
