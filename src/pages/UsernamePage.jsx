import HeaderText from "../components/HeaderText";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import Loader from "../components/Loader";
import { useUser } from "../contexts/UserContext";
import { useEffect, useState } from "react";

function Username() {
  const [displayName, setDisplayName] = useState("");
  const { submitNewUser, status } = useUser();
  const [isBtnDisabled, setIsBtnDisabled] = useState(false);

  const navigate = useNavigate();

  async function handleSubmit(e) {
    setIsBtnDisabled(true);

    e.preventDefault();

    await submitNewUser(displayName);

    setIsBtnDisabled(false);
  }

  useEffect(() => {
    if (status === "userLoaded") navigate("/quiz", { replace: true });
  }, [status, navigate]);

  if (status === "loading") return <Loader>Entering the quiz...</Loader>;

  return (
    <>
      <HeaderText>What is your name?</HeaderText>

      <form className="flex gap-2 flex-col md:flex-row" onSubmit={handleSubmit}>
        <input
          autoFocus
          maxLength="20"
          className="bg-white text-gray-800 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          name="username"
          type="text"
          placeholder="jawafa...."
          value={displayName}
          onChange={(e) => setDisplayName(e.target.value)}
        />

        <Button type="primary" isDisabled={isBtnDisabled}>
          Next
        </Button>
      </form>
    </>
  );
}

export default Username;
