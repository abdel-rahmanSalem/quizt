import PropTypes from "prop-types";

import { FaMedal } from "react-icons/fa";
function Rank({ percentage }) {
  // Determine rank based on percentage
  let rank;
  let rankColor;
  let rankIcon;
  if (percentage >= 90) {
    rank = "Gold";
    rankColor = "yellow-400";
    rankIcon = <FaMedal />;
  } else if (percentage >= 80) {
    rank = "Silver";
    rankColor = "gray-400";
    rankIcon = <FaMedal />;
  } else if (percentage >= 70) {
    rank = "Bronze";
    rankColor = "orange-400";
    rankIcon = <FaMedal />;
  } else {
    rank = "Participant";
    rankColor = "gray-600";
    rankIcon = null;
  }

  return (
    <div className="mb-4 flex items-center">
      <span className="font-semibold mr-2">Rank: </span>
      <span className={`text-${rankColor} text-lg mr-2`}>{rankIcon}</span>
      <span className={`text-${rankColor} text-lg`}>{rank}</span>
    </div>
  );
}

Rank.propTypes = {
  percentage: PropTypes.number.isRequired,
};

export default Rank;
