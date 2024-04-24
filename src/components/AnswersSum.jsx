import { useUser } from '../contexts/UserContext'
const AnswersSum = () => {
    const { ansTracker} = useUser();

  return (
    <ul className="grid grid-cols-8 my-4">
    {
     ansTracker.map((ans, index) => <li className={`${ans === "correct" ? " bg-green-500" : "bg-red-500"}  rounded-lg w-8 h-8 flex items-center justify-center`} key={index}>{index + 1}</li>)
    }
   </ul>
  )
}

export default AnswersSum
