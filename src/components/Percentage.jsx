import PropTypes from "prop-types";

function Percentage({ percentage }) {
  return <p className="mb-4">Percentage: {percentage.toFixed(2)}%</p>;
}

Percentage.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Percentage;
