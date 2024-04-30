import { Link } from "react-router-dom";
import Button from "../components/Button";
import HeaderText from "../components/HeaderText";

// import ShowCard from "../components/ShowCard";
// import { MdQuestionMark } from "react-icons/md";
// import { TiInputChecked } from "react-icons/ti";
// // import { MdKeyboardDoubleArrowUp } from "react-icons/md";
// import { FaKeyboard } from "react-icons/fa";
import Navbar from "../components/Navbar";
import { useGlobal } from "../contexts/GlobalContext";
function Home() {
  const { navbarHeight } = useGlobal();
  return (
    <>
      <Navbar />
      <div
        className="flex flex-col justify-center"
        style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}
      >
        <div className="flex flex-col items-center self-center">
          <HeaderText>Hi there, Welcome to our Quiz Application</HeaderText>
          <div className="flex justify-between items-center gap-8">
            <Link to="/quiz-id">
              <Button type="primary">Join a Quiz</Button>
            </Link>
            <Link>
              <Button type="secondary">Host a Quiz</Button>
            </Link>
          </div>
        </div>
      </div>
      {/* <div className="mt-24 text-center ">
        <p className="font-semibold mb-6">How to use Quizt</p>
        <h1 className="font-semibold text-3xl uppercase ">To join a Quiz</h1>
        <div className="flex justify-between items-center mt-8 flex-col md:flex-row">
          <ShowCard
            icon={<MdQuestionMark className="text-7xl mx-auto" />}
            text={"Ask The Host For The Quiz ID"}
          />
          <ShowCard
            icon={<FaKeyboard className="text-7xl mx-auto" />}
            text={"Insert The Given Quiz ID And Pick A Unique Name"}
          />
          <ShowCard
            icon={<TiInputChecked className="text-7xl mx-auto" />}
            text={"You're All Set To Join The Quiz!"}
          />
        </div>
      </div> */}
    </>
  );
}

export default Home;
