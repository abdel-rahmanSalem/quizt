import Option from "./Option";
import { useUser } from "../contexts/UserContext";

function Options() {
  const { currentQuestion } = useUser();
  const { options } = currentQuestion;

  return (
    <div className="flex flex-col gap-5 rounded-lg shadow-md">
      {options.map((option, index) => (
        <Option key={index} index={index} option={option} />
      ))}
    </div>
  );
}

export default Options;
