import PropTypes from "prop-types";

function Input({ children, name, id, type, className }) {
  return (
    <div className={`flex flex-col ${className}`}>
      <label htmlFor={id} className="text-white text-sm mb-1">
        {children}
      </label>
      <input
        name={name}
        id={id}
        type={type}
        min={0}
        className="bg-white text-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
}

Input.propTypes = {
  children: PropTypes.node.isRequired,
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["text", "password", "number", "email", "tel", "url"])
    .isRequired,
  className: PropTypes.string,
};

export default Input;
