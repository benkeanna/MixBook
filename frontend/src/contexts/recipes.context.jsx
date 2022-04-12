import { createContext, useState, useEffect } from "react";
import recipesData from "../recipes.json";
import ingredientsData from "../ingredients.json";

export const RecipesContext = createContext({
  recipes: [],
  setRecipes: () => {},
  ingredients: [],
  setIngredients: () => {},
});

export const RecipesProvider = ({ children }) => {
  console.log("now");
  const [recipes, setRecipes] = useState(recipesData);
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    setRecipes(recipesData);
    setIngredients(ingredientsData);
  }, []);

  return (
    <RecipesContext.Provider
      value={{
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
