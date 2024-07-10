import { DiGithubBadge } from "react-icons/di";
function GithubLoginBtn() {
  return (
    <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-md py-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-150 ease-in-out">
      <DiGithubBadge className="w-7 h-7" />
      <span className="font-semibold text-gray-700 text-sm">
        Sign In with Github
      </span>
    </button>
  );
}

export default GithubLoginBtn;
