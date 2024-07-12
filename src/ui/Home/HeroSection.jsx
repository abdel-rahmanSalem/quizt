import HeroActionButtons from "./HeroActionButtons";
import HeroText from "./HeroText";
import ShapesMotion from "../ShapesMotion";

function HeroSection() {
  return (
    <>
      <section
        id="#"
        className="h-screen flex flex-col items-center justify-center pt-16  relative"
      >
        <div className="flex flex-col justify-center h-full">
          <HeroText />
          <HeroActionButtons />
        </div>
      </section>
      <ShapesMotion />
    </>
  );
}

export default HeroSection;
