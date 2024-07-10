import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import useToast from "../contexts/useToast";
import useAuth from "../contexts/useAuth";
import { TailSpin } from "react-loader-spinner";

function isValidEmail(email) {
  const regex = /\S+@\S+\.\S+/;
  return regex.test(email);
}

function SigninForm() {
  const { loginViaEmail, isLoading } = useAuth();
  const { notify } = useToast();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();

    if (!email || !password) {
      !email
        ? notify("Email is required.", "top-right", "warn")
        : notify("Password is required.", "top-right", "warn");
      return;
    }

    if (!isValidEmail(email)) {
      notify("Email is not valid.", "top-right", "warn");
      return;
    }

    loginViaEmail({ email, password });
  }

  function handleEmail(e) {
    setEmail(e.target.value);
  }

  function handlePassword(e) {
    setPassword(e.target.value);
  }

  return (
    <form onSubmit={handleSubmit} noValidate>
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
            type="button"
            disabled={isLoading}
            className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-600 hover:text-gray-800 focus:outline-none"
            onClick={() => setShowPassword((show) => !show)}
          >
            {showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}
          </button>
        </div>
        <button
          type="button"
          disabled={isLoading}
          className="text-xs text-gray-600 focus:outline-none"
        >
          Forgot Password?
        </button>
      </div>
      <button
        type="submit"
        disabled={isLoading}
        className="w-full flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 rounded-md focus:shadow-outline focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-150 ease-in-out"
      >
        {isLoading ? (
          <TailSpin
            ariaLabel="tail-spin-loading"
            height="23"
            width="23"
            color="white"
            visible={true}
            radius="1"
            wrapperStyle={{}}
            wrapperClass=""
          />
        ) : (
          "Sign In"
        )}
      </button>
    </form>
  );
}

export default SigninForm;
