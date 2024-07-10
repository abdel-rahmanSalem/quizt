import PropTypes from "prop-types";
function HeaderText({ children }) {
  return (
    <div className=" mb-20">
      <h1 className="text-3xl sm:text-4xl md:text-5xl text-center font-semibold text-[#E4E4E4]">
        {children}
      </h1>
    </div>
  );
}

HeaderText.propTypes = {
  children: PropTypes.node.isRequired,
};

export default HeaderText;
