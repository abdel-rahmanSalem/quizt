import ProgressBar from "../components/ProgressBar";
import QuestionFooter from "../components/QuestionFooter";
import QuestionMain from "../components/QuestionMain";

function Questions() {
  return (
    <div className="w-11/12 md:w-4/6 lg:w-1/2">
      <ProgressBar />
      <QuestionMain />
      <QuestionFooter />
    </div>
  );
}

export default Questions;
