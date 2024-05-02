import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import Button from "../components/Button";
import ExamSummary from "../components/ExamSummary";
import { IoShareOutline } from "react-icons/io5";
import CorrectedAnswers from "../components/CorrectedAnswers";

function SummaryPage() {
  const { username, quiz, notify, handleAttemptAnotherQuiz, isQuizEnd } =
    useUser();
  const { title } = quiz;
  const navigate = useNavigate();

  useEffect(() => {
    if (!isQuizEnd) navigate("/quiz/questions");
  }, [isQuizEnd, navigate]);
  return (
    <div className="max-w-2xl mx-auto">
      <div className="bg-gray-500/10 text-white p-8 px-8 rounded-lg shadow-md w-full">
        <h1 className="text-2xl md:text-3xl font-bold mb-6">
          Welcome, {username}!
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold mb-6">
          {title} Exam Summary
        </h2>
        <ExamSummary />
        <div className="flex justify-between">
          <Button onClick={handleAttemptAnotherQuiz} type="primary">
            Attempt Another Quiz
          </Button>
          <button
            onClick={() =>
              notify("This feature is underdevelopment", "top-right", "info")
            }
            className="flex items-center py-2 px-4 hover:-translate-y-2 transition duration-200 ease-in-out "
          >
            <IoShareOutline size={33} />
          </button>
        </div>
      </div>
      <CorrectedAnswers />
    </div>
  );
}

export default SummaryPage;
