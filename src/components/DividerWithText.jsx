import PropTypes from "prop-types";
function DividerWithText({ children }) {
  return (
    <>
      <hr className="w-16 border-gray-300" />
      <p className="mx-4 text-gray-500 font-semibold">{children}</p>
      <hr className="w-16 border-gray-300" />
    </>
  );
}
DividerWithText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DividerWithText;
