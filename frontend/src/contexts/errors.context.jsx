import { createContext, useState } from "react";

export const ErrorsContext = createContext({
  error: null,
  setError: () => {},
  errorHandler: () => {},
});

export const ErrorsProvider = ({ children }) => {
  const [error, setError] = useState();

  const errorHandler = (msg) => {
    setError(msg);
  };

  return (
    <ErrorsContext.Provider
      value={{
        error,
        errorHandler,
        setError,
      }}
    >
      {children}
    </ErrorsContext.Provider>
  );
};
