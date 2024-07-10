import Logo from "./Logo";
import SigninForm from "./SigninForm";
import SigninText from "./SigninText";
import GithubLoginBtn from "./GithubLoginBtn";
import SigninSide from "./SigninSide";
import DividerWithText from "./DividerWithText";

function SigninLayout() {
  return (
    <div className="xl:flex xl:w-8/12 xl:px-0">
      <div className="flex flex-col gap-4 bg-white p-10 mx-5 rounded-md xl:mx-0.5 xl:w-6/12 xl:rounded-sm">
        <div className="text-5xl font-semibold">
          <Logo />
        </div>
        <SigninText />
        <SigninForm />
        <div className="flex items-center self-center text-sm">
          <DividerWithText>Or</DividerWithText>
        </div>
        <GithubLoginBtn />
      </div>
      <SigninSide />
    </div>
  );
}

export default SigninLayout;
