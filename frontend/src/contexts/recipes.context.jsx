import { createContext, useState, useEffect } from "react";

import getRecipes from "../services/getRecipes.service";
import deleteRecipe from "../services/deleteRecipe.service";

export const RecipesContext = createContext({
  initRecipes: [],
  recipes: [],
  setRecipes: () => {},
});

export const RecipesProvider = ({ children }) => {
  const [initRecipes, setInitRecipes] = useState([]);
  const [recipes, setRecipes] = useState();
  const [render, setRender] = useState(false);

  const deleteRecipeHandler = (id) => {
    deleteRecipe(id);
    setRender(!render);
  };

  useEffect(() => {
    getRecipes()
      .then((data) => {
        setInitRecipes(data);
        setRecipes(data);
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [render]);

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
