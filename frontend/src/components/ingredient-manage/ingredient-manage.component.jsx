import { useContext } from "react";

import { DialogsContext } from "../../contexts/dialogs.contexts";

import "./ingredient-manage.styles.scss";

const IngredientManage = ({ ingredient }) => {
  const { handleEditIngredientDialog, handleDeleteIngredientDialog } =
    useContext(DialogsContext);
  const { name, description, unit } = ingredient;
  return (
    <div className="ingredient-manage-container">
      <span>{name}</span>
      <span>{description}</span>
      <span>{unit}</span>
      <span
        className="edit"
        onClick={() => {
          handleEditIngredientDialog(ingredient);
        }}
      >
        {" "}
        &#x270E;
      </span>
      <span
        onClick={() => {
          handleDeleteIngredientDialog(ingredient.id);
        }}
        className="delete"
      >
        &#10005;
      </span>
    </div>
  );
};

export default IngredientManage;
