import { createContext, useContext, useState } from "react";
import { RecipesContext } from "./recipes.context";
import recipesData from "../recipes.json";

const filterIngredients = [];

export const FilterContext = createContext({
  addIngredient: () => {},
  removeIngredient: () => {},
  resetFilter: () => {},
  showFilter: false,
  setShowFilter: () => {},
});

export const FilterProvider = ({ children }) => {
  const [showFilter, setShowFilter] = useState(false);
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
    if (filterIngredients.length === 0) {
      setRecipes(recipesData);
    } else {
      const filteredRecipes = recipesData.filter((recipe) => {
        const recipeIngredients = recipe.ingredients;
        const isMatch = recipeIngredients.some((ingredient) =>
          filterIngredients.includes(ingredient.toLowerCase())
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
        showFilter,
        setShowFilter,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};
