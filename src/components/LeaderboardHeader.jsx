import PropTypes from "prop-types";
import { MdLeaderboard } from "react-icons/md";
function LeaderboardHeader({ id }) {
  return (
    <div className="flex justify-between items-center mb-2 mt-10">
      <div className="flex items-center gap-2 text-2xl sm:text-3xl md:text-4xl font-semibold select-none text-[#E4E4E4]">
        <MdLeaderboard className="text-blue-500" />
        <h1>Leaderboard</h1>
      </div>
      <span className="text-sm font-normal text-gray-300">Quiz ID : {id}</span>
    </div>
  );
}

LeaderboardHeader.propTypes = {
  id: PropTypes.string.isRequired,
};

export default LeaderboardHeader;
