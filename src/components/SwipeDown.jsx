import { useState, useEffect } from "react";
import { MdDoubleArrow } from "react-icons/md";

const SwiperDown = () => {
  const [isFloating, setIsFloating] = useState(false);
  const [showSwiper, setShowSwiper] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 120) {
        setShowSwiper(false);
      } else {
        setShowSwiper(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFloating((prevState) => !prevState);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {showSwiper && (
        <div className="fixed bottom-0 left-1/2 transform -translate-x-1/2 text-gray-300 select-none">
          <p className="text-lg font-semibold">How to use Quizt?</p>
          <div
            className={`rotate-90 transition-transform transform    ${
              isFloating ? "translate-y-2" : ""
            }`}
          >
            <MdDoubleArrow size={40} />
          </div>
        </div>
      )}
    </>
  );
};

export default SwiperDown;
