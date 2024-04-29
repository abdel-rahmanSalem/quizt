import { useEffect, useState } from "react";
import HeaderText from "../components/HeaderText";
import { useNavigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";
import Button from "../components/Button";
import Loader from "../components/Loader";

function QuizId() {
  const [id, setId] = useState("");
  const { status, checkQuizId } = useUser();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();
    checkQuizId(id);
    setId("");
  }
  useEffect(() => {
    if (status === "quizLoaded") navigate("/new-user", { replace: true });
  }, [status, navigate]);

  if (status === "loading") return <Loader>Entering the quiz...</Loader>;

 
  return (
    <>

      <HeaderText>Enter your quiz ID: </HeaderText>

      <form className="flex gap-2 flex-col md:flex-row "  onSubmit={handleSubmit}>
        <input
          autoFocus
          maxLength="20"
          className="bg-white border rounded-lg text-black focus:text-black px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500/80"
          name="quizId"
          type="text"
          placeholder="27364...."
          value={id}
          onChange={(e) => setId(e.target.value)}
        />
        <Button type="primary">Join</Button>
      </form>
      <div className="flex items-center justify-between my-4">
        <span className="h-1 w-full bg-slate-400"></span>
        <span>Or</span>
        <span className="h-1 w-full bg-slate-400"></span>
      </div>
      <div className="mt-6 w-[20rem] flex items-center">
        <button className="underline-offset-4 max-w-max mx-auto bg-green-600 rounded-md px-3 py-2" type="submit" onClick={() => checkQuizId("123456")}> 
            <span className="text-white ">Demo</span>
        </button>
      </div>
    </>
  );
}

export default QuizId;
