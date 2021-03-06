import { useContext } from "react";
import BarLoader from "react-spinners/BarLoader";

import { IngredientsContext } from "../../contexts/ingredients.context";
import { DialogsContext } from "../../contexts/dialogs.contexts";
import { ErrorsContext } from "../../contexts/errors.context";

import IngredientManage from "../ingredient-manage/ingredient-manage.component";
import AddIngredient from "../add-ingredient/add-ingredient.component";
import EditIngredient from "../edit-ingredient/edit-ingredient.component";
import DeleteIngredient from "../delete-ingredient/delete-ingredient.component";

import "./ingredients-manage.styles.scss";

const IngredientsManage = () => {
  const { ingredients } = useContext(IngredientsContext);
  const {
    showAddIngredientDialog,
    showEditIngredientDialog,
    showDeleteIngredientDialog,
  } = useContext(DialogsContext);
  const { error } = useContext(ErrorsContext);
  return (
    <>
      <div className="desc">
        <span>Name</span>
        <span>Description</span>
        <span>Units</span>
        <span>Edit</span>
        <span>Delete</span>
      </div>
      <div className="ingredients-manage-container">
        {ingredients.length > 0
          ? ingredients.map((ingredient) => (
              <IngredientManage key={ingredient.id} ingredient={ingredient} />
            ))
          : typeof error !== "undefined" && <BarLoader />}
        {showAddIngredientDialog && <AddIngredient />}
        {showEditIngredientDialog && <EditIngredient />}
        {showDeleteIngredientDialog && <DeleteIngredient />}
        {typeof error !== "undefined" && <p>Backend not available atm</p>}
      </div>
    </>
  );
};

export default IngredientsManage;
