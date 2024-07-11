import { Link } from "react-router-dom";
import Button from "./ForwardButton";
import { motion } from "framer-motion";

const shapes = [
  {
    id: 1,
    size: "w-20 h-20",
    color: "bg-blue-400",
    delay: 0.2,
    style: "rounded-full",
  },
  {
    id: 2,
    size: "w-0 h-0",
    color: "",
    delay: 0.4,
    style:
      "border-solid border-x-[1.75rem] border-x-transparent border-t-[3.5rem] border-t-red-400",
  },
  {
    id: 3,
    size: "w-20 h-20",
    color: "bg-yellow-400",
    delay: 0.6,
    style: "",
  },
  {
    id: 4,
    size: "w-24 h-24",
    color: "bg-green-400",
    delay: 0.8,
    style: "rounded-full",
  },
  {
    id: 5,
    size: "",
    color: "",
    delay: 1.0,
    style:
      "w-0 h-0 border-solid border-x-[1.25rem] border-x-transparent border-b-[2.5rem] border-b-purple-400",
  },
  {
    id: 6,
    size: "w-16 h-16",
    color: "bg-pink-400",
    delay: 1.2,
    style: "",
  },
];

function HeroSection() {
  return (
    <div className="flex flex-col items-center justify-center relative my-20">
      <h1 className="relative z-10 font-bold text-4xl sm:text-5xl lg:text-7xl text-center tracking-wide">
        Your Only <span className="text-blue-400">Quiz Hub</span>.
      </h1>
      <p className="relative z-10 mt-8 mx-2 text-base lg:text-lg text-center text-neutral-400 max-w-2xl font-medium">
        A one-stop hub for all things quiz-related. Easily create and host
        quizzes or participate in existing ones. Join us and transform your
        quizzing experience now!
      </p>
      <div className="relative z-10 flex justify-center items-center gap-8 mt-10">
        <Link to="/quiz-id">
          <Button type="primary">Join a Quiz</Button>
        </Link>
        <Link to="sign-in">
          <Button type="secondary">Host a Quiz</Button>
        </Link>
      </div>
      {shapes.map((shape) => (
        <motion.div
          key={shape.id}
          className={`${shape.size} ${shape.color} ${shape.style} absolute`}
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 0.6, y: 0 }}
          transition={{
            duration: 1,
            delay: shape.delay,
            repeat: Infinity,
            repeatType: "mirror",
            ease: "easeInOut",
          }}
          style={{
            top: `${Math.random() * 80 + 10}%`,
            left: `${Math.random() * 80 + 10}%`,
          }}
        />
      ))}
    </div>
  );
}

export default HeroSection;
