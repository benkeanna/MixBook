import { createContext, useContext, useState } from "react";
import { RecipesContext } from "./recipes.context";

// stack for filtering ingredients
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

  /**
   *
   * @param {string} ingredient
   * @description adds an ingredient to the filter stack and filters the recipes
   */
  const addIngredient = (ingredient) => {
    filterIngredients.push(ingredient.toLowerCase());
    filterRecipes();
  };

  /**
   *
   * @param {string} ingredient
   * @description removes an ingredient from the filter stack and filters the recipes
   */
  const removeIngredient = (ingredient) => {
    filterIngredients.pop(ingredient.toLowerCase());
    filterRecipes();
  };

  /**
   * @description filter the ingredients and set the recipes to the filtered recipes
   */
  const filterRecipes = () => {
    if (filterIngredients.length === 0) {
      setRecipes(initRecipes);
    } else {
      const filteredRecipes = initRecipes.filter((recipe) => {
        const recipeIngredients = recipe.ingredients.map((ingredient) => {
          return ingredient.name.toLowerCase();
        });
        return recipeIngredients.some((ingredient) => {
          return filterIngredients.includes(ingredient.toLowerCase());
        });
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
