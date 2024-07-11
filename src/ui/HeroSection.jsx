import { Link } from "react-router-dom";
import Button from "./ForwardButton";

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center my-24">
      <h1 className="text-4xl sm:text-5xl lg:text-7xl text-center tracking-wide">
        Your Only <span className="text-green-500">Quiz Hub</span>!
      </h1>
      <p className="mt-8 mx-2 text-base lg:text-lg text-center text-neutral-400 max-w-2xl font-medium">
        your one-stop hub for all things quiz-related. Easily create and host
        quizzes or participate in existing ones. Join us and transform your
        quizzing experience!
      </p>
      <div className="flex justify-center items-center gap-8 mt-10">
        <Link to="/quiz-id">
          <Button type="primary">Join a Quiz</Button>
        </Link>
        <Link to="sign-in">
          <Button type="secondary">Host a Quiz</Button>
        </Link>
      </div>
    </div>
  );
}

export default HeroSection;
