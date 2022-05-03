import { useContext } from "react";
import BarLoader from "react-spinners/BarLoader";

import { RecipesContext } from "../../contexts/recipes.context";

import IngredientManage from "../ingredient-manage.component.jsx/ingredient-manage.component";

import "./ingredients-manage.styles.scss";

const IngredientsManage = () => {
  const { ingredients } = useContext(RecipesContext);
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
      </div>
    </>
  );
};

export default IngredientsManage;
