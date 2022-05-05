import { useContext } from "react";

import { DialogsContext } from "../../contexts/dialogs.contexts";

import "./ingredient-manage.styles.scss";

const IngredientManage = ({ ingredient }) => {
  const { handleEditIngredientDialog } = useContext(DialogsContext);
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
          console.log("hello");
        }}
      >
        {" "}
        &#x270E;
      </span>
      <span className="delete">&#10005;</span>
    </div>
  );
};

export default IngredientManage;
