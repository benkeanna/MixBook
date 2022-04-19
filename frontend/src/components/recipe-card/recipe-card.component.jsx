import "./recipe-card.styles.scss";
import { AiFillTag } from "react-icons/ai";

const RecipeCard = ({ recipe }) => {
  const { name, description, ingredients } = recipe;
  return (
    <div className="recipe-card-container">
      <h2>{name}</h2>

      <div className="ingredients-container">
        <AiFillTag className="icon" />
        {ingredients.map((ingredient, index) => (
          <span key={index}>{ingredient} </span>
        ))}
      </div>
      <span className="desc">{description}</span>
    </div>
  );
};

export default RecipeCard;
