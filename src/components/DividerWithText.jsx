import PropTypes from "prop-types";
function DividerWithText({ children }) {
  return (
    <div className="flex items-center mt-12 mb-3">
      <hr className="w-16 border-gray-300" />
      <p className="mx-4 text-gray-500 font-semibold">{children}</p>
      <hr className="w-16 border-gray-300" />
    </div>
  );
}
DividerWithText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default DividerWithText;
