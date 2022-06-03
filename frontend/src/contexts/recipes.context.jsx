import { createContext, useState, useEffect } from "react";

import getRecipes from "../services/getRecipes.service";
import deleteRecipe from "../services/deleteRecipe.service";
import postRecipe from "../services/postRecipe.service";

export const RecipesContext = createContext({
  initRecipes: [],
  recipes: [],
  setRecipes: () => {},
  deleteRecipeHandler: () => {},
  addEventListener: () => {},
});

export const RecipesProvider = ({ children }) => {
  const [initRecipes, setInitRecipes] = useState([]);
  const [recipes, setRecipes] = useState();
  const [render, setRender] = useState(false);

  const deleteRecipeHandler = (id) => {
    deleteRecipe(id);
    setRender(!render);
  };

  const addRecipeHandler = (recipe) => {
    postRecipe(recipe);
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
        deleteRecipeHandler,
        addRecipeHandler,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
