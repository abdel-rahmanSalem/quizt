function SigninText() {
  return (
    <div>
      <h1 className="text-xl font-bold">Welcome Back!</h1>
      <span className="text-xs text-gray-600">
        Don&apos;t have an account?
        <button className="ml-1 underline text-blue-500 hover:text-blue-700 focus:outline-none">
          Sign Up
        </button>
      </span>
    </div>
  );
}

export default SigninText;
