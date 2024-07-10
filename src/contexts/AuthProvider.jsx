import { createContext, useState } from "react";
import PropTypes from "prop-types";
import useGlobal from "./useGlobal";
import useToast from "./useToast";
import { useNavigate } from "react-router-dom";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const { quiztServer } = useGlobal();
  const { notify } = useToast();

  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  async function loginViaEmail({ email, password }) {
    setIsLoading(true);

    try {
      const { data, error } = await quiztServer.auth.signInWithPassword({
        email,
        password,
      });

      if (data?.user) {
        // console.log(data);
        navigate("/dashboard");
      }

      if (error) {
        notify("Wrong email or password.", "top-right", "error");
      }
    } catch (error) {
      notify(
        "An unexpected error occurred. Please try again.",
        "top-right",
        "error"
      );
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <AuthContext.Provider value={{ loginViaEmail, isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthProvider, AuthContext };
