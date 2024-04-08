import { Link } from "react-router-dom";
import Button from "../components/Button";
import HeaderText from "../components/HeaderText";
import { useUser } from "../contexts/UserContext";

function Home() {
  const { notify } = useUser();
  function handleHost() {
    notify("This section is under development yet :(", "top-right", "info");
  }
  return (
    <>
      <HeaderText>Hi there, Welcome to our Quiz Application</HeaderText>
      <div className="flex justify-between items-center gap-8">
        <Link to="/new-user">
          <Button type="primary">Join a Quiz</Button>
        </Link>
        <Link>
          <Button type="secondary" onClick={handleHost}>
            Host a Quiz
          </Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
