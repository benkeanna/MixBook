import { createContext, useState, useEffect } from "react";
import getRecipes from "../services/getRecipes.service";

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

    fetch("https://6257bc2c0c918296a489cfe1.mockapi.io/api/ingredients")
      .then((data) => {
        if (!data.ok) {
          throw new Error(data.statusText);
        }
        return data.json();
      })
      .then((ingredientsData) => {
        setIngredients(ingredientsData);
      })
      .catch((err) => console.log(err));
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
