import PropTypes from "prop-types";
import { useUser } from "../contexts/UserContext";

function Option({ index, option }) {
  const { handleNewAnswer, currentAnswer } = useUser();

  return (
    <button
      onClick={() => handleNewAnswer(index)}
      className={` hover:bg-gray-800 hover:text-gray-50  font-semibold py-2 px-4 rounded-lg transition duration-200 ease-in-out block w-full text-left
       ${
         currentAnswer === index
           ? "bg-gray-800 translate-x-4 text-gray-50 "
           : "bg-gray-700 text-gray-500"
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
