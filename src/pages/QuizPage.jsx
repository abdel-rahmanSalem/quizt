import { useEffect } from "react";
import { useUser } from "../contexts/UserContext";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Loader from "../components/Loader";

function Quiz() {
  const { quiz, handleUserStartQuiz, status } = useUser();
  const { title, host_name, max_points, num_questions, time, is_start } = quiz;

  const navigate = useNavigate();

  useEffect(() => {
    if (status === "questionsLoaded")
      navigate("/quiz/questions", { replace: true });
  }, [status, navigate]);

  if (status === "loading") return <Loader>Starting the quiz...</Loader>;
  return (
    <div className="max-w-xl mx-auto bg-gray-800 shadow-md rounded-lg overflow-hidden">
      <div className="p-6">
        <h1 className="text-3xl font-bold text-center mb-6 text-gray-100">
          {title}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="flex flex-col items-center bg-gray-700 rounded-lg p-4">
            <p className="text-xl font-semibold text-gray-300">{max_points}</p>
            <p className="text-lg text-gray-500">Points</p>
          </div>
          <div className="flex flex-col items-center bg-gray-700 rounded-lg p-4">
            <p className="text-xl font-semibold text-gray-300">
              {num_questions}
            </p>
            <p className="text-lg text-gray-500">Questions</p>
          </div>
          <div className="flex flex-col items-center bg-gray-700 rounded-lg p-4">
            <p className="text-xl font-semibold text-gray-300">{time}</p>
            <p className="text-lg text-gray-500">Minutes</p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-lg text-gray-400">Hosted by {host_name}</p>
        </div>
        <div className="flex justify-center mt-8">
          {is_start ? (
            <Button type="primary" onClick={handleUserStartQuiz}>
              Start Quiz
            </Button>
          ) : (
            <p>Ask your host to start the quiz :)</p>
          )}
        </div>
      </div>
    </div>
  );
}

export default Quiz;
