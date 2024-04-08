import Button from "./Button";
import Input from "./Input";

function QuizForm() {
  return (
    <form className="bg-cyan-900 rounded-md flex flex-col gap-6 p-6 md:px-12 md:py-8">
      <h3 className="text-white text-xl font-semibold mb-3">
        Adjust Your Quiz:
      </h3>
      <Input name="duration" id="duration" type="number">
        Quiz duration
      </Input>
      <Button type="secondry">Start the quiz</Button>
    </form>
  );
}

export default QuizForm;
