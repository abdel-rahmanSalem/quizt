import PropTypes from "prop-types";

function CompletionMessage({ percentage }) {
  // Determine completion message based on percentage
  let completionMessage;
  if (percentage >= 80) {
    completionMessage = "Congratulations! You passed the exam.";
  } else {
    completionMessage =
      "Unfortunately, you did not pass the exam. Keep practicing!";
  }
  return <p className="mb-4">{completionMessage}</p>;
}

CompletionMessage.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default CompletionMessage;
