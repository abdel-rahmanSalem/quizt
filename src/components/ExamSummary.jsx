import { useUser } from "../contexts/UserContext";
import Rank from "../components/Rank";
import CompletionMessage from "../components/CompletionMessage";
import Percentage from "../components/Percentage";
import QuizQuestionsRow from "./QuizQuestionsRow";
function ExamSummary() {
  const { quiz, user } = useUser();
  const { max_points } = quiz;
  const { score } = user;
  const percentage = (score / max_points) * 100;

  return (
    <>
      <CompletionMessage percentage={percentage} />
      <QuizQuestionsRow />
      <p className="mb-4">
        Final Score: {score} / {max_points}
      </p>
      <Percentage percentage={percentage} />
      <Rank percentage={percentage} />
    </>
  );
}

export default ExamSummary;
