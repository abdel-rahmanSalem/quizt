import Navbar from "../components/Navbar";
import HomePageHeader from "../components/HomePageHeader";
import Instructions from "../components/Instructions";
import Footer from "../components/Footer";
import ToastCont from "../components/ToastCont";

function Home() {
  return (
    <>
      <div className="bg-gradient-to-b from-gray-900 to-gray-950">
        <ToastCont />
        <Navbar />
        <HomePageHeader />
        <Instructions />
      </div>
      <Footer />
    </>
  );
}

export default Home;
