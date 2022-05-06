import { createContext, useState } from "react";

export const ErrorsContext = createContext({
  getErrors: [],
  setGetErrors: () => {},
  postErrors: [],
  setPostErrors: () => {},
  putErrors: [],
  setPutErrors: () => {},
});

export const ErrorsProvider = ({ children }) => {
  const [getErrors, setGetErros] = useState([]);
  const [postErrors, setPostErrors] = useState([]);
  const [putErrors, setPutErrors] = useState([]);

  return (
    <ErrorsContext.Provider
      value={{
        getErrors,
        setGetErros,
        postErrors,
        setPostErrors,
        putErrors,
        setPutErrors,
      }}
    >
      {children}
    </ErrorsContext.Provider>
  );
};
