import { createContext, useState } from "react";

export const ErrorsContext = createContext({
  getErrors: [],
  setGetErrors: () => {},
  postErrors: [],
  setPostErrors: () => {},
});

export const ErrorsProvider = ({ children }) => {
  const [getErrors, setGetErros] = useState([]);
  const [postErrors, setPostErrors] = useState([]);

  return (
    <ErrorsContext.Provider
      value={{
        getErrors,
        setGetErros,
        postErrors,
        setPostErrors,
      }}
    >
      {children}
    </ErrorsContext.Provider>
  );
};
