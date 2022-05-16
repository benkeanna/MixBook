import { useContext } from "react";

import Button from "../button/button.component";

import { DialogsContext } from "../../contexts/dialogs.contexts";
import { IngredientsContext } from "../../contexts/ingredients.context";

import "./delete-ingredient.styles.scss";

const DeleteIngredient = () => {
  const { deleteIngredientId, setShowDeleteIngredientDialog } =
    useContext(DialogsContext);
  const { deleteIngredientHandler } = useContext(IngredientsContext);
  return (
    <div className="delete-ingredient-container">
      Are you sure?
      <div className="confirm-container">
        <div>
          <Button
            onClick={() => {
              deleteIngredientHandler(deleteIngredientId);
            }}
            type="add"
          >
            yes
          </Button>
        </div>
        <div>
          <Button
            type="add"
            onClick={() => {
              setShowDeleteIngredientDialog(false);
            }}
          >
            no
          </Button>
        </div>
      </div>
    </div>
  );
};

export default DeleteIngredient;
