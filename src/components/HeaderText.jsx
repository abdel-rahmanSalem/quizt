import PropTypes from "prop-types";
function HeaderText({ children }) {
  return (
    <h1 className="text-2xl md:text-4xl text-center font-bold mb-12 ">
      {children}
    </h1>
  );
}

HeaderText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderText;
