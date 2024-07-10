import PropTypes from "prop-types";
import DividerWithText from "./DividerWithText";

function DemoButton({ clickHandler, callBack }) {
  function handleClick() {
    clickHandler("123456");
    if (callBack) callBack("123456");
  }
  return (
    <>
      <div className="flex items-center mt-12 mb-3">
        <DividerWithText>OR</DividerWithText>
      </div>
      <button
        type="submit"
        className="border border-green-500 text-green-500 hover:text-white hover:bg-green-500 font-semibold py-2 px-4 rounded shadow"
        onClick={handleClick}
      >
        Demo
      </button>
    </>
  );
}

DemoButton.propTypes = {
  clickHandler: PropTypes.func.isRequired,
  callBack: PropTypes.func,
};

export default DemoButton;
