import { Link } from "react-router-dom";
import Button from "../components/Button";
import HeaderText from "../components/HeaderText";

function Home() {
  return (
    <>
      <HeaderText>Hi there, Welcome to our Quiz Application</HeaderText>
      <div className="flex justify-between items-center gap-8">
        <Link to="/new-user">
          <Button type="primary">Join a Quiz</Button>
        </Link>
        <Link to="/login">
          <Button type="secondary">Host a Quiz</Button>
        </Link>
      </div>
    </>
  );
}

export default Home;
