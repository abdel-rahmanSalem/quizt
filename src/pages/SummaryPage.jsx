import { useUser } from "../contexts/UserContext";
import Button from "../components/Button";
import ExamSummary from "../components/ExamSummary";
import { Link } from "react-router-dom";

function SummaryPage() {
  const { username, quiz } = useUser();
  const { title } = quiz;

  return (
    <div className="max-w-xl mx-auto bg-gray-900 text-white p-8 rounded-lg shadow-md">
      <h1 className="text-3xl font-bold mb-6">Welcome, {username}!</h1>
      <h2 className="text-3xl font-bold mb-6">{title} Exam Summary</h2>
      <ExamSummary />
      <div className="flex justify-between">
        <Link to="/">
          <Button type="primary">Home</Button>
        </Link>
        <Button type="secondary">Attempt Another Quiz</Button>
      </div>
    </div>
  );
}

export default SummaryPage;
