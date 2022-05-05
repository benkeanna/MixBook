import { createContext, useState, useEffect } from "react";
import getRecipes from "../services/getRecipes.service";

export const RecipesContext = createContext({
  initRecipes: [],
  recipes: [],
  setRecipes: () => {},
});

export const RecipesProvider = ({ children }) => {
  const [initRecipes, setInitRecipes] = useState([]);
  const [recipes, setRecipes] = useState();

  useEffect(() => {
    getRecipes()
      .then((data) => {
        setInitRecipes(data);
        setRecipes(data);
      })
      .catch((err) => {
        console.log("hello");
      });
  }, []);

  return (
    <RecipesContext.Provider
      value={{
        initRecipes,
        recipes,
        setRecipes,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
