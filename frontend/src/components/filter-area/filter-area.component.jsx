import "./filter-area.styles.scss";
import IngredientCard from "../ingredient-card/ingredient-card.component";

import { useContext } from "react";
import { RecipesContext } from "../../contexts/recipes.context";

const FilterArea = () => {
  const { ingredients } = useContext(RecipesContext);
  return (
    <div className="filter-area-component">
      {ingredients?.map((ingredient, index) => (
        <IngredientCard key={index} ingredient={ingredient} />
      ))}
    </div>
  );
};

export default FilterArea;
