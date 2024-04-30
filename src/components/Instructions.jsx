import ShowCard from "../components/ShowCard";
import { MdQuestionMark } from "react-icons/md";
import { TiInputChecked } from "react-icons/ti";
import { FaKeyboard } from "react-icons/fa";

function Instructions() {
  return (
    <div className="text-center text-white p-12 pt-20 bg-gray-950">
      <h2 className="font-semibold text-4xl uppercase">To join a Quiz: </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-40">
        <div className="flex justify-center items-center">
          <ShowCard
            icon={<MdQuestionMark className="text-blue-400 text-6xl mx-auto" />}
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
  );
}

export default Instructions;
