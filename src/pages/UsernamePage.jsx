import HeaderText from "../components/HeaderText";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import { useUser } from "../contexts/UserContext";
import { useEffect, useState } from "react";

function Username() {
  const [displayName, setDisplayName] = useState("");
  const { submitNewUser, isValidUser } = useUser();

  const navigate = useNavigate();

  function handleSubmit(e) {
    e.preventDefault();

    submitNewUser(displayName);
  }

  useEffect(() => {
    if (isValidUser) navigate("/quiz", { replace: true });
  }, [isValidUser, navigate]);

  return (
    <>
      <HeaderText>What is your name?</HeaderText>

      <form className="flex gap-2" onSubmit={handleSubmit}>
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

        <Button type="primary">Next</Button>
      </form>
    </>
  );
}

export default Username;
