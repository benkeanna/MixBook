import "./filter-area.styles.scss";
import IngredientCard from "../ingredient-card/ingredient-card.component";

import { useContext } from "react";
import { RecipesContext } from "../../contexts/recipes.context";

const FilterArea = () => {
  const { ingredients } = useContext(RecipesContext);
  return (
    <div className="filter-area-component">
      {ingredients?.map((ingredient) => (
        <IngredientCard key={ingredient.id} ingredient={ingredient.name} />
      ))}
    </div>
  );
};

export default FilterArea;
