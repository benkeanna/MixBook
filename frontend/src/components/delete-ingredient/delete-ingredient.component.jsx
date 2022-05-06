import { useContext } from "react";

import Button from "../button/button.component";

import { DialogsContext } from "../../contexts/dialogs.contexts";

import "./delete-ingredient.styles.scss";

const DeleteIngredient = () => {
  const { setShowDeleteIngredientDialog } = useContext(DialogsContext);
  return (
    <div className="delete-ingredient-container">
      Are you sure?
      <div className="confirm-container">
        <div>
          <Button type="delete">yes</Button>
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
