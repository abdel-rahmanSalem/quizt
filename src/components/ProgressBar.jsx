import { useUser } from "../contexts/UserContext";

function ProgressBar() {
  const { questionsIndexor, quiz } = useUser();
  const { num_questions } = quiz;
  return (
    <header>
      <div className="relative h-2 bg-gray-200 rounded-full overflow-hidden mb-2">
        <div
          className="absolute top-0 left-0 h-full bg-blue-600"
          style={{
            width: `${((questionsIndexor + 1) / num_questions) * 100}%`,
          }}
        ></div>
      </div>
      <div className="flex justify-between items-center mb-12">
        <p className="text-sm text-gray-200">
          Question{" "}
          <strong>
            {questionsIndexor + 1} / {num_questions}
          </strong>
        </p>
        {/* <strong className="text-sm text-gray-300">120 / {max_points}</strong> */}
        <strong className="text-gray-300">ツ</strong>
      </div>
    </header>
  );
}

export default ProgressBar;
