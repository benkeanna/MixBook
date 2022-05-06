import { createContext, useState, useEffect, useContext } from "react";

import getIngredients from "../services/getIngredients.service";

import { ErrorsContext } from "./errors.context";

export const IngredientsContext = createContext({
  ingredients: [],
  setIngredients: () => {},
});

export const IngredientsProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);

  const { setGetErrors, getErrors } = useContext(ErrorsContext);
  useEffect(() => {
    getIngredients()
      .then((data) => {
        setIngredients(data);
      })
      .catch((err) => {
        console.log("haf");
        setGetErrors(...getErrors, err);
      });
  }, [setGetErrors, getErrors]);
  return (
    <IngredientsContext.Provider
      value={{
        ingredients,
        setIngredients,
      }}
    >
      {children}
    </IngredientsContext.Provider>
  );
};
