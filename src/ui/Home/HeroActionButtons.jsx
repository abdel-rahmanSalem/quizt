import { Link } from "react-router-dom";
import Button from "../ForwardButton";

function HeroActionButtons() {
  return (
    <div className=" z-10 flex justify-center items-center gap-8">
      <Link to="/quiz-id">
        <Button type="primary">Join a Quiz</Button>
      </Link>
      <Link to="sign-in">
        <Button type="secondary">Host a Quiz</Button>
      </Link>
    </div>
  );
}

export default HeroActionButtons;
