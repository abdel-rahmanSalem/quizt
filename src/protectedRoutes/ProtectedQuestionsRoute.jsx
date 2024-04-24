import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

function ProtectedQuestionsRoute({ children }) {
  const { questions } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (questions.length === 0) navigate("/quiz");
  }, [questions, navigate]);
  return questions.length !== 0 ? children : null;
}

ProtectedQuestionsRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedQuestionsRoute;
