import Options from "./Options";
import { useUser } from "../contexts/UserContext";

function QuestionMain() {
  const { currentQuestion } = useUser();
  const { question } = currentQuestion;
  return (
    <main>
      <h4 className="text-xl font-semibold mb-6 ">{question}</h4>
      <Options />
    </main>
  );
}

export default QuestionMain;
