import HeroSection from "../ui/Home/HeroSection";
import Instructions from "../components/Instructions";

function Home() {
  return (
    <div className="mx-auto max-w-7xl px-6 text-white">
      <HeroSection />
      <Instructions />
    </div>
  );
}

export default Home;
