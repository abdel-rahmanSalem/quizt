import HeroActionButtons from "./HeroActionButtons";
import HeroText from "./HeroText";
import ShapesMotion from "../ShapesMotion";

function HeroSection() {
  return (
    <div className="relative">
      <div className="flex flex-col items-center justify-center my-20">
        <HeroText />
        <HeroActionButtons />
      </div>
      <ShapesMotion />
    </div>
  );
}

export default HeroSection;
