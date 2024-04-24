import { useUser } from "../contexts/UserContext";
import Button from "../components/Button";
import ExamSummary from "../components/ExamSummary";
import { IoShareOutline } from "react-icons/io5";

function SummaryPage() {
  const { username, quiz, notify, handleAttemptAnotherQuiz } = useUser();
  const { title } = quiz;

  return (
    <div className="bg-gray-900 text-white p-8 rounded-lg shadow-md">
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
  );
}

export default SummaryPage;
