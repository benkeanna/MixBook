import { Link } from "react-router-dom";
import { AiFillTag } from "react-icons/ai";

import "./recipe-card.styles.scss";

const limit = 50
let descToShow = ''

const RecipeCard = ({ recipe }) => {
  const { id, name, description, ingredients } = recipe;
  if (description.length <= limit) {
    descToShow = description
  } else {
    descToShow = description.substring(0, limit) + "...";
  }
  return (
    <div className="recipe-card-container">
      <Link to={`/recipe/${id}`}>
        <h2>{name}</h2>

        <div className="ingredients-container">
          <AiFillTag className="icon" />
          {ingredients.map((ingredient, index) => (
            <div className="recipeIngredients" key={index}>{ingredient.name}, </div>
          ))}
        </div>
        <hr></hr>
        <span className="descriptionOfRecipe">{descToShow}</span>
      </Link>
    </div>
  );
};

export default RecipeCard;
