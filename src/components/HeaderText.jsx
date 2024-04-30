import PropTypes from "prop-types";
function HeaderText({ children }) {
  return (
    <div className="max-w-3xl mb-10">
      <h1 className="text-4xl sm:text-5xl md:text-7xl text-center font-semibold select-none text-[#E4E4E4]">
        {children}
      </h1>
    </div>
  );
}

HeaderText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderText;
