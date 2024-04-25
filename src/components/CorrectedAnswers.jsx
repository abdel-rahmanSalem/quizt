import { useState } from "react";
import { BsArrowDown, BsArrowUp } from "react-icons/bs";
import { useUser } from "../contexts/UserContext";

const CorrectedAnswers = () => {
    const [showCorrected, setShowCorrected] = useState(false);
    const {corrected} = useUser();
  return (
    <div className="w-full mt-4">
        <button className="flex items-center justify-between cursor-pointer shadow-md p-2 rounded-lg w-full hover:bg-slate-500 bg-opacity-50 duration-500" onClick={() => setShowCorrected(!showCorrected)}>
            {
                showCorrected ?
                <>
                    <p>Hide Corrected Answers</p>
                    <BsArrowUp />
                </>
                :
                <>
                    <p>Display Corrected Answers</p>
                    <BsArrowDown />
                </>

            }
        </button>
        {
            showCorrected &&
            <div className="p-2 max-h-28 overflow-y-auto">
                <ul className="flex flex-col gap-4">
                {
                    corrected.map((correctedQ, index) => (
                    <li className={`flex flex-col gap-1 ${index !== corrected.length -1 && "border-b-2 pb-4"}`} key={index}>
                        <span><span className="text-slate-400">Question {correctedQ.index + 1} :</span> {correctedQ.question}</span> 
                        <p className="flex gap-3">Answer: <span className="text-green-400">{correctedQ.answer}</span></p>
                    </li>))
                }
                </ul>
            </div>
        }
      </div>
  )
}

export default CorrectedAnswers
