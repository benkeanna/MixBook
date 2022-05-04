import { useContext } from "react";

import { DialogsContext } from "../../contexts/dialogs.contexts";

import EditIngredient from "../edit-ingredient/edit-ingredient.component";

import "./ingredient-manage.styles.scss";

const IngredientManage = ({ ingredient }) => {
  const { setShowEditIngredientDialog, showEditIngredientDialog } =
    useContext(DialogsContext);
  const { name, description, unit } = ingredient;
  return (
    <div className="ingredient-manage-container">
      <span>{name}</span>
      <span>{description}</span>
      <span>{unit}</span>
      <span className="edit"> &#x270E;</span>
      <span
        onClick={() => setShowEditIngredientDialog(true)}
        className="delete"
      >
        &#10005;
      </span>
      {showEditIngredientDialog && <EditIngredient ingredient={ingredient} />}
    </div>
  );
};

export default IngredientManage;
