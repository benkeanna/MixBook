import { useState, useEffect } from "react";

import Button from "../button/button.component";

const IngredientsDetail = ({ ingredients }) => {
  const [portion, setPortion] = useState(1);

  const increasePortion = (e) => {
    setPortion(portion + 1);
    ingredients.forEach((ingredient) => {
      ingredient.amount = ingredient.amount + ingredient.amount;
    });
  };

  const decreasePortion = () => {
    if (portion === 1) {
      return;
    } else {
      setPortion(portion - 1);
      ingredients.forEach((ingredient) => {
        ingredient.amount =
          ingredient.amount - Math.floor(ingredient.amount / portion);
      });
    }
  };
  return (
    <div>
      <h3>List of ingredients</h3>
      {ingredients?.map((ingredient) => (
        <p key={ingredient.id}>
          {ingredient.amount}
          {ingredient.unit} {ingredient.name}
        </p>
      ))}
      Select amount:
      <Button type="remove" onClick={decreasePortion}>
        -
      </Button>{" "}
      {portion}{" "}
      <Button type="remove" onClick={increasePortion}>
        +
      </Button>
    </div>
  );
};

export default IngredientsDetail;
