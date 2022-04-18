import "./recipes.styles.scss";
import { useContext } from "react";
import PulseLoader from "react-spinners/PulseLoader";

import { RecipesContext } from "../../contexts/recipes.context";

import RecipeCard from "../recipe-card/recipe-card.component";

const Recipes = () => {
  const { recipes } = useContext(RecipesContext);

  return (
    <div className="recipes-container">
      {recipes ? (
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
      ) : (
        <PulseLoader />
      )}
    </div>
  );
};

export default Recipes;
