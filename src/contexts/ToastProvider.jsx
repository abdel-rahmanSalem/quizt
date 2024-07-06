import { createContext } from "react";
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

ToastProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { ToastProvider, ToastContext };
