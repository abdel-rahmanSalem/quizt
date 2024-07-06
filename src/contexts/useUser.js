import { useContext } from "react";
import { UserContext } from "./UserProvider";

export default function useUser() {
  const context = useContext(UserContext);
  if (context === undefined)
    throw new Error("UserContext was used outside of the QuizProvider");
  return context;
}
