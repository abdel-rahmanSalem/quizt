import PropTypes from "prop-types";
import { useUser } from "../contexts/UserContext";

function Option({ index, option }) {
  const { handleNewAnswer, currentAnswer } = useUser();

  return (
    <button
      onClick={() => handleNewAnswer(index)}
      className={`bg-gray-700 hover:bg-gray-800 hover:text-gray-50 text-gray-500 font-semibold py-2 px-4 rounded-lg transition duration-300 ease-in-out block w-full text-left
       ${
         currentAnswer === index
           ? "bg-gray-800 translate-x-6 text-gray-50 "
           : ""
       }`}
    >
      {option}
    </button>
  );
}

Option.propTypes = {
  option: PropTypes.string.isRequired,
  index: PropTypes.number.isRequired,
};

export default Option;
