import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProgressBar from "../components/ProgressBar";
import QuestionFooter from "../components/QuestionFooter";
import QuestionMain from "../components/QuestionMain";
import { useUser } from "../contexts/UserContext";

function Questions() {
  const { isQuizEnd, updateUserScore, userScore } = useUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (isQuizEnd) navigate("/quiz/summary");
  }, [isQuizEnd, navigate]);

  useEffect(() => {
    async function updateScore() {
      await updateUserScore();
    }
    updateScore();
  }, [updateUserScore, userScore]);

  return (
    <div className="w-11/12 md:w-4/6 lg:w-1/2">
      <ProgressBar />
      <QuestionMain />
      <QuestionFooter />
    </div>
  );
}

export default Questions;
