import React from "react";

const IngredientsBox = ({
  ingredients,
  setIngredientsToAdd,
  ingredientsToAdd,
}) => {
  const handleChange = (e) => {
    const { id, value } = e.target;
    if (value === 0) {
      setIngredientsToAdd(
        ingredientsToAdd.filter((ingredient) => ingredient.id !== id)
      );
    } else {
      const existingIngredient = ingredientsToAdd.find((ingredient) => {
        return ingredient.id === id;
      });
      if (existingIngredient) {
        setIngredientsToAdd(
          ingredientsToAdd.map((ingredient) => {
            if (ingredient.id === id) {
              return { ...ingredient, amount: ingredient.amount + 1 };
            } else {
              return ingredient;
            }
          })
        );
      } else {
        setIngredientsToAdd([...ingredientsToAdd, { id, amount: 1 }]);
      }
    }
  };

  return (
    <div>
      {ingredients.map((ingredient) => (
        <div key={ingredient.id}>
          {" "}
          {ingredient.name}{" "}
          <input
            type="number"
            name="amount"
            id={ingredient.id}
            defaultValue={0}
            min={0}
            max={69}
            onChange={handleChange}
          />{" "}
        </div>
      ))}
    </div>
  );
};

export default IngredientsBox;
