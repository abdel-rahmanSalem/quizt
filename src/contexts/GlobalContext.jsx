import { createClient } from "@supabase/supabase-js";
import { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const supabaseUrl = import.meta.env.VITE_REACT_APP_SUPABASE_API_URL;
const supabaseKey = import.meta.env.VITE_REACT_APP_ANON_API_KEY;
const quiztServer = createClient(supabaseUrl, supabaseKey);

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const [navbarHeight, setNavbarHeight] = useState(0);

  return (
    <GlobalContext.Provider
      value={{
        quiztServer,
        navbarHeight,
        setNavbarHeight,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

function useGlobal() {
  const context = useContext(GlobalContext);
  if (context === undefined)
    throw new Error("GlobalContext was used outside of the QuizProvider");
  return context;
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export { GlobalProvider, useGlobal };
