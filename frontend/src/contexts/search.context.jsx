import { createContext, useContext, useState } from "react";

import { RecipesContext } from "./recipes.context";

export const SearchContext = createContext({
  search: "",
  setSearch: () => {},
  searchRecipes: () => {},
});

export const SearchProvider = ({ children }) => {
  const { setRecipes, initRecipes } = useContext(RecipesContext);

  const searchRecipes = (text) => {
    const filteredRecipes = initRecipes.filter((recipe) => {
      return recipe.name.toLowerCase().includes(text.toLowerCase());
    });
    setRecipes(filteredRecipes);
  };

  const [search, setSearch] = useState("");
  return (
    <SearchContext.Provider value={{ search, setSearch, searchRecipes }}>
      {children}
    </SearchContext.Provider>
  );
};
