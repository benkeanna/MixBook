import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

import Button from "../button/button.component";
import DeleteRecipe from "../delete-recipe/delete-recipe.component";
import EditRecipe from "../edit-recipe/edit-recipe.component";

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
      <Link to="/">
        <Button type="add">Back to homepage</Button>
      </Link>

      <Button
        type="add"
        onClick={() => {
          setShowDelete(true);
        }}
      >
        Remove recipe
      </Button>
      <Button
        type="add"
        onClick={() => {
          setShowEdit(true);
        }}
      >
        Edit Recipe
      </Button>
      <h1>{recipe?.name}</h1>

      {showDelete && (
        <DeleteRecipe
          id={intId}
          showDelete={showDelete}
          setShowDelete={setShowDelete}
        />
      )}
      {showEdit && (
        <EditRecipe
          recipe={recipe}
          showEdit={showEdit}
          setShowEdit={setShowEdit}
        />
      )}
    </div>
  );
};

export default Detail;
