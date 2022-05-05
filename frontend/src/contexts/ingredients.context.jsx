import { createContext, useState, useEffect } from "react";

import getIngredients from "../services/getIngredients.service";

export const IngredientsContext = createContext({
  ingredients: [],
  setIngredients: () => {},
});

export const IngredientsProvider = ({ children }) => {
  const [ingredients, setIngredients] = useState([]);
  useEffect(() => {
    getIngredients()
      .then((data) => {
        setIngredients(data);
      })
      .catch((err) => {
        console.log("hello");
      });
  }, []);
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
