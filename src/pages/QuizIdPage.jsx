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
      <form className="flex gap-2" onSubmit={handleSubmit}>
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
        <Button type="primary">Join</Button>
      </form>
    </>
  );
}

export default QuizId;
