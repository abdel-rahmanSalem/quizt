import { useGlobal } from "../contexts/GlobalContext";
import { Link } from "react-router-dom";
import Button from "../components/Button";
import HeaderText from "../components/HeaderText";
import SwipeDown from "../components/SwipeDown";

function HomePageHeader() {
  const { navbarHeight, notify } = useGlobal();

  return (
    <>
      <div
        className="flex flex-col justify-center items-center"
        style={{ minHeight: `calc(100vh - ${navbarHeight}px)` }}
      >
        <HeaderText>Welcome to Quizt!</HeaderText>
        <div className="flex justify-center items-center gap-8 mt-8">
          <Link to="/quiz-id">
            <Button type="primary">Join a Quiz</Button>
          </Link>
          <Link>
            <Button
              type="secondary"
              onClick={() =>
                notify(
                  "Feature under development. Thanks for your patience!",
                  "top-right",
                  "info"
                )
              }
            >
              Host a Quiz
            </Button>
          </Link>
        </div>
      </div>
      <SwipeDown />
    </>
  );
}

export default HomePageHeader;
