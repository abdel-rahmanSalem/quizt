import PropTypes from "prop-types";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function ProtectedUserRoute({ children }) {
  const { isUser } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isUser) navigate("/");
  }, [isUser, navigate]);

  return isUser ? children : null;
}

ProtectedUserRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedUserRoute;
