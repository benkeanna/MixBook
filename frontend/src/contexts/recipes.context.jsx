import { createContext, useState, useEffect } from "react";

import getRecipes from "../services/getRecipes.service";
import deleteRecipe from "../services/deleteRecipe.service";
import postRecipe from "../services/postRecipe.service";
import putRecipe from "../services/putRecipe.service";

export const RecipesContext = createContext({
  initRecipes: [],
  recipes: [],
  setRecipes: () => {},
  deleteRecipeHandler: () => {},
  addEventListener: () => {},
  editRecipeHandler: () => {},
});

export const RecipesProvider = ({ children }) => {
  const [initRecipes, setInitRecipes] = useState([]);
  const [recipes, setRecipes] = useState();
  const [render, setRender] = useState(false);

  const deleteRecipeHandler = (id) => {
    deleteRecipe(id).then(() => {
      setRender(!render);
    });
  };

  const addRecipeHandler = (recipe) => {
    postRecipe(recipe).then(setRender(!render));
  };

  const editRecipeHandler = (recipe) => {
    putRecipe(recipe).then(setRender(!render));
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
        editRecipeHandler,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
