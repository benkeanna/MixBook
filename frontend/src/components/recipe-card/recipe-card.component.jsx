import { Link } from "react-router-dom";
import { AiFillTag } from "react-icons/ai";

import "./recipe-card.styles.scss";

const RecipeCard = ({ recipe }) => {
  const { id, name, description, ingredients } = recipe;
  return (
    <div className="recipe-card-container">
      <Link to={`/recipe/${id}`}>
        <h2>{name}</h2>

        <div className="ingredients-container">
          <AiFillTag className="icon" />
          {ingredients.map((ingredient, index) => (
            <div key={index}>{ingredient.name}, </div>
          ))}
        </div>
        <span className="desc">{description}</span>
      </Link>
    </div>
  );
};

export default RecipeCard;
