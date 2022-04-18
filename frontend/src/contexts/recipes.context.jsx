import { createContext, useState, useEffect } from "react";
import getRecipes from "../services/getRecipes.service";
import getIngredients from "../services/getIngredients.service";

export const RecipesContext = createContext({
  initRecipes: [],
  recipes: [],
  setRecipes: () => {},
  ingredients: [],
  setIngredients: () => {},
});

export const RecipesProvider = ({ children }) => {
  const [initRecipes, setInitRecipes] = useState([]);
  const [recipes, setRecipes] = useState();
  const [ingredients, setIngredients] = useState();

  useEffect(() => {
    getRecipes().then((data) => {
      setInitRecipes(data);
      setRecipes(data);
    });

    getIngredients().then((data) => {
      setIngredients(data);
    });
  }, []);

  return (
    <RecipesContext.Provider
      value={{
        initRecipes,
        recipes,
        setRecipes,
        ingredients,
        setIngredients,
      }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
