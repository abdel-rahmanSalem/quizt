import { FaTrophy } from "react-icons/fa";
import { useState } from "react";
import Loader from "../components/Loader";
import LeaderboardForm from "../components/LeaderboardForm";
import LeaderboardHeader from "../components/LeaderboardHeader";

const Leaderboard = () => {
  const [id, setId] = useState("");
  const [scores, setScores] = useState([]);
  const [loading, setIsLoading] = useState(false);

  if (loading) return <Loader>Loading Quiz leaderboard</Loader>;

  return (
    <>
      {scores.length == 0 ? (
        <LeaderboardForm
          id={id}
          setId={setId}
          setScores={setScores}
          setIsLoading={setIsLoading}
        />
      ) : (
        <div className=" w-full max-w-screen-2xl mx-auto my-8">
          <LeaderboardHeader id={id} />
          <ul className="flex flex-col gap-6">
            {scores &&
              scores.map((userInfo, index) => (
                <li
                  className="w-full flex justify-between bg-gray-500 bg-opacity-50  p-3 rounded-lg select-none"
                  key={index}
                >
                  {index === 0 ? (
                    <>
                      <span className="text-lg flex items-center justify-center gap-2">
                        {" "}
                        <FaTrophy className=" text-yellow-400" /> 1st{" "}
                      </span>{" "}
                    </>
                  ) : index === 1 ? (
                    <>
                      <span className="text-lg flex items-center justify-center gap-2">
                        {" "}
                        <FaTrophy className=" text-gray-300" /> 2nd{" "}
                      </span>{" "}
                    </>
                  ) : index === 2 ? (
                    <>
                      <span className="text-lg flex items-center justify-center gap-2">
                        {" "}
                        <FaTrophy className=" text-yellow-700" /> 3rd{" "}
                      </span>{" "}
                    </>
                  ) : (
                    <span>{index + 1}th</span>
                  )}
                  <span>{userInfo.user_name}</span>{" "}
                  <span>score: {userInfo.score}</span>
                </li>
              ))}
          </ul>
        </div>
      )}
    </>
  );
};

export default Leaderboard;
