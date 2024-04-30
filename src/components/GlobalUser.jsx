import PropTypes from "prop-types";
import Navbar from "./Navbar.jsx";
import Main from "./MainUser.jsx";
import { UserProvider } from "../contexts/UserContext.jsx";
// import Footer from "./Footer.jsx";
function Global({ children, style }) {
  return (
    <UserProvider>
      <Navbar />
      <Main style={style}>{children}</Main>
      {/* <Footer /> */}
    </UserProvider>
  );
}

Global.propTypes = {
  children: PropTypes.node.isRequired,
  style: PropTypes.string,
};

export default Global;
