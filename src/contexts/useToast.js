import { useContext } from "react";
import { ToastContext } from "./ToastProvider";

export default function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined)
    throw new Error("ToastContext was used outside of the ToastProvider");
  return context;
}
