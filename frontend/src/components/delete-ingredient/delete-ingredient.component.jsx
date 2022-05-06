import { useContext } from "react";

import Button from "../button/button.component";

import { DialogsContext } from "../../contexts/dialogs.contexts";

import deleteIngredient from "../../services/deleteIngredient.service";

import "./delete-ingredient.styles.scss";

const DeleteIngredient = () => {
  const { setShowDeleteIngredientDialog, deleteIngredientId } =
    useContext(DialogsContext);
  return (
    <div className="delete-ingredient-container">
      Are you sure?
      <div className="confirm-container">
        <div>
          <Button
            onClick={() => {
              deleteIngredient(deleteIngredientId)
                .then(() => {
                  setShowDeleteIngredientDialog(false);
                })
                .catch((err) => {
                  console.log(err);
                });
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
