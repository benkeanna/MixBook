import { createContext, useContext } from "react";
import { RecipesContext } from "./recipes.context";
import recipesData from "../recipes.json";

const filterIngredients = [];

export const FilterContext = createContext({
  addIngredient: () => {},
  removeIngredient: () => {},
  resetFilter: () => {},
});

export const FilterProvider = ({ children }) => {
  const { setRecipes } = useContext(RecipesContext);

  const addIngredient = (ingredient) => {
    filterIngredients.push(ingredient);
    filterRecipes();
  };

  const removeIngredient = (ingredient) => {
    filterIngredients.pop(ingredient);
    filterRecipes();
  };

  const filterRecipes = () => {
    console.log(filterIngredients);
    if (filterIngredients.length === 0) {
      setRecipes(recipesData);
    } else {
      const filteredRecipes = recipesData.filter((recipe) => {
        const recipeIngredients = recipe.ingredients;
        const isMatch = recipeIngredients.some((ingredient) =>
          filterIngredients.includes(ingredient)
        );
        return isMatch;
      });
      setRecipes(filteredRecipes);
    }
  };

  return (
    <FilterContext.Provider
      value={{
        addIngredient,
        removeIngredient,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
