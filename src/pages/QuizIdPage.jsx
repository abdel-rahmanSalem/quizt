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

      <form className="flex gap-2 flex-col md:flex-row" onSubmit={handleSubmit}>
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
      <div className="flex items-center mt-12 mb-3">
        <hr className="w-16 border-gray-300" />
        <p className="mx-4 text-gray-500 font-semibold">OR</p>
        <hr className="w-16 border-gray-300" />
      </div>
      <button
        className="border border-green-500 text-green-500 hover:text-white hover:bg-green-500 font-semibold py-2 px-4 rounded shadow"
        onClick={() => checkQuizId("123456")}
      >
        Demo
      </button>
    </>
  );
}

export default QuizId;
