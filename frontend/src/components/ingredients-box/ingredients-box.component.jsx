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
          <div className="amountAndUnit">
            <input
              className="oneIngredient"
              type="text"
              pattern="[0-9]*"
              name="amount"
              id={ingredient.id}
              defaultValue={ingredient?.amount || 0}
              min={0}
              max={300}
              onChange={handleChange}
            />
            <label className="unit">{ingredient.unit}</label>
          </div>
        </div>
      ))}
    </div>
  );
};

export default IngredientsBox;
