import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import SigninForm from "../components/SigninForm";
import { useGlobal } from "../contexts/GlobalContext";

function Signin() {
  const { navbarHeight } = useGlobal();
  return (
    <>
      <Navbar />
      <div
        className={`flex flex-col justify-center items-center`}
        style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}
      >
        <SigninForm />
      </div>
      <Footer />
    </>
  );
}

export default Signin;
