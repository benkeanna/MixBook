import "./recipes.styles.scss";
import { useContext } from "react";
import PulseLoader from "react-spinners/PulseLoader";

import { RecipesContext } from "../../contexts/recipes.context";
import { DialogsContext } from "../../contexts/dialogs.contexts";

import RecipeCard from "../recipe-card/recipe-card.component";
import AddRecipe from "../add-recipe/add-recipe.component";

const Recipes = () => {
  const { recipes } = useContext(RecipesContext);
  const { showAddRecipeDialog } = useContext(DialogsContext);

  return (
    <div className="recipes-container">
      {recipes ? (
        recipes.map((recipe) => <RecipeCard key={recipe.id} recipe={recipe} />)
      ) : (
        <PulseLoader />
      )}
      {showAddRecipeDialog && <AddRecipe />}
    </div>
  );
};

export default Recipes;
