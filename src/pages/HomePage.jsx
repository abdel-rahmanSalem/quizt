import { Link } from "react-router-dom";
import Button from "../components/Button";
import HeaderText from "../components/HeaderText";

import ShowCard from "../components/ShowCard";
import { MdQuestionMark } from "react-icons/md";
import { TiInputChecked } from "react-icons/ti";
import { FaKeyboard } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useGlobal } from "../contexts/GlobalContext";
import SwipeDown from "../components/SwipeDown";
function Home() {
  const { navbarHeight } = useGlobal();
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col justify-center items-center"
        style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}
      >
        <HeaderText>Welcome to Quizt!</HeaderText>
        <div className="flex justify-center items-center gap-8 mt-8">
          <Link to="/quiz-id">
            <Button type="primary">Join a Quiz</Button>
          </Link>
          <Link to="/login">
            <Button type="secondary">Host a Quiz</Button>
          </Link>
        </div>
      </div>
      <SwipeDown>How to use Quizt?</SwipeDown>

      <div className="text-center text-white p-12 pt-20 bg-gray-950">
        <h2 className="font-semibold text-4xl uppercase">To join a Quiz: </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40">
          <div className="flex justify-center items-center">
            <ShowCard
              icon={
                <MdQuestionMark className="text-blue-400 text-6xl mx-auto" />
              }
              text={"Ask The Host For The Quiz ID"}
            />
          </div>
          <div className="flex justify-center items-center">
            <ShowCard
              icon={<FaKeyboard className="text-green-400 text-6xl mx-auto" />}
              text={"Insert The Given Quiz ID And Pick A Unique Name"}
            />
          </div>
          <div className="flex justify-center items-center">
            <ShowCard
              icon={
                <TiInputChecked className="text-yellow-400 text-6xl mx-auto" />
              }
              text={"You're All Set To Join The Quiz!"}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
