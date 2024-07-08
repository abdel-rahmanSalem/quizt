import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SigninLayout from "../components/SigninLayout";
import useGlobal from "../contexts/useGlobal";

function Signin() {
  const { navbarHeight } = useGlobal();
  return (
    <>
      <Navbar />
      <div
        className={`flex flex-col justify-center items-center`}
        style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}
      >
        <SigninLayout />
      </div>
      <Footer />
    </>
  );
}

export default Signin;
