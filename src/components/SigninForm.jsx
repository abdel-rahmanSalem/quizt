import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { DiGithubBadge } from "react-icons/di";
import Logo from "./Logo";

function SigninForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleEmail(e) {
    setEmail(e.target.value);
  }
  function handlePassword(e) {
    setPassword(e.target.value);
  }
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
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label
              htmlFor="email"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Email
            </label>
            <input
              className="w-full appearance-none border border-gray-300 rounded-md py-1 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
              id="email"
              type="email"
              value={email}
              onChange={handleEmail}
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="password"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Password
            </label>
            <div className="relative flex items-center">
              <input
                className="w-full appearance-none border pr-10 border-gray-300 rounded-md py-1 px-4 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                id="password"
                type={showPassword ? "text" : "password"}
                value={password}
                onChange={handlePassword}
              />
              <button
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
                onClick={() => setShowPassword((show) => !show)}
              >
                {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
              </button>
            </div>
            <button>
              <span className="text-xs text-gray-600 focus:outline-none">
                Forgot Password?
              </span>
            </button>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md focus:shadow-outline focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
          >
            Sign In
          </button>
        </form>
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
      {/* <div className="hidden xl:flex w-full justify-center items-center">
        <span className="text-4xl text-white">
          &quot;Host, Share, Engage&quot;
        </span>
      </div> */}
      <div className="hidden xl:flex w-full justify-center items-center bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 py-20">
        <span className="text-4xl text-white font-bold">
          &quot;Host, Share, Engage&quot;
        </span>
      </div>
    </div>
  );
}

export default SigninForm;
