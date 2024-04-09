import { createContext, useContext } from "react";
import PropTypes from "prop-types";

const HosterContext = createContext();

function HosterProvider({ children }) {
  return <HosterContext.Provider value={{}}>{children}</HosterContext.Provider>;
}

function useHoster() {
  const context = useContext(HosterContext);
  if (context === undefined)
    throw new Error("HosterContext was used outside of the QuizProvider");
  return context;
}

HosterProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

// eslint-disable-next-line react-refresh/only-export-components
export { HosterProvider, useHoster };
