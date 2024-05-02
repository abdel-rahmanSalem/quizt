import PropTypes from "prop-types";

function DemoButton({ clickHandler, callBack }) {
  function handleClick() {
    clickHandler("123456");
    if (callBack) callBack("123456");
  }
  return (
    <>
      <div className="flex items-center mt-12 mb-3">
        <hr className="w-16 border-gray-300" />
        <p className="mx-4 text-gray-500 font-semibold">OR</p>
        <hr className="w-16 border-gray-300" />
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
