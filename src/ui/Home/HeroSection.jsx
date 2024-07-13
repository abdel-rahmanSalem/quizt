import HeroActionButtons from "./HeroActionButtons";
import HeroText from "./HeroText";
import ShapesMotion from "../ShapesMotion";

function HeroSection() {
  return (
    <section
      id="#"
      className="relative flex h-screen flex-col items-center justify-center md:pt-16"
    >
      <div className="flex h-full flex-col justify-center">
        <HeroText />
        <HeroActionButtons />
        <ShapesMotion />
      </div>
    </section>
  );
}

export default HeroSection;
