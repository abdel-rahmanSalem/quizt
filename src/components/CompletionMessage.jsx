import PropTypes from "prop-types";
import { useUser } from "../contexts/UserContext";

function CompletionMessage({ percentage }) {
  const { quiz} = useUser();
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
    </>
);
}

CompletionMessage.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CompletionMessage;
