import { DiGithubBadge } from "react-icons/di";
import Logo from "./Logo";
import SigninForm from "./SigninForm";

function SigninLayout() {
  return (
    <div className="xl:flex xl:w-8/12 xl:px-0">
      <div className="flex flex-col gap-4 bg-white p-10 mx-5 rounded-md xl:mx-0.5 xl:w-6/12 xl:rounded-sm">
        <div className="text-5xl font-semibold">
          <Logo />
        </div>
        <div>
          <h1 className="text-xl font-bold">Welcome Back!</h1>
          <span className="text-xs text-gray-600">
            Don&apos;t have an account?
            <button className="ml-1 underline text-blue-500 hover:text-blue-700 focus:outline-none">
              Sign Up
            </button>
          </span>
        </div>
        <SigninForm />
        <div className="flex items-center self-center">
          <hr className="w-16 border-gray-300" />
          <p className="mx-4 text-gray-500 font-semibold text-sm">Or</p>
          <hr className="w-16 border-gray-300" />
        </div>
        <button className="flex items-center justify-center space-x-2 border border-gray-300 rounded-md py-2 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-gray-300 transition duration-150 ease-in-out">
          <DiGithubBadge className="w-7 h-7" />
          <span className="font-semibold text-gray-700 text-sm">
            Sign In with Github
          </span>
        </button>
      </div>
      <div className="hidden xl:flex w-full justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-20">
        <span className="text-4xl text-white font-bold">
          &quot;Host, Share, Engage&quot;
        </span>
      </div>
    </div>
  );
}

export default SigninLayout;
