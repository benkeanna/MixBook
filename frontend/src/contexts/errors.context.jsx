import { createContext, useState } from "react";

export const ErrorsContext = createContext({
  getErrors: [],
  postErrors: [],
  setPostErrors: () => {},
  putErrors: [],
  setPutErrors: () => {},
  getErrorHandler: () => {},
});

export const ErrorsProvider = ({ children }) => {
  const getErrorHandler = (error) => {
    console.log("aaaaaa");
    setGetErrors([...getErrors, error]);
  };

  const [getErrors, setGetErrors] = useState([]);
  const [postErrors, setPostErrors] = useState([]);
  const [putErrors, setPutErrors] = useState([]);

  return (
    <ErrorsContext.Provider
      value={{
        getErrors,
        postErrors,
        setPostErrors,
        putErrors,
        setPutErrors,
        getErrorHandler,
      }}
    >
      {children}
    </ErrorsContext.Provider>
  );
};
