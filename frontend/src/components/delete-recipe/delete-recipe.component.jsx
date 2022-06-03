import { useContext } from "react";

import Button from "../button/button.component";

import { RecipesContext } from "../../contexts/recipes.context";

import "./delete-recipe.styles.scss";

const DeleteRecipe = ({ id, setShowDelete, showDelete }) => {
  const { deleteRecipeHandler } = useContext(RecipesContext);
  return (
    <div className="delete-recipe-container">
      <h3>Are you sure?</h3>
      <div className="confirm-container-recipe">
        <Button
          onClick={() => {
            deleteRecipeHandler(id);
            setShowDelete(!showDelete);
          }}
          type="remove"
        >
          Yes
        </Button>
        <Button
          onClick={() => {
            setShowDelete(!showDelete);
          }}
          type="remove"
        >
          No
        </Button>
      </div>
    </div>
  );
};

export default DeleteRecipe;
