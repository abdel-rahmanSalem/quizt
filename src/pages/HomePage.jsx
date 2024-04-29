import { Link } from "react-router-dom";
import Button from "../components/Button";
import HeaderText from "../components/HeaderText";

import { useUser } from "../contexts/UserContext";
import { IoIosArrowForward } from "react-icons/io";
import ShowCard from "../components/ShowCard";
import { MdQuestionMark } from "react-icons/md";
import { TiInputChecked } from "react-icons/ti";
// import { MdKeyboardDoubleArrowUp } from "react-icons/md";
import { FaKeyboard } from "react-icons/fa";

function Home() {
  const { notify } = useUser();

  return (
    <>
        <HeaderText>
        <div className="max-w-3xl select-none">
          <div className=" "><span className="text-4xl md:text-6xl font-semibold text-[#E4E4E4]">Hi there, Welcome to our Quiz Application</span></div>
          {/* <p className="text-xl md:text-3xl bg-gradient-to-br from-blue-400 to-blue-600 bg-clip-text mt-4 md:mt-8 font-normal">
            <p className="text-transparent">
              Join a quiz or host your own!
            </p>
          </p> */}
        </div>
      </HeaderText>
      <div className="flex justify-between items-center gap-8">
        <Link to="/quiz-id">
          <Button type="primary"><span className="flex items-center gap-3">Join a Quiz <IoIosArrowForward /></span></Button>
        </Link>
        <Link>
          <Button
            onClick={() =>
              notify("This feature is underdevelopment", "top-right", "info")
            }
            type="secondary"
          >
            <span className="flex items-center gap-3">Host a Quiz <IoIosArrowForward /></span>
          </Button>
        </Link>
      </div>
      
      <div className="mt-24 text-center ">
            {/* <p className="font-semibold mb-6">How to use Quizt</p> */}
            <h1 className="font-semibold text-3xl uppercase ">To join a Quiz</h1>
            <div className="flex justify-between items-center mt-8 flex-col md:flex-row">
              <ShowCard icon={<MdQuestionMark className="text-7xl mx-auto"/>} text={"Ask The Host For The Quiz ID"}/>
              <ShowCard icon={<FaKeyboard className="text-7xl mx-auto"/>} text={"Insert The Given Quiz ID And Pick A Unique Name"}/>
              <ShowCard icon={<TiInputChecked className="text-7xl mx-auto"/>} text={"You're All Set To Join The Quiz!"}/>
            </div>
      </div>
      
      
    </>
  );
}

export default Home;
