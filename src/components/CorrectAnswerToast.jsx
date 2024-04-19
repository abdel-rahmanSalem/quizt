import { useState } from 'react';
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useUser } from '../contexts/UserContext';
const CorrectAnswerToast = () => {
  const [showCorrectAnswers, setShowCorrectAnswers] = useState(false);
  const { correction } = useUser();
  
  if(correction.length < 1) return;

  return (
    <div className="absolute  left-5 bottom-5 bg-green-500 rounded-lg cursor-pointer min-w-[20rem] select-none" onClick={() => setShowCorrectAnswers(!showCorrectAnswers)}>
        <p className="border-b-4 border-white border-opacity-50 px-6 py-4 flex items-center justify-between gap-6 ">{showCorrectAnswers ? <>Hide Corrected Answers <FaArrowDown /></> : <>Display Corrected Answers <FaArrowUp /></>}</p>
        <div className='max-h-24 overflow-y-auto'>
            {
                showCorrectAnswers ? 
                <ul className="px-6 py-2 flex flex-col gap-2">
                    {
                    correction.map((correct, index) => (<li key={index} className="text-lg flex gap-4">Q{correct.index + 1} : {correct.answer}</li>))
                    }
                </ul>
                :
                null
            }
        </div>
      </div>
  )
}

export default CorrectAnswerToast
