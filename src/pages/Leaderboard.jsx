import HeaderText from "../components/HeaderText"
import { MdLeaderboard } from "react-icons/md";
import { FaTrophy } from "react-icons/fa";
import { useGlobal } from "../contexts/GlobalContext";
import {  useState } from "react";
import Button from "../components/Button";
import Loader from "../components/Loader";

const Leaderboard = () => {
  const { quiztServer , notify} = useGlobal();
  const [scores, setScores] = useState([]);
  const [id, setId] = useState("");
  const [loading , setIsLoading] = useState(false);

  
  async function getScores(id){

    if (id.trim().length < 4) {
      notify("Should be more than three characters", "top-right", "warn");
      return;
    }
    setIsLoading(true);
    let { data, error} = await quiztServer
    .from("users")
    .select("score , user_name")
    .eq("quiz_id", id)
    .order('score', {ascending: false});

    if(error){
      notify("There was an error fetching data", "top-right", "error");
      setScores([]);
    }

    if(data.length === 0){
      notify("Wrong quiz ID", "top-right", "error");
    }
    if(data){
      setIsLoading(false);
      setScores(data); 
    }
  }


  function handleSubmit(e) {
    e.preventDefault();
    getScores(id)
  }

  if(loading) return <Loader>Loading Quiz leaderboard</Loader>

  return (
    <>
      {
        scores.length == 0 ?
        <>
          <HeaderText>
            Enter Quiz ID to show leaderboard
          </HeaderText>
          <form className="flex gap-2 flex-col md:flex-row " onSubmit={handleSubmit}>
              <input
                autoFocus
                maxLength="20"
                className="bg-white text-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                name="quizId"
                type="text"
                placeholder="27364...."
                value={id}
                onChange={(e) => setId(e.target.value)}
              />
              <Button type="primary">Enter</Button>
          </form>
        </>
          :
         <div className="bg-gray-900  w-full max-w-screen-2xl mx-auto my-8">
            <HeaderText>
              <div className="flex justify-between items-end">
                <span className="flex gap-2"><MdLeaderboard className="text-blue-500"/>LeaderBoard </span>
                <span className="text-sm font-normal">Quiz ID : {id}</span>
              </div>
            </HeaderText>  
            <ul className="flex flex-col gap-6">
              {
                scores &&
                scores.map((userInfo, index) => 
                <li className="w-full flex justify-between bg-gray-500 bg-opacity-50  p-3 rounded-lg select-none" key={index}>
                  {index === 0 ? <><span className="text-lg flex items-center justify-center gap-2"> <FaTrophy className=" text-yellow-400"/> 1st </span> </> : 
                    index === 1 ? <><span className="text-lg flex items-center justify-center gap-2"> <FaTrophy className=" text-gray-300"/> 2nd </span> </> : index === 2 ? 
                    <><span className="text-lg flex items-center justify-center gap-2"> <FaTrophy className=" text-yellow-700"/> 3rd </span> </>: 
                    <span>{index + 1}th</span>
                  }   
                  <span>{userInfo.user_name}</span> <span>score: {userInfo.score}</span>
                </li>
                )
                
              }
            </ul>
          </div>
        }
    </>
  )
}

export default Leaderboard
