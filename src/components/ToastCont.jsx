import { useGlobal } from "../contexts/UserContext";

function ToastCont() {
  const { ToastContainer } = useGlobal();

  return (
    <ToastContainer
      position="top-right"
      autoClose={3000}
      hideProgressBar
      newestOnTop
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme="dark"
    />
  );
}

export default ToastCont;
