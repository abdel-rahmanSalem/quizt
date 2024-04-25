import PropTypes from "prop-types";

function Button({ children, type, onClick }) {
  const primaryClasses = "bg-blue-600 hover:bg-blue-700 ";
  const secondaryClasses = "bg-green-600 hover:bg-green-700";

  const commonClasses =
    "text-white font-medium font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline";

  const buttonClasses = `${commonClasses} ${
    type === "primary" ? primaryClasses : secondaryClasses
  }`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  onClick: PropTypes.func,
};

export default Button;
