import useUser from "../contexts/useUser";
import { FaChevronRight } from "react-icons/fa";
import Timer from "./Timer";

function QuestionFooter() {
  const { handleNextQuestion } = useUser();
  return (
    <footer className="flex justify-between items-center mt-6">
      <Timer />
      <button onClick={handleNextQuestion}>
        <FaChevronRight className="h-6 w-6 text-gray-400 hover:text-white" />
      </button>
    </footer>
  );
}

export default QuestionFooter;
