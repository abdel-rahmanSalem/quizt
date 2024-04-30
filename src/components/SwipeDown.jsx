import { useState, useEffect } from "react";
import { MdDoubleArrow } from "react-icons/md";

const SwiperDown = () => {
  const [isFloating, setIsFloating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFloating((prevState) => !prevState);
    }, 200);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className={`rotate-90 relative transition-transform transform text-gray-300 ${
        isFloating ? "translate-y-2" : ""
      }`}
    >
      <MdDoubleArrow size={40} />
    </div>
  );
};

export default SwiperDown;
