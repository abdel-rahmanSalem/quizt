import { useEffect } from "react";
import { useUser } from "../contexts/UserContext";

function Timer() {
  const { secondsRemaining, tick } = useUser();

  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

  useEffect(
    function () {
      const id = setInterval(function () {
        tick();
      }, 1000);

      return () => clearInterval(id);
    },
    [tick]
  );

  return (
    <span className="font-bold text-lg">
      {mins < 10 && "0"}
      {mins}:{seconds < 10 && "0"}
      {seconds}
    </span>
  );
}

export default Timer;
