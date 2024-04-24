import PropTypes from "prop-types";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

function ProtectedQuizRoute({ children }) {
  const { quiz, isQuizEnd, questionsStatus } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (questionsStatus === "Loaded")
      navigate("/quiz/questions", { replace: true });
  }, [questionsStatus, navigate]);

  useEffect(() => {
    if (Object.keys(quiz).length === 0) navigate("/quiz-id");
    if (isQuizEnd) navigate("/quiz/summary");
  }, [quiz, isQuizEnd, navigate]);
  return Object.keys(quiz).length !== 0 ? children : null;
}

ProtectedQuizRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default ProtectedQuizRoute;
