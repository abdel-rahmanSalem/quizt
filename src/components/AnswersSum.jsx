import { useUser } from '../contexts/UserContext'
const AnswersSum = () => {
    const { ansTracker} = useUser();

  return (
    <ul className="grid grid-cols-5 md:grid-cols-8  my-4 gap-8 md:gap-0 select-none">
    {
     ansTracker.map((ans, index) => <li className={`${ans === "correct" ? " bg-green-500" : "bg-red-500"} mb-3 rounded-lg w-8 h-8 flex items-center justify-center`} key={index}>{index + 1}</li>)
    }
   </ul>
  )
}

export default AnswersSum
