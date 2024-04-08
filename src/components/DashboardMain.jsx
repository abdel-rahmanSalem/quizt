import QuestionForm from "../components/QuestionForm";
import QuizForm from "../components/QuizForm";

function DashboardMain() {
  return (
    <div className="flex flex-col md:flex-row gap-12">
      <div>
        <QuestionForm />
      </div>
      <div>
        <QuizForm />
      </div>
    </div>
  );
}

export default DashboardMain;
