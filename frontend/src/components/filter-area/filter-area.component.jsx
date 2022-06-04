import "./filter-area.styles.scss";
import IngredientCard from "../ingredient-card/ingredient-card.component";
import BarLoader from "react-spinners/BarLoader";
import { useContext } from "react";
import { IngredientsContext } from "../../contexts/ingredients.context";

const FilterArea = () => {
  const { ingredients } = useContext(IngredientsContext);
  return (
    <div className="filter-area-container">
      {ingredients ? (
        ingredients.map((ingredient) => (
          <IngredientCard key={ingredient.id} ingredient={ingredient.name} />
        ))
      ) : (
        <BarLoader />
      )}
    </div>
  );
};

export default FilterArea;
