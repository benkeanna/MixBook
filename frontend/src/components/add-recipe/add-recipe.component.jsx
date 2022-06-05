import { useState, useContext } from "react";

import Button from "../button/button.component";
import IngredientsBox from "../ingredients-box/ingredients-box.component";

import { IngredientsContext } from "../../contexts/ingredients.context";
import { RecipesContext } from "../../contexts/recipes.context";
import { DialogsContext } from "../../contexts/dialogs.contexts";

import "./add-recipe.styles.scss";

const AddRecipe = () => {
  const [ingredientsToAdd, setIngredientsToAdd] = useState([]);
  const [recipe, setRecipe] = useState({
    name: "",
    description: "",
    preparationLength: "",
    ingredients: [],
  });
  const { ingredients } = useContext(IngredientsContext);
  const { addRecipeHandler } = useContext(RecipesContext);
  const { setShowAddRecipeDialog } = useContext(DialogsContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setRecipe({ ...recipe, [name]: value });
  };
  const handleClick = (e) => {
    const finalRecipe = { ...recipe, ingredients: ingredientsToAdd };
    addRecipeHandler(finalRecipe);
    setShowAddRecipeDialog(false);
  };

  return (
    <div className="add-recipe-container flex">
      <h1>Add Recipe</h1>
      <div className="add-recipe-input-container">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          value={recipe.name}
          onChange={handleChange}
        />
        <br></br>
        <label htmlFor="description" className="descLabel">Description</label>
        <textarea
          name="description"
          id="description"
          value={recipe.description}
          onChange={handleChange}
        />
        <br></br>
        <div className="preparationLengthDiv">
        <label htmlFor="preparationLength">Mixing takes</label>
        <input
          type="text"
          id="preparationLength"
          name="preparationLength"
          value={recipe.preparationLength}
          onChange={handleChange}
        />
        <label htmlFor="preparationLength">minutes</label>
        </div>
        <IngredientsBox
          ingredients={ingredients}
          ingredientsToAdd={ingredientsToAdd}
          setIngredientsToAdd={setIngredientsToAdd}
        />
        <div className="addButton">
          <Button type="add" onClick={handleClick}>
            Add
          </Button>
        </div>
        <div onClick={() => setShowAddRecipeDialog(false)} className="close">
          &#10005;
        </div>
      </div>
    </div>
  );
};

export default AddRecipe;
