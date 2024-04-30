import PropTypes from "prop-types";
import { IoIosArrowForward } from "react-icons/io";

function Button({ children, type, onClick }) {
  const primaryClasses = "bg-blue-600 hover:bg-blue-500 ";
  const secondaryClasses = "hover:bg-green-500 bg-green-600";

  const commonClasses =
    "flex items-center justify-center gap-3 text-white font-medium font-bold py-2 px-3 md:py-3 md:px-5 rounded focus:outline-none focus:shadow-outline duration-300 transition-colors rounded-lg select-none";

  const buttonClasses = `${commonClasses} ${
    type === "primary" ? primaryClasses : secondaryClasses
  }`;

  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
      <IoIosArrowForward />
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]).isRequired,
  onClick: PropTypes.func,
};

export default Button;
