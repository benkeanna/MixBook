import "./ingredient-card.styles.scss";

import { useContext, useState } from "react";
import { FilterContext } from "../../contexts/filter.context";

const IngredientCard = ({ ingredient }) => {
  const { addIngredient, removeIngredient } = useContext(FilterContext);
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = () => {
    if (!isChecked) {
      addIngredient(ingredient);
      setIsChecked(true);
    } else {
      removeIngredient(ingredient);
      setIsChecked(false);
    }
  };
  return (
    <div className="ingredient-card">
      <input
        type="checkbox"
        defaultChecked={isChecked}
        name={ingredient}
        onChange={handleChange}
      />
      <label htmlFor={ingredient}>{ingredient}</label>
    </div>
  );
};

export default IngredientCard;
