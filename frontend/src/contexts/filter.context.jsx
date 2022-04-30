import { createContext, useContext, useState } from "react";
import { RecipesContext } from "./recipes.context";

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
  const { setRecipes, initRecipes } = useContext(RecipesContext);

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
      setRecipes(initRecipes);
    } else {
      const filteredRecipes = initRecipes.filter((recipe) => {
        const recipeIngredients = recipe.ingredients;
        return recipeIngredients.some((ingredient) =>
          filterIngredients.includes(ingredient.toLowerCase())
        );
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
