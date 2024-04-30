import { useState, useEffect } from "react";
import { MdDoubleArrow } from "react-icons/md";

const SwipeDown = () => {
  const [isFloating, setIsFloating] = useState(false);
  const [showSwiper, setShowSwiper] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 65) {
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
      <div
        className={`fixed bottom-0 left-1/2 transform -translate-x-1/2 text-gray-300 select-none transition-opacity ${
          showSwiper ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      >
        <div className="transition-transform ">
          <p className="text-lg font-semibold">How to use Quizt?</p>
          <div className={`rotate-90  ${isFloating ? "translate-y-4" : ""}`}>
            <MdDoubleArrow size={40} />
          </div>
        </div>
      </div>
    </>
  );
};

export default SwipeDown;
