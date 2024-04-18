import { useUser } from "../contexts/UserContext";

function Test() {
  const { userTotalPoints, username } = useUser();

  return (
    <>
      <h3>hi, {username}</h3>
      <p>Your Res: {userTotalPoints}</p>
    </>
  );
}

export default Test;
