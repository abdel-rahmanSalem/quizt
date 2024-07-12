import HeroSection from "../ui/Home/HeroSection";
import Instructions from "../components/Instructions";

function Home() {
  return (
    <div className="max-w-7xl mx-auto pt-20 mt-16 px-6 text-white">
      <HeroSection />
      <Instructions />
    </div>
  );
}

export default Home;
