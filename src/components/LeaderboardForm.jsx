import PropTypes from "prop-types";
import { useGlobal } from "../contexts/GlobalContext";
import HeaderText from "../components/HeaderText";
import Button from "../components/Button";
import DemoButton from "../components/DemoButton";
function LeaderboardForm({ id, setId, setIsLoading, setScores }) {
  const { quiztServer, notify } = useGlobal();

  async function getScores(id) {
    if (id.trim().length < 4) {
      notify("Should be more than three characters", "top-right", "warn");
      return;
    }

    setIsLoading(true);
    let { data, error } = await quiztServer
      .from("users")
      .select("score , user_name")
      .eq("quiz_id", id)
      .order("score", { ascending: false });

    if (error) {
      notify("Quiz ID should be a number", "top-right", "error");
      setIsLoading(false);
      setScores([]);
      setId("");
    }

    if (data.length === 0) {
      let { data: isStart, err } = await quiztServer
        .from("quizzes")
        .select("is_start")
        .eq("quiz_id", id)
        .single();
      if (isStart) {
        if (isStart.is_start === true) {
          notify("No one joined this quiz yet", "top-right", "warn");
        } else {
          notify("This Quiz hasn't started yet", "top-right", "warn");
        }
      } else {
        notify("Wrong quiz ID", "top-right", "error");
      }
      if (err) {
        notify(
          "There was an error fetching quiz information",
          "top-right",
          "error"
        );
      }
      setId("");
    }

    if (data) {
      setIsLoading(false);
      setScores(data);
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    getScores(id);
  }
  return (
    <>
      <HeaderText>Enter Quiz ID to show leaderboard</HeaderText>
      <form
        className="flex gap-2 flex-col md:flex-row "
        onSubmit={handleSubmit}
      >
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
      <DemoButton clickHandler={setId} callBack={getScores} />
    </>
  );
}

LeaderboardForm.propTypes = {
  id: PropTypes.string.isRequired,
  setId: PropTypes.func.isRequired,
  setIsLoading: PropTypes.func.isRequired,
  setScores: PropTypes.func.isRequired,
};

export default LeaderboardForm;
