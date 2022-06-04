import { useState, useContext } from "react";

import IngredientsBox from "../ingredients-box/ingredients-box.component";
import Button from "../button/button.component";

import { RecipesContext } from "../../contexts/recipes.context";
import { IngredientsContext } from "../../contexts/ingredients.context";

import "./edit-recipe.styles.scss";

const EditRecipe = ({ recipe, showEdit, setShowEdit }) => {
  const { ingredients } = useContext(IngredientsContext);
  const { editRecipeHandler } = useContext(RecipesContext);

  const [editRecipe, setEditRecipe] = useState(recipe);
  const [ingredientsToAdd, setIngredientsToAdd] = useState([]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditRecipe({ ...recipe, [name]: value });
  };
  const handleClick = (e) => {
    const finalRecipe = { ...editRecipe, ingredients: ingredientsToAdd };
    console.log(finalRecipe);
    editRecipeHandler(finalRecipe);
    setShowEdit(!showEdit);
  };
  return (
    <div className="edit-recipe-container">
      Edit recipe
      <div className="add-recipe-input-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={editRecipe.name}
          onChange={handleChange}
        />
        <label htmlFor="description">Description</label>
        <input
          type="text"
          name="description"
          id="description"
          value={editRecipe.description}
          onChange={handleChange}
        />
        <label htmlFor="preparationLength">Preparation Length</label>
        <input
          type="text"
          id="preparationLength"
          name="preparationLength"
          value={editRecipe.preparation_length}
          onChange={handleChange}
        />
        <IngredientsBox
          ingredients={ingredients}
          ingredientsToAdd={ingredientsToAdd}
          setIngredientsToAdd={setIngredientsToAdd}
        />
        <Button type="add" onClick={handleClick}>
          Add
        </Button>
      </div>
    </div>
  );
};

export default EditRecipe;
