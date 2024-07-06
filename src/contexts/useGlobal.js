import { useContext } from "react";
import { GlobalContext } from "./GlobalProvider";

export default function useGlobal() {
  const context = useContext(GlobalContext);
  if (context === undefined)
    throw new Error("GlobalContext was used outside of the QuizProvider");
  return context;
}
