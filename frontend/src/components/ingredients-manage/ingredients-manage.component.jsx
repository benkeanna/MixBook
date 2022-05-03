import { useContext } from "react";
import BarLoader from "react-spinners/BarLoader";

import { RecipesContext } from "../../contexts/recipes.context";
import { DialogsContext } from "../../contexts/dialogs.contexts";

import IngredientManage from "../ingredient-manage.component.jsx/ingredient-manage.component";
import AddIngredient from "../add-ingredient/add-ingredient.component";

import "./ingredients-manage.styles.scss";

const IngredientsManage = () => {
  const { ingredients } = useContext(RecipesContext);
  const { showAddIngredientDialog } = useContext(DialogsContext);
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
        {ingredients ? (
          ingredients.map((ingredient) => (
            <IngredientManage key={ingredient.id} ingredient={ingredient} />
          ))
        ) : (
          <BarLoader />
        )}
        {showAddIngredientDialog && <AddIngredient />}
      </div>
    </>
  );
};

export default IngredientsManage;
