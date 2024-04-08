import Button from "../components/Button";
import Input from "../components/Input";

function QuestionForm() {
  return (
    <form className="bg-cyan-900 rounded-md flex flex-col gap-6 p-6 md:px-12 md:py-8">
      <h3 className="text-white text-xl font-semibold mb-3">
        Add Your Question Data:
      </h3>
      <div className="flex flex-col md:flex-row md:gap-3">
        <Input
          name="question"
          id="question"
          type="text"
          className="w-full mb-3 md:mb-0 md:w-3/4"
        >
          Question
        </Input>
        <Input
          name="points"
          id="points"
          type="number"
          className="w-full md:w-1/4"
        >
          Points
        </Input>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input name="optionOne" id="optionOne" type="text">
          Option one
        </Input>
        <Input name="optionTwo" id="optionTwo" type="text">
          Option two
        </Input>
        <Input name="optionThree" id="optionThree" type="text">
          Option three
        </Input>
        <Input name="optionFour" id="optionFour" type="text">
          Option four
        </Input>
      </div>
      <div className="flex justify-between items-center gap-2 md:gap-0">
        <div className="relative">
          <select
            id="correctOption"
            className="block appearance-none bg-white border border-gray-300 text-gray-800 py-2 px-4 pr-8 rounded-md leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
          >
            <option value="">Correct Option</option>
            <option value="0">Option 1</option>
            <option value="1">Option 2</option>
            <option value="2">Option 3</option>
            <option value="3">Option 4</option>
          </select>
          <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
            <svg
              className="fill-current h-4 w-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                fillRule="evenodd"
                d="M10 12a1 1 0 0 1-.707-.293l-4-4a1 1 0 0 1 1.414-1.414L10 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414l-4 4A1 1 0 0 1 10 12z"
              />
            </svg>
          </div>
        </div>
        <Button type="primary">Add Question</Button>
      </div>
    </form>
  );
}

export default QuestionForm;
