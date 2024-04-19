import React from 'react'
import { useUser } from '../contexts/UserContext'

const QuizQuestionsRow = () => {
    const {ansArray} = useUser();
    
  return (
    <ul className="grid grid-cols-8 gap-4 my-4">
        {
            ansArray.map((ans, index) => (
                <div className={`select-none flex items-center justify-center rounded-lg p-4 ${ans === "correct" ? "bg-green-500" : "bg-red-600"} w-5 h-5`} key={index}>
                <span>{index + 1}</span>
                </div>
        ))
        }
    </ul>
  )
}

export default QuizQuestionsRow
