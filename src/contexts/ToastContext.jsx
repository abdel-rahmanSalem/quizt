import { createContext, useContext } from "react";
import PropTypes from "prop-types";
import { toast } from "react-toastify";

const ToastContext = createContext();

function ToastProvider({ children }) {
  const notify = (message, pos, type) =>
    toast[type](message, {
      position: pos,
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
  return (
    <ToastContext.Provider value={{ notify }}>{children}</ToastContext.Provider>
  );
}

function useToast() {
  const context = useContext(ToastContext);
  if (context === undefined)
    throw new Error("ToastContext was used outside of the ToastProvider");
  return context;
}

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export { ToastProvider, useToast };
