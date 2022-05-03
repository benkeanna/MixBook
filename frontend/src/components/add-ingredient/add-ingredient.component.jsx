import { useContext } from "react";

import { DialogsContext } from "../../contexts/dialogs.contexts";

import "./add-ingredient.styles.scss";

const AddIngredient = () => {
  const { setShowAddIngredientDialog } = useContext(DialogsContext);
  return (
    <div className="add-ingredient-container">
      <h1>přidej novou ingredienci, soudruhu</h1>
      <div onClick={() => setShowAddIngredientDialog(false)} className="close">
        &#10005;
      </div>
    </div>
  );
};

export default AddIngredient;
