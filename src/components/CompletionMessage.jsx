import PropTypes from "prop-types";
import { useUser } from "../contexts/UserContext";

function CompletionMessage({ percentage }) {
  const { quiz , ansArray} = useUser();
  const { passing_percentage } = quiz;
  // Determine completion message based on percentage
  let completionMessage;
  if (percentage >= passing_percentage) {
    completionMessage = "Congratulations! You passed the exam.";
  } else {
    completionMessage =
      "Unfortunately, you did not pass the exam. Keep practicing!";
  }
  return (
    <>
      <p className="mb-4">{completionMessage}</p>
      <ul className="grid grid-cols-8 gap-4 my-4">
        {
          ansArray.map((ans, index) => (
              <div className={`select-none flex items-center justify-center rounded-lg p-4 ${ans === "correct" ? "bg-green-500" : "bg-red-600"} w-5 h-5`} key={index}>
                <span>{index + 1}</span>
              </div>
        ))
        }
      </ul>
    </>
);
}

CompletionMessage.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CompletionMessage;
