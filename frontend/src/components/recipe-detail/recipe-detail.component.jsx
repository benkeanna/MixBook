import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../button/button.component";
import DeleteRecipe from "../delete-recipe/delete-recipe.component";

import { RecipesContext } from "../../contexts/recipes.context";

const Detail = () => {
  const [recipe, setRecipe] = useState();
  const [showDelete, setShowDelete] = useState(false);
  const [showEdit, setShowEdit] = useState(false);

  const { id } = useParams();
  let intId = parseInt(id);
  const { initRecipes } = useContext(RecipesContext);

  useEffect(() => {
    setRecipe(
      initRecipes.find((recipeInit) => {
        return recipeInit.id === intId;
      })
    );
  }, [intId, initRecipes]);
  return (
    <div>
      <Button
        type="add"
        onClick={() => {
          setShowDelete(true);
        }}
      >
        Remove recipe
      </Button>
      <h1>{recipe?.name}</h1>

      {showDelete && (
        <DeleteRecipe
          id={intId}
          showDelete={showDelete}
          setShowDelete={setShowDelete}
        />
      )}
    </div>
  );
};

export default Detail;
